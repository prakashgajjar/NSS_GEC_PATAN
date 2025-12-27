"use client"
import React, { useState } from "react";
import { Users, GraduationCap, BookOpen, UserCheck, Search, Filter, Mail, Phone } from "lucide-react";

// Sample data - will be replaced with database data
const volunteers = [
  { id: 1, name: "Patel Rahul K.", enrollment: "210420107001", branch: "Computer Engineering", year: "3rd Year", role: "Team Leader", email: "rahul@gecpatan.ac.in", phone: "+91 98765 43210" },
  { id: 2, name: "Shah Priya M.", enrollment: "210420107002", branch: "Civil Engineering", year: "3rd Year", role: "Secretary", email: "priya@gecpatan.ac.in", phone: "+91 98765 43211" },
  { id: 3, name: "Desai Amit R.", enrollment: "210420107003", branch: "Mechanical Engineering", year: "2nd Year", role: "Volunteer", email: "amit@gecpatan.ac.in", phone: "+91 98765 43212" },
  { id: 4, name: "Prajapati Neha S.", enrollment: "210420107004", branch: "Electrical Engineering", year: "2nd Year", role: "Volunteer", email: "neha@gecpatan.ac.in", phone: "+91 98765 43213" },
  { id: 5, name: "Modi Harsh P.", enrollment: "210420107005", branch: "Computer Engineering", year: "3rd Year", role: "Coordinator", email: "harsh@gecpatan.ac.in", phone: "+91 98765 43214" },
  { id: 6, name: "Trivedi Anjali B.", enrollment: "210420107006", branch: "Civil Engineering", year: "2nd Year", role: "Volunteer", email: "anjali@gecpatan.ac.in", phone: "+91 98765 43215" },
  { id: 7, name: "Joshi Karan V.", enrollment: "210420107007", branch: "Mechanical Engineering", year: "3rd Year", role: "Volunteer", email: "karan@gecpatan.ac.in", phone: "+91 98765 43216" },
  { id: 8, name: "Raval Shreya D.", enrollment: "210420107008", branch: "Electrical Engineering", year: "3rd Year", role: "Volunteer", email: "shreya@gecpatan.ac.in", phone: "+91 98765 43217" },
  { id: 9, name: "Sharma Rohan T.", enrollment: "210420107009", branch: "Computer Engineering", year: "2nd Year", role: "Coordinator", email: "rohan@gecpatan.ac.in", phone: "+91 98765 43218" },
  { id: 10, name: "Patel Diya K.", enrollment: "210420107010", branch: "Civil Engineering", year: "3rd Year", role: "Volunteer", email: "diya@gecpatan.ac.in", phone: "+91 98765 43219" },
];

const stats = [
  { icon: Users, value: "200+", label: "Active Volunteers" },
  { icon: GraduationCap, value: "4", label: "Branches" },
  { icon: BookOpen, value: "3", label: "Year Groups" },
  { icon: UserCheck, value: "15", label: "Core Team" },
];

const StatCard = ({ icon: Icon, value, label, accent }) => (
  <div className={`rounded-2xl p-6 ${accent ? 'bg-orange-50 border border-orange-200' : 'bg-white border border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
    <div className={`w-12 h-12 rounded-xl ${accent ? 'bg-orange-500' : 'bg-blue-600'} flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className={`text-3xl font-bold mb-1 ${accent ? 'text-orange-600' : 'text-blue-600'}`}>{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const getRoleBadgeColor = (role) => {
  switch(role) {
    case "Team Leader":
      return "bg-purple-100 text-purple-700 border-purple-200";
    case "Secretary":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "Coordinator":
      return "bg-green-100 text-green-700 border-green-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const Volunteers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");

  const branches = ["all", "Computer Engineering", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering"];
  const years = ["all", "1st Year", "2nd Year", "3rd Year", "4th Year"];
  const roles = ["all", "Team Leader", "Secretary", "Coordinator", "Volunteer"];

  // Filter volunteers
  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.enrollment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === "all" || volunteer.branch === selectedBranch;
    const matchesYear = selectedYear === "all" || volunteer.year === selectedYear;
    const matchesRole = selectedRole === "all" || volunteer.role === selectedRole;
    
    return matchesSearch && matchesBranch && matchesYear && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     {/* Hero Section – Light & Professional */}
<section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
  {/* subtle background accents */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 right-10 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl">

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-white border border-gray-300 text-gray-700 mb-6 shadow-sm">
        <Users className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium tracking-wide">
          Our Team
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
        Volunteer Details
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        Meet our dedicated team of NSS volunteers who are committed to
        serving society and making a meaningful impact in the community.
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

      {/* Program Officer Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  NSS Program Officer
                </h2>
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Prof. XYZ Sharma</h3>
                  <p className="text-sm text-gray-600 mb-1">Assistant Professor, Department of Computer Engineering</p>
                  <p className="text-sm text-orange-600 font-medium">Program Officer, NSS Unit</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span>nssofficer@gecpatan.ac.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>+91 XXXXX XXXXX</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Under the guidance of our Program Officer, the NSS unit organizes various 
                  community service activities and ensures the holistic development of student volunteers.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Committee</h3>
                <ul className="space-y-3">
                  {[
                    { name: "Team Leader", count: "2 Members", color: "bg-purple-100 text-purple-700" },
                    { name: "Secretary", count: "2 Members", color: "bg-blue-100 text-blue-700" },
                    { name: "Coordinators", count: "6 Members", color: "bg-green-100 text-green-700" },
                    { name: "Core Volunteers", count: "5 Members", color: "bg-orange-100 text-orange-700" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.color}`}>{item.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Directory */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Volunteer Directory
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Active NSS Volunteers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete list of active NSS volunteers for the current academic year
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
              {/* Search Bar */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Volunteers</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or enrollment number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Filter By</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Branch Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch === "all" ? "All Branches" : branch}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year === "all" ? "All Years" : year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Role Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role === "all" ? "All Roles" : role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-bold text-blue-600">{filteredVolunteers.length}</span> of {volunteers.length} volunteers
                </p>
              </div>
            </div>
          </div>

          {/* Volunteers Table */}
          <div className="max-w-7xl mx-auto">
            {filteredVolunteers.length > 0 ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-900 to-blue-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Enrollment No.</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Branch</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Year</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredVolunteers.map((volunteer) => (
                        <tr key={volunteer.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{volunteer.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{volunteer.enrollment}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{volunteer.branch}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{volunteer.year}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeColor(volunteer.role)}`}>
                              {volunteer.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <a href={`mailto:${volunteer.email}`} className="text-blue-600 hover:text-blue-700" title={volunteer.email}>
                                <Mail className="w-4 h-4" />
                              </a>
                              <a href={`tel:${volunteer.phone}`} className="text-green-600 hover:text-green-700" title={volunteer.phone}>
                                <Phone className="w-4 h-4" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No volunteers found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Total Active Volunteers: <span className="font-bold text-blue-600">200+</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;