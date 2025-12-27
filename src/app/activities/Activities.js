"use client"
import React, { useState } from "react";
import { Calendar, MapPin, Users, Clock, Filter } from "lucide-react";

// Sample data - will be replaced with database data
const activities = [
  {
    id: 1,
    title: "Blood Donation Camp",
    date: "2024-01-15",
    location: "GEC Patan Campus",
    category: "Health",
    participants: 120,
    description:
      "Annual blood donation drive in collaboration with Red Cross Society. Successfully collected 120 units of blood.",
    status: "Completed",
    image: "/activities/blood-donation.jpg",
    organizer: "Health Wing NSS",
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    date: "2024-02-20",
    location: "Village Adalpur",
    category: "Environment",
    participants: 85,
    description:
      "Planted 500+ saplings as part of green initiative. Focus on native species for sustainable growth.",
    status: "Completed",
    image: "/activities/tree-plantation.jpg",
    organizer: "Environment Team",
  },
  {
    id: 3,
    title: "Swachh Bharat Abhiyan",
    date: "2024-03-10",
    location: "Patan City",
    category: "Cleanliness",
    participants: 150,
    description:
      "City-wide cleanliness campaign with local authorities. Cleaned public areas and spread awareness.",
    status: "Completed",
    image: "/activities/swachh-bharat.jpg",
    organizer: "Sanitation Drive Team",
  },
  {
    id: 4,
    title: "Digital Literacy Camp",
    date: "2024-04-05",
    location: "Village Schools",
    category: "Education",
    participants: 60,
    description:
      "Teaching basic computer skills to rural school students. Making technology accessible to all.",
    status: "Upcoming",
    image: "/activities/digital-literacy.jpg",
    organizer: "Education Wing",
  },
  {
    id: 5,
    title: "Health Awareness Camp",
    date: "2024-04-15",
    location: "Nearby Villages",
    category: "Health",
    participants: 100,
    description:
      "Free health checkup and awareness about hygiene. Partnering with local doctors and healthcare.",
    status: "Upcoming",
    image: "/activities/health-camp.jpg",
    organizer: "Health Wing NSS",
  },
  {
    id: 6,
    title: "NSS Day Celebration",
    date: "2023-09-24",
    location: "GEC Patan Campus",
    category: "Cultural",
    participants: 200,
    description:
      "Celebration of NSS Day with cultural programs and awareness activities. Honoring volunteer contributions.",
    status: "Completed",
    image: "/activities/nss-day.jpg",
    organizer: "NSS Core Team",
  },
];

const categories = [
  "All",
  "Health",
  "Environment",
  "Cleanliness",
  "Education",
  "Cultural",
];

const stats = [
  { icon: Calendar, value: "50+", label: "Annual Events" },
  { icon: Users, value: "5000+", label: "Beneficiaries" },
  { icon: MapPin, value: "20+", label: "Villages Covered" },
  { icon: Clock, value: "10K+", label: "Service Hours" },
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
    case "Health":
      return "bg-red-100 text-red-700";
    case "Environment":
      return "bg-green-100 text-green-700";
    case "Cleanliness":
      return "bg-blue-100 text-blue-700";
    case "Education":
      return "bg-purple-100 text-purple-700";
    case "Cultural":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredActivities = activities.filter((activity) => {
    const categoryMatch =
      selectedCategory === "All" || activity.category === selectedCategory;
    const statusMatch =
      selectedStatus === "All" || activity.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section – Light & Official */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-white border border-gray-300 text-gray-700 mb-6 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium tracking-wide">
                Events & Programs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              NSS Activities
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Explore our community service initiatives, social programs, and
              nation-building activities conducted throughout the year.
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

      {/* Filter & Activities */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              Event Calendar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Our Activities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover upcoming events and explore our completed community
              service initiatives
            </p>
          </div>

          {/* Filter Section */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Filter Activities
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                            ? "bg-blue-600 text-white shadow-lg scale-105"
                            : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Status
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Completed", "Upcoming"].map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          selectedStatus === status
                            ? "bg-orange-500 text-white shadow-lg scale-105"
                            : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                        }`}
                      >
                        {status}
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
                    {filteredActivities.length}
                  </span>{" "}
                  {filteredActivities.length === 1 ? "activity" : "activities"}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {selectedStatus !== "All" && ` (${selectedStatus})`}
                </p>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          {filteredActivities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredActivities.map((activity, index) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EActivity Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div
                      className={`absolute top-0 left-0 right-0 h-2 ${
                        activity.status === "Upcoming"
                          ? "bg-orange-500"
                          : "bg-green-500"
                      }`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          activity.status === "Upcoming"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {activity.status}
                      </span>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(
                          activity.category
                        )}`}
                      >
                        {activity.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span>
                          {new Date(activity.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span>{activity.participants} Participants</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        Organized by:{" "}
                        <span className="font-medium text-gray-700">
                          {activity.organizer}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No activities found
                </h3>
                <p className="text-gray-600 mb-4">
                  No activities match your current filters. Try adjusting your
                  selection.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedStatus("All");
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

      {/* CTA Section */}
      {/* <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Users className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Next Activity
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Be a part of meaningful change. Participate in our upcoming events
              and contribute to building a better community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Register for Events
              </button>
              <button className="px-8 py-4 border-2 border-white/40 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Activities;
