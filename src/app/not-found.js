"use client"
import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-slate-200 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
          </div>
        </div>

        {/* Astronaut illustration placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <svg width="200" height="200" viewBox="0 0 200 200" className="animate-float">
              {/* Astronaut body */}
              <circle cx="100" cy="80" r="35" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2"/>
              <circle cx="100" cy="80" r="25" fill="#475569" opacity="0.1"/>
              <rect x="75" y="110" width="50" height="60" rx="10" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>
              
              {/* Arms */}
              <rect x="50" y="120" width="25" height="15" rx="7" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>
              <rect x="125" y="120" width="25" height="15" rx="7" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2"/>
              
              {/* Stars */}
              <circle cx="30" cy="40" r="2" fill="#fbbf24" className="animate-pulse"/>
              <circle cx="170" cy="60" r="2" fill="#fbbf24" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <circle cx="50" cy="150" r="2" fill="#fbbf24" className="animate-pulse" style={{animationDelay: '1s'}}/>
              <circle cx="160" cy="140" r="2" fill="#fbbf24" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          UH OH! Youre Lost in Space
        </h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for doesnt exist or has been moved. 
          Lets get you back on track!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home size={20} />
            Go Home
          </button>
        </div>

        {/* Help text */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-3">Need help finding something?</p>
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <Search size={18} />
            Search our site
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}