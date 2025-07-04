import React, { useState } from "react";
import {
  Star,
  MessageCircle,
  Sparkles,
  RefreshCw,
  MapPin,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const BusinessCard = ({ businessData, businessInfo, onRegenerateHeadline }) => {
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerateHeadline = async () => {
    setIsRegenerating(true);
    try {
      await onRegenerateHeadline();
    } finally {
      setIsRegenerating(false);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400 opacity-60 drop-shadow-sm"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-sm">
                    {businessInfo.name}
                  </h3>
                  <p className="text-blue-100 flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2" />
                    {businessInfo.location}
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="text-sm font-medium text-blue-100">
                    Business Analytics
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                  <span className="text-sm font-medium text-blue-100">
                    Live Data
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Stats */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Rating Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200/50 hover:border-yellow-300/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800 flex items-center">
                      <Award className="w-6 h-6 mr-2 text-yellow-600" />
                      Google Rating
                    </h4>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-4xl font-bold text-gray-800">
                      {businessData.rating}
                    </span>
                    <div className="flex space-x-1">
                      {renderStars(businessData.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium">Excellent rating</p>
                </div>
              </div>

              {/* Reviews Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200/50 hover:border-green-300/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800 flex items-center">
                      <Users className="w-6 h-6 mr-2 text-green-600" />
                      Customer Reviews
                    </h4>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="flex items-baseline space-x-2 mb-3">
                    <span className="text-4xl font-bold text-gray-800">
                      {businessData.reviews}
                    </span>
                    <span className="text-gray-600 font-medium">reviews</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Strong community engagement
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Headline Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200/50 hover:border-purple-300/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 flex items-center mb-2">
                      <Sparkles className="w-7 h-7 mr-3 text-purple-600" />
                      AI-Generated SEO Headline
                    </h4>
                    <p className="text-gray-600">
                      Optimized for search engines and customer engagement
                    </p>
                  </div>
                  <button
                    onClick={handleRegenerateHeadline}
                    disabled={isRegenerating}
                    className="relative group/btn overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-sm opacity-75 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl focus:ring-4 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transform hover:scale-105 active:scale-95">
                      <RefreshCw
                        className={`w-5 h-5 ${
                          isRegenerating ? "animate-spin" : ""
                        }`}
                      />
                      <span>
                        {isRegenerating ? "Generating..." : "Regenerate"}
                      </span>
                    </div>
                  </button>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200/30">
                  <p className="text-gray-800 text-xl leading-relaxed font-semibold italic">
                    "{businessData.headline}"
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      SEO Optimized
                    </div>
                    <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      AI Generated
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Updated just now</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                Data simulated for demonstration • Powered by GrowthProAI
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Live Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
