'use client';

import Image from 'next/image';

export default function ServiceHeroImage({ 
  src, 
  alt, 
  className = "",
  colorScheme = "blue" // blue, orange, green, purple
}) {
  
  // Color schemes based on the reference design
  const colorSchemes = {
    blue: {
      primary: "from-blue-400 to-blue-600",
      secondary: "from-cyan-300 to-blue-400", 
      accent: "from-indigo-400 to-purple-500",
      background: "from-blue-50 to-cyan-50"
    },
    orange: {
      primary: "from-orange-400 to-red-500",
      secondary: "from-yellow-300 to-orange-400",
      accent: "from-pink-400 to-red-500", 
      background: "from-orange-50 to-yellow-50"
    },
    green: {
      primary: "from-green-400 to-emerald-600",
      secondary: "from-lime-300 to-green-400",
      accent: "from-teal-400 to-green-500",
      background: "from-green-50 to-emerald-50"
    },
    purple: {
      primary: "from-purple-400 to-indigo-600", 
      secondary: "from-pink-300 to-purple-400",
      accent: "from-violet-400 to-purple-500",
      background: "from-purple-50 to-pink-50"
    }
  };

  const colors = colorSchemes[colorScheme] || colorSchemes.blue;

  return (
    <div className={`relative ${className}`}>
      {/* Main Container */}
      <div className="relative w-80 h-80 mx-auto">
        
        {/* Background with geometric shapes */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {/* Base background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.background}`}></div>
          
          {/* Large Blue Circle (top-right) */}
          <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${colors.primary} rounded-full opacity-80 blur-sm`}></div>
          
          {/* Orange Circle (bottom-left) */}
          <div className={`absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br ${colors.secondary} rounded-full opacity-75`}></div>
          
          {/* Yellow/Green Circle (middle-left) */}
          <div className={`absolute top-1/3 -left-6 w-20 h-20 bg-gradient-to-br ${colors.accent} rounded-full opacity-70`}></div>
          
          {/* Small accent circles */}
          <div className={`absolute top-16 right-16 w-12 h-12 bg-gradient-to-br ${colors.primary} rounded-full opacity-60`}></div>
          <div className={`absolute bottom-20 right-8 w-8 h-8 bg-gradient-to-br ${colors.secondary} rounded-full opacity-50`}></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 rotate-45 bg-gradient-to-br from-white/30 to-white/10 opacity-70"></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 rotate-12 bg-gradient-to-br from-white/25 to-white/5 opacity-60"></div>
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        </div>

        {/* Image Container with modern styling */}
        <div className="absolute inset-8 rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
          {/* Image wrapper */}
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 240px, 280px"
                priority
              />
            </div>
          </div>
          
          {/* Subtle inner highlight */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10"></div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-8 right-12 w-3 h-3 bg-white rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute bottom-12 left-8 w-2 h-2 bg-white rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-3xl shadow-lg bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-8px) rotate(1deg) scale(1.02); 
          }
          66% { 
            transform: translateY(-4px) rotate(-1deg) scale(0.98); 
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
