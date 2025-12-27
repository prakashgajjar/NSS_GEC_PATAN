"use client";
import React, { useState } from "react";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  UserCircle,
  Building2,
  Filter,
} from "lucide-react";

// Sample data - will be replaced with database data
const achievements = [
  {
    id: 1,
    title: "Best NSS Unit Award",
    year: "2023",
    category: "State Level",
    description:
      "Recognized as the best performing NSS unit in Gujarat for outstanding community service.",
    icon: Trophy,
    image: "/achievements/best-unit-award.jpg",
    awardedBy: "Government of Gujarat",
    receivedBy: "Dr. Program Officer Name",
  },
  {
    id: 2,
    title: "Blood Donation Champion",
    year: "2023",
    category: "University Level",
    description:
      "Highest blood donation collection among all engineering colleges in GTU.",
    icon: Medal,
    image: "/achievements/blood-donation.jpg",
    awardedBy: "Gujarat Technological University",
    receivedBy: "NSS Volunteer Team",
  },
  {
    id: 3,
    title: "Environment Conservation Award",
    year: "2022",
    category: "District Level",
    description:
      "Excellence in tree plantation and environmental awareness campaigns.",
    icon: Award,
    image: "/achievements/environment-award.jpg",
    awardedBy: "District Collector, Patan",
    receivedBy: "Green Initiative Team",
  },
  {
    id: 4,
    title: "Social Service Excellence",
    year: "2022",
    category: "State Level",
    description:
      "Outstanding contribution to rural development and community welfare programs.",
    icon: Star,
    image: "/achievements/social-service.jpg",
    awardedBy: "Ministry of Youth Affairs & Sports",
    receivedBy: "Rural Development Wing",
  },
  {
    id: 5,
    title: "Youth Leadership Award",
    year: "2021",
    category: "National Level",
    description:
      "Recognition for exemplary youth leadership and community engagement.",
    icon: Trophy,
    image: "/achievements/youth-leadership.jpg",
    awardedBy: "National Service Scheme, India",
    receivedBy: "Student Leaders Team",
  },
  {
    id: 6,
    title: "Swachh Bharat Champion",
    year: "2021",
    category: "District Level",
    description:
      "Best practices in cleanliness and sanitation awareness drives.",
    icon: Medal,
    image: "/achievements/swachh-bharat.jpg",
    awardedBy: "Swachh Bharat Mission, Patan",
    receivedBy: "Sanitation Drive Team",
  },
];

const stats = [
  { icon: Trophy, value: "25+", label: "Total Awards" },
  { icon: Star, value: "5", label: "State Level" },
  { icon: Medal, value: "8", label: "University Level" },
  { icon: Award, value: "12", label: "District Level" },
];

const StatCard = ({ icon: Icon, value, label, accent }) => (
  <div
    className={`rounded-2xl p-6 ${
      accent
        ? "bg-orange-50 border border-orange-200"
        : "bg-white border border-gray-200"
    } shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
  >
    <div
      className={`w-12 h-12 rounded-xl ${
        accent ? "bg-orange-500" : "bg-blue-600"
      } flex items-center justify-center mb-4`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div
      className={`text-3xl font-bold mb-1 ${
        accent ? "text-orange-600" : "text-blue-600"
      }`}
    >
      {value}
    </div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const getCategoryColor = (category) => {
  switch (category) {
    case "National Level":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "State Level":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "University Level":
      return "bg-green-100 text-green-700 border-green-200";
    case "District Level":
      return "bg-orange-100 text-orange-700 border-orange-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const Achievements = () => {
  const [selectedYear, setSelectedYear] = React.useState("all");
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  // Get unique years and categories
  const years = ["all", ...new Set(achievements.map((a) => a.year))].sort(
    (a, b) => {
      if (a === "all") return -1;
      if (b === "all") return 1;
      return b - a;
    }
  );

  const categories = [
    "all",
    "National Level",
    "State Level",
    "University Level",
    "District Level",
  ];

  // Filter achievements
  const filteredAchievements = achievements.filter((achievement) => {
    const yearMatch =
      selectedYear === "all" || achievement.year === selectedYear;
    const categoryMatch =
      selectedCategory === "all" || achievement.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-white border border-gray-300 text-gray-700 mb-6 shadow-sm"
            >
              <Trophy className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium tracking-wide">
                Recognition & Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Our Achievements
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Celebrating the outstanding accomplishments and recognition earned
              by our
              <span className="font-semibold text-gray-800"> NSS unit </span>
              and the dedicated volunteers who continue to serve society with
              commitment and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} accent={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Awards & Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognizing our commitment to community service and social
              development
            </p>
          </div>

          {/* Filter Section */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Filter Achievements
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Year
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          selectedYear === year
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                        }`}
                      >
                        {year === "all" ? "All Years" : year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-orange-500 text-white shadow-lg scale-105"
                            : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                        }`}
                      >
                        {category === "all" ? "All Categories" : category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-bold text-blue-600">
                    {filteredAchievements.length}
                  </span>{" "}
                  {filteredAchievements.length === 1
                    ? "achievement"
                    : "achievements"}
                  {selectedYear !== "all" && ` from ${selectedYear}`}
                  {selectedCategory !== "all" && ` in ${selectedCategory}`}
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Cards */}
          {filteredAchievements.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredAchievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EAward Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <div className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-orange-500" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                            achievement.category
                          )}`}
                        >
                          {achievement.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {achievement.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2 text-sm">
                          <Building2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-500 text-xs">
                              Awarded By:
                            </span>
                            <p className="text-gray-700 font-medium">
                              {achievement.awardedBy}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <UserCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="text-gray-500 text-xs">
                              Received By:
                            </span>
                            <p className="text-gray-700 font-medium">
                              {achievement.receivedBy}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">
                            Year: {achievement.year}
                          </span>
                        </div>
                        <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold flex items-center gap-1 group/btn">
                          View Details
                          <svg
                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No achievements found
                </h3>
                <p className="text-gray-600 mb-4">
                  No achievements match your current filters. Try adjusting your
                  selection.
                </p>
                <button
                  onClick={() => {
                    setSelectedYear("all");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Achievement Timeline
              </h2>
              <p className="text-gray-600">
                A chronological view of our milestones
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "2023",
                  count: "2",
                  highlight: "Best NSS Unit Award at State Level",
                },
                {
                  year: "2022",
                  count: "2",
                  highlight:
                    "Environment Conservation & Social Service Excellence",
                },
                {
                  year: "2021",
                  count: "2",
                  highlight: "National Recognition for Youth Leadership",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.year}
                    </div>
                    {index < 2 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-orange-400 to-orange-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-gray-900">
                        {item.count} Major Awards
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        {/* subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm">
                <Star className="w-8 h-8 text-gray-700" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Be Part of Our Success Story
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Join{" "}
              <span className="font-semibold text-gray-800">NSS GEC Patan</span>{" "}
              and contribute to our legacy of excellence in community service.
              Together, we continue to achieve meaningful milestones.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="
          px-8 py-4
          bg-gray-800 hover:bg-gray-900
          text-white font-semibold rounded-xl
          transition-all duration-300
          shadow-md hover:shadow-lg hover:scale-[1.03]
        "
              >
                Join NSS Today
              </button>

              <button
                className="
          px-8 py-4
          border border-gray-400
          text-gray-700 font-semibold rounded-xl
          hover:bg-gray-200/70
          transition-all duration-300
        "
              >
                View All Awards
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
