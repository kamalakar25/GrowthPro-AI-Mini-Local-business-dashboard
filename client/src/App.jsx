import React, { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";
import { TrendingUp, Globe, Sparkles, BarChart3, Zap } from "lucide-react";

const API_BASE_URL = "http://localhost:3001";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [businessInfo, setBusinessInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch business data");
      }

      const data = await response.json();
      setBusinessData(data);
      setBusinessInfo(formData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessInfo) return;

    try {
      const response = await fetch(
        `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(
          businessInfo.name
        )}&location=${encodeURIComponent(businessInfo.location)}`
      );

      if (!response.ok) {
        throw new Error("Failed to regenerate headline");
      }

      const data = await response.json();
      setBusinessData((prev) => ({
        ...prev,
        headline: data.headline,
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStartOver = () => {
    setBusinessData(null);
    setBusinessInfo(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-gradient-to-br from-pink-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-3 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  GrowthProAI
                </h1>
                <p className="text-gray-600 font-medium">
                  Local Business Intelligence Platform
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-full px-4 py-2">
                  <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                  AI Powered
                </div>
                <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-full px-4 py-2">
                  <BarChart3 className="w-4 h-4 mr-2 text-blue-500" />
                  Real-time Analytics
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 bg-green-50 rounded-full px-4 py-2 border border-green-200">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Demo Mode
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-sm"></div>
            <div className="relative bg-red-50/80 backdrop-blur-sm border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">!</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-red-800">
                    Something went wrong
                  </h3>
                  <p className="mt-1 text-red-700">{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!businessData ? (
          <div className="text-center py-16">
            <div className="mb-12">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-24 h-24 rounded-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unlock powerful insights with AI-driven analytics. Get instant
                SEO headlines, performance metrics, and growth recommendations
                tailored to your business.
              </p>

              <div className="flex justify-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    AI Headlines
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-pink-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Growth</p>
                </div>
              </div>
            </div>

            <BusinessForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
                Business Intelligence Dashboard
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Here's how your business is performing in the digital landscape
              </p>
            </div>

            <BusinessCard
              businessData={businessData}
              businessInfo={businessInfo}
              onRegenerateHeadline={handleRegenerateHeadline}
            />

            <div className="text-center">
              <button
                onClick={handleStartOver}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-500/50 transition-all border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 active:scale-95">
                  Analyze Another Business
                </div>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative bg-white/80 backdrop-blur-xl border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">
                GrowthProAI
              </span>
            </div>
            <p className="text-gray-600 mb-2">
              Built with React, Tailwind CSS, and Node.js
            </p>
            <p className="text-sm text-gray-500">
              © 2025 GrowthProAI Dashboard Demo • Empowering Local Businesses
            </p>

            <div className="flex justify-center space-x-6 mt-6">
              <div className="text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2">
                🚀 Production Ready
              </div>
              <div className="text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2">
                ⚡ Lightning Fast
              </div>
              <div className="text-sm text-gray-500 bg-gray-50 rounded-full px-4 py-2">
                🎯 AI Powered
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
