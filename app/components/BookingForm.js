'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AddressAutocomplete from './AddressAutocomplete';

// Form validation schema
const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  phoneNumber: z.string().min(8, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().min(10, 'Please provide a detailed address'),
  serviceOption: z.string().min(1, 'Please select a service option'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  specialInstructions: z.string().optional(),
});

export default function BookingForm({ service, serviceKey }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const watchedAddress = watch('address');

  // Calculate total cost
  useEffect(() => {
    let total = 0;
    
    if (selectedOption) {
      const option = service.options.find(opt => opt.id === selectedOption);
      if (option) {
        total += option.basePrice;
      }
    }

    selectedAddOns.forEach(addOnId => {
      const addOn = service.addOns.find(addon => addon.id === addOnId);
      if (addOn) {
        total += addOn.price;
      }
    });

    setTotalCost(total);
  }, [selectedOption, selectedAddOns, service]);

  // Handle add-on selection
  const toggleAddOn = (addOnId) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    
    try {
      // Validate required fields
      if (!selectedOption) {
        throw new Error('Please select a service option');
      }

      const bookingData = {
        ...data,
        serviceKey,
        serviceName: service.name,
        selectedOption,
        selectedAddOns: selectedAddOns || [],
        totalCost: totalCost || 0,
        selectedLocation: selectedLocation || null,
        bookingDate: new Date().toISOString(),
        status: 'pending'
      };

      console.log('Submitting booking data:', bookingData);

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const responseData = await response.json();
      console.log('API response:', responseData);

      if (response.ok) {
        setSubmissionStatus('success');
        // Reset form after 5 seconds
        setTimeout(() => {
          reset();
          setSelectedOption('');
          setSelectedAddOns([]);
          setSelectedLocation(null);
          setSubmissionStatus(null);
        }, 5000);
      } else {
        throw new Error(responseData.error || 'Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmissionStatus('error');
      // Clear error after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Time slots
  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Book {service.name}
      </h2>

      {/* Success Message */}
      {submissionStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-green-800">
                Booking Completed Successfully!
              </h3>
              <p className="text-green-700 mt-1">
                Thank you for your booking. FabTech will contact you shortly to confirm the details and schedule your service.
              </p>
              <p className="text-sm text-green-600 mt-2">
                📧 A confirmation email has been sent to our team.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submissionStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">
                Something Went Wrong
              </h3>
              <p className="text-red-700 mt-1">
                We couldn&apos;t process your booking at the moment. Please try again or contact us directly.
              </p>
              <div className="mt-3 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setSubmissionStatus(null)}
                  className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-md hover:bg-red-200 transition-colors"
                >
                  Try Again
                </button>
                <a
                  href="tel:+97444123456"
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
                >
                  Call Us: +974 4412 3456
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${submissionStatus === 'success' ? 'opacity-50 pointer-events-none' : ''}`}>
        
        {/* Service Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Service Option *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.options.map((option) => (
              <div
                key={option.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedOption === option.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-300'
                }`}
                onClick={() => {
                  setSelectedOption(option.id);
                  setValue('serviceOption', option.id);
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{option.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-red-600">
                      QAR {option.basePrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {errors.serviceOption && (
            <p className="mt-1 text-sm text-red-600">{errors.serviceOption.message}</p>
          )}
        </div>

        {/* Add-ons */}
        {service.addOns && service.addOns.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Additional Services (Optional)
            </label>
            <div className="space-y-2">
              {service.addOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor={addOn.id} className="ml-3 text-sm font-medium text-gray-700">
                      {addOn.name}
                    </label>
                  </div>
                  <span className="text-sm font-semibold text-red-600">
                    +QAR {addOn.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cost Summary */}
        {selectedOption && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Cost Summary</h4>
            <div className="space-y-1 text-sm">
              {(() => {
                const option = service.options.find(opt => opt.id === selectedOption);
                return option ? (
                  <div className="flex justify-between">
                    <span>{option.name}</span>
                    <span>QAR {option.basePrice}</span>
                  </div>
                ) : null;
              })()}
              
              {selectedAddOns.map(addOnId => {
                const addOn = service.addOns.find(addon => addon.id === addOnId);
                return addOn ? (
                  <div key={addOnId} className="flex justify-between">
                    <span>{addOn.name}</span>
                    <span>QAR {addOn.price}</span>
                  </div>
                ) : null;
              })}
              
              <div className="border-t border-red-200 pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-red-600">QAR {totalCost}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              {...register('customerName')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your full name"
            />
            {errors.customerName && (
              <p className="mt-1 text-sm text-red-600">{errors.customerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phoneNumber')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="+974 XXXX XXXX"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Address *
          </label>
          <AddressAutocomplete
            value={watchedAddress || ''}
            onChange={(value) => setValue('address', value)}
            placeholder="Start typing your address in Qatar..."
            error={errors.address?.message}
          />
          <p className="text-xs text-gray-500 mt-1">
            📍 Address suggestions powered by Google Maps
          </p>
        </div>

        {/* Preferred Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              {...register('preferredDate')}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time *
            </label>
            <select
              {...register('preferredTime')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Instructions (Optional)
          </label>
          <textarea
            {...register('specialInstructions')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            placeholder="Any specific requirements or instructions for our team..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !selectedOption}
            className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              `Book Now - QAR ${totalCost}`
            )}
          </button>
        </div>

        {/* Terms */}
        <div className="text-xs text-gray-600 text-center">
          By booking this service, you agree to our terms and conditions. 
          A confirmation call will be made within 2 hours of booking.
        </div>
      </form>

    </div>
  );
}
