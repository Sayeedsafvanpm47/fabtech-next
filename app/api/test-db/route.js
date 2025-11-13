import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = createServerClient();
    
    // Test database connection and table existence
    const { data, error, count } = await supabase
      .from('bookings')
      .select('*', { count: 'exact', head: true });

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error,
        message: 'Database table does not exist or connection failed'
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      tableExists: true,
      recordCount: count || 0,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Failed to connect to database'
    }, { status: 500 });
  }
}

