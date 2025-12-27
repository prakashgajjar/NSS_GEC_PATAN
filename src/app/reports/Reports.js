"use client";
import React, { useState } from "react";
import { FileText, Download, Calendar, Eye, Search } from "lucide-react";

// Sample data - will be replaced with database data
const reports = [
  {
    id: 1,
    title: "Annual Report 2023-24",
    year: "2023-24",
    pages: 45,
    uploadDate: "2024-03-15",
    downloadUrl: "/reports/annual-2023-24.pdf",
    description:
      "Comprehensive annual report covering all NSS activities, achievements, and community service initiatives for the academic year 2023-24.",
  },
  {
    id: 2,
    title: "Annual Report 2022-23",
    year: "2022-23",
    pages: 42,
    uploadDate: "2023-03-20",
    downloadUrl: "/reports/annual-2022-23.pdf",
    description:
      "Complete documentation of NSS programs, volunteer participation, and social impact during 2022-23.",
  },
  {
    id: 3,
    title: "Annual Report 2021-22",
    year: "2021-22",
    pages: 38,
    uploadDate: "2022-03-18",
    downloadUrl: "/reports/annual-2021-22.pdf",
    description:
      "Annual overview of NSS activities including health camps, tree plantation drives, and community development programs.",
  },
  {
    id: 4,
    title: "Annual Report 2020-21",
    year: "2020-21",
    pages: 35,
    uploadDate: "2021-03-25",
    downloadUrl: "/reports/annual-2020-21.pdf",
    description:
      "Documentation of NSS activities during COVID-19 pandemic including relief work and awareness campaigns.",
  },
  {
    id: 5,
    title: "Annual Report 2019-20",
    year: "2019-20",
    pages: 40,
    uploadDate: "2020-03-15",
    downloadUrl: "/reports/annual-2019-20.pdf",
    description:
      "Annual report featuring blood donation camps, literacy programs, and rural development initiatives.",
  },
  {
    id: 6,
    title: "Annual Report 2018-19",
    year: "2018-19",
    pages: 36,
    uploadDate: "2019-03-20",
    downloadUrl: "/reports/annual-2018-19.pdf",
    description:
      "Yearly documentation of NSS community service, environmental conservation efforts, and social welfare programs.",
  },
];

const stats = [
  { icon: FileText, value: "6", label: "Annual Reports" },
  { icon: Calendar, value: "6", label: "Years Covered" },
  { icon: Download, value: "800+", label: "Downloads" },
  { icon: Eye, value: "3K+", label: "Views" },
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
  return "bg-blue-100 text-blue-700";
};

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = reports.filter((report) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      report.title.toLowerCase().includes(searchLower) ||
      report.year.toLowerCase().includes(searchLower) ||
      report.description.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
        {/* subtle background accents */}
        <div className="absolute inset-0">
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
              <FileText className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium tracking-wide">
                Documentation
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Annual Reports
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Access detailed yearly reports highlighting NSS activities,
              achievements, financial transparency, and community service
              initiatives.
            </p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      */
      {/* Reports Grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Report Archive
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Our Reports
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download official reports and documentation from our NSS
              activities
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Reports
                </h3>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by year, title, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Results Count */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  {searchTerm ? (
                    <>
                      Found{" "}
                      <span className="font-bold text-blue-600">
                        {filteredReports.length}
                      </span>{" "}
                      {filteredReports.length === 1 ? "report" : "reports"}{" "}
                      matching "{searchTerm}"
                    </>
                  ) : (
                    <>
                      Showing{" "}
                      <span className="font-bold text-blue-600">
                        {filteredReports.length}
                      </span>{" "}
                      annual{" "}
                      {filteredReports.length === 1 ? "report" : "reports"}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Reports Grid */}
          {filteredReports.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredReports.map((report, index) => (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
                    <div className="w-20 h-24 bg-white rounded-lg shadow-lg mx-auto flex items-center justify-center mb-4 relative overflow-hidden group">
                      <FileText className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-2 bg-blue-100 text-blue-700">
                        Annual Report
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {report.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {report.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-2 text-sm mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Year</span>
                        <span className="font-semibold text-gray-900">
                          {report.year}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Pages</span>
                        <span className="font-semibold text-gray-900">
                          {report.pages}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Uploaded</span>
                        <span className="font-semibold text-gray-900">
                          {new Date(report.uploadDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-7xl mx-auto text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No reports found
                </h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm
                    ? `No reports match your search "${searchTerm}". Try different keywords.`
                    : "No annual reports are currently available."}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Request Section */}
    </div>
  );
};

export default Reports;
