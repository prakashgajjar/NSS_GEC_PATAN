"use client"
import React from 'react';
import { 
  Users, 
  Award, 
  Heart, 
  FileText, 
  Calendar, 
  ArrowRight,
  BookOpen,
  Target,
  Handshake
} from "lucide-react";
import FAQ from './FAQ';
import HeroSlider from './HeroSlider';

const stats = [
  { icon: Users, value: "200+", label: "Active Volunteers" },
  { icon: Calendar, value: "50+", label: "Annual Activities" },
  { icon: Award, value: "25+", label: "Achievements" },
  { icon: Heart, value: "10K+", label: "Hours of Service" },
];

const quickLinks = [
  {
    icon: Heart,
    title: "Sainik Welfare Fund",
    description: "Supporting the families of our brave soldiers through community contributions.",
    path: "/welfare",
    accent: true,
  },
  {
    icon: Award,
    title: "Achievements",
    description: "Celebrating our volunteers' accomplishments and recognition.",
    path: "/achievements",
  },
  {
    icon: Users,
    title: "Volunteer Details",
    description: "Meet our dedicated team of NSS volunteers making a difference.",
    path: "/volunteers",
  },
  {
    icon: Calendar,
    title: "NSS Activities",
    description: "Explore our community service events and social initiatives.",
    path: "/activities",
    accent: true,
  },
  {
    icon: FileText,
    title: "Annual Reports",
    description: "Access detailed yearly reports of our activities and achievements.",
    path: "/reports",
  },
];

const StatCard = ({ icon: Icon, value, label, accent = false }) => {
  return (
    <div
      className={`
        relative box-border overflow-hidden
        rounded-xl bg-white border
        ${accent ? "border-orange-300" : "border-gray-200"}
        p-6 transition-colors duration-300
        hover:border-blue-400
      `}
    >
      {/* Accent strip */}
      <div
        className={`absolute left-0 top-0 h-full w-1 
        ${accent ? "bg-orange-500" : "bg-blue-600"}`}
      />

      {/* Icon */}
      <div
        className={`
          w-11 h-11 rounded-lg flex items-center justify-center mb-4
          ${accent ? "bg-orange-100" : "bg-blue-100"}
        `}
      >
        <Icon
          className={`w-5 h-5 ${
            accent ? "text-orange-600" : "text-blue-700"
          }`}
        />
      </div>

      {/* Value */}
      <div
        className={`
          text-3xl font-semibold tracking-tight mb-1
          ${accent ? "text-orange-700" : "text-blue-800"}
        `}
      >
        {value}
      </div>

      {/* Label */}
      <div className="text-sm text-gray-600 leading-snug">
        {label}
      </div>
    </div>
  );
};



const DataCard = ({ icon: Icon, title, description, accent, children }) => (
  <div className={`rounded-3xl p-8 ${accent ? 'bg-gradient-to-br from-orange-50 to-orange-50/30' : 'bg-gradient-to-br from-blue-50/30 to-blue-50/50'} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50`}>
    <div className={`w-14 h-14 rounded-2xl ${accent ? 'bg-orange-100' : 'bg-blue-100'} flex items-center justify-center mb-4`}>
      <Icon className={`w-7 h-7 ${accent ? 'text-orange-600' : 'text-blue-600'}`} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-5 text-sm leading-relaxed">{description}</p>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    hero: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl hover:scale-105',
    glass: 'bg-white/10 backdrop-blur-sm border-2 hover:bg-white/20',
  };
  
  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

    <HeroSlider />

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} accent={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4" />
                About NSS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Building Better Citizens Through Service
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-base">
                The National Service Scheme (NSS) is a Central Sector Scheme under the Ministry of Youth Affairs & Sports, 
                Government of India. NSS was launched in 1969 with the primary objective of developing the personality 
                and character of student youth through voluntary community service.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-base">
                At GEC Patan, our NSS unit actively engages students in various community development programs, 
                social awareness campaigns, and nation-building activities, fostering a sense of responsibility 
                and commitment to serve society.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium">Community Service</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium">Skill Development</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium">Social Welfare</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-gray-100 to-blue-50/30 p-1">
                <div className="rounded-3xl bg-white shadow-2xl p-12 flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <div className="w-28 h-28 rounded-full bg-blue-900 mx-auto mb-8 flex items-center justify-center shadow-lg">
                      <Target className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 text-base leading-relaxed max-w-sm mx-auto">
                      To develop student personality through community service and promote national integration.
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200/50 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-100/50 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section id="activities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Our Portal</h2>
            <p className="text-gray-500 text-lg">Quick access to all NSS resources, reports, and information</p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {quickLinks.map((link, index) => (
              <a key={index} href={link.path} className="group block">
                <DataCard
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                  accent={link.accent}
                >
                  <div className={`flex items-center gap-2 text-sm font-semibold ${link.accent ? 'text-orange-600' : 'text-blue-600'} group-hover:gap-3 transition-all`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform" />
                  </div>
                </DataCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <FAQ/>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-12 lg:p-16">
            {/* Decorative */}
            {/* <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Join the Movement
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Be a part of the change. Join NSS and contribute to building a better India through 
                selfless service and community development.
              </p>
              <Button variant="hero" size="lg">
                View Our Activities
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div> */}
      {/* </section> */} */

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;