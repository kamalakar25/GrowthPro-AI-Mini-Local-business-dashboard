import React, { useState } from "react";
import { MapPin, Building2, Loader2, Sparkles } from "lucide-react";

const BusinessForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Business name is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Business Insights
            </h2>
            <p className="text-gray-600 text-lg">
              Discover your business potential with AI-powered analytics
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Business Name
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${
                      errors.name
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="e.g., Artisan Coffee House"
                    disabled={isLoading}
                  />
                </div>
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-gray-700 mb-3"
              >
                Location
              </label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors duration-200" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50/50 border-2 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-gray-900 placeholder-gray-500 ${
                      errors.location
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    placeholder="e.g., Hyderabad, India"
                    disabled={isLoading}
                  />
                </div>
              </div>
              {errors.location && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.location}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 transform hover:scale-[1.02] active:scale-[0.98]">
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin w-6 h-6" />
                    <span>Analyzing Business...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    <span>Get Business Insights</span>
                  </>
                )}
              </div>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default BusinessForm;
