import React from "react";
import { Heart, IndianRupee, Calendar, TrendingUp, Users } from "lucide-react";

// Sample data - will be replaced with database data
const welfareData = [
  {
    id: 1,
    year: "2023-24",
    amount: "₹ 25,000",
    contributors: 180,
    status: "Collected",
  },
  {
    id: 2,
    year: "2022-23",
    amount: "₹ 22,500",
    contributors: 165,
    status: "Submitted",
  },
  {
    id: 3,
    year: "2021-22",
    amount: "₹ 20,000",
    contributors: 150,
    status: "Submitted",
  },
  {
    id: 4,
    year: "2020-21",
    amount: "₹ 18,000",
    contributors: 140,
    status: "Submitted",
  },
  {
    id: 5,
    year: "2019-20",
    amount: "₹ 15,500",
    contributors: 125,
    status: "Submitted",
  },
];

const stats = [
  { icon: IndianRupee, value: "₹ 1.01L+", label: "Total Collection" },
  { icon: Heart, value: "760+", label: "Total Contributors" },
  { icon: Calendar, value: "5+", label: "Years Active" },
  { icon: TrendingUp, value: "15%", label: "Yearly Growth" },
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

const DataTable = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-blue-900 to-blue-800">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">
              Academic Year
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">
              Amount Collected
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">
              Contributors
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-white">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {welfareData.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {item.year}
              </td>
              <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                {item.amount}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  {item.contributors}
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Collected"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Welfare = () => {
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
              <Heart className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium tracking-wide">
                Sainik Welfare
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Sainik Welfare Fund
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Supporting the families of our brave soldiers through collective
              community contributions. Every contribution is a step towards
              honoring their sacrifice, courage, and service to the nation.
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

      {/* About Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 lg:p-12 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Sainik Welfare Fund
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Sainik Welfare Fund is a noble initiative to support the
                  families of our armed forces personnel. NSS volunteers at GEC
                  Patan actively participate in collecting contributions from
                  students, faculty, and staff to support this cause.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  સૈનિક કલ્યાણ ભંડોળ એ આપણા સશસ્ત્ર દળોના કર્મચારીઓના પરિવારોને
                  ટેકો આપવા માટેની એક ઉમદા પહેલ છે.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-orange-500" />
                  How We Contribute
                </h3>
                <ul className="space-y-4">
                  {[
                    "Voluntary donations from students",
                    "Faculty and staff contributions",
                    "Fundraising events and drives",
                    "Annual collection campaigns",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-gray-600">
                Making a difference in the lives of our soldiers' families
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IndianRupee className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  ₹1,01,000+
                </h3>
                <p className="text-sm text-gray-600">Total Amount Raised</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  760+
                </h3>
                <p className="text-sm text-gray-600">Generous Contributors</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">100%</h3>
                <p className="text-sm text-gray-600">Funds Submitted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              Collection Records
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Year-wise Collection Data
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent record of Sainik Welfare Fund contributions collected
              by NSS GEC Patan
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <DataTable />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Support Our Soldiers
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Your contribution, no matter how small, plays a meaningful role in
              supporting the families of our brave soldiers who selflessly
              protect our nation.
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
                Contribute Now
              </button>

              <button
                className="
          px-8 py-4 
          border border-gray-300 
          text-gray-700 font-semibold rounded-xl
          hover:bg-gray-200/70
          transition-all duration-300
        "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welfare;
