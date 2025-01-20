import React, { useState } from 'react';
import {
  Bot, Brain, Calendar, LineChart as ChartLine, MessageSquare, Shield, Stethoscope,
  Users, Activity, Clock, Award, HeartPulse, Microscope, Dna
} from 'lucide-react'; // Corrected from '1ucide-react' to 'lucide-react'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Driven Insights",
      description: "Real-time predictive analytics for instant diagnosis, personalized treatment recommendations, and proactive health monitoring using advanced machine learning algorithms",
      stats: "99.9% accuracy"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with instant alerts for vital signs, medication adherence, and lifestyle recommendations",
      stats: "24/7 monitoring"
    },
    {
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      title: "Lab Results Analysis",
      description: "Instant analysis of laboratory results with AI-powered insights and trend detection",
      stats: "< 60 sec analysis"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Medical Imaging & Analytics",
      description: "State-of-the-art AI algorithms for precise medical image analysis, early disease detection, and automated diagnosis assistance with 99% accuracy",
      stats: "3x faster diagnosis"
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Personalized Health Plans",
      description: "AI-generated custom health plans adapting to your lifestyle, goals, and medical history in real-time",
      stats: "100% personalized"
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "Virtual Health Assistant",
      description: "Advanced AI chatbot providing instant medical guidance, symptom assessment, and care recommendations",
      stats: "1M+ consultations"
    },
    {
      icon: <Dna className="w-8 h-8 text-blue-600" />,
      title: "Genetic Analysis",
      description: "Comprehensive genetic profiling with AI-powered risk assessment and preventive recommendations",
      stats: "500+ conditions"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Smart Scheduling",
      description: "AI-optimized appointment scheduling with intelligent priority management and specialist matching",
      stats: "5min avg. wait time"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Continuous AI monitoring of healthcare quality metrics and patient outcomes",
      stats: "98% satisfaction"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
        <Hero />
        <Features features={features} />
        <Team />
        <FAQ />
        <Contact />
        <ChatbotWidget />
        <Footer />
        <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}

export default App;
