"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/nss1.jpg"
                  alt="NSS Logo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  NSS GEC Patan
                </h3>
                <p className="text-xs text-gray-500">
                  Not Me But You
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              National Service Scheme unit of Government Engineering College, Patan.
              Dedicated to community service and nation building.
            </p>

            {/* Social */}
            <h5 className="text-sm font-semibold mb-3 text-gray-800">
              Follow Us
            </h5>
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/nss_gecpatan",
                  icon: <Instagram className="w-5 h-5" />,
                  label: "Instagram",
                },
                {
                  href: "https://www.facebook.com/nss.gecpatan",
                  icon: <Facebook className="w-5 h-5" />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/nss_gecpatan",
                  icon: <Twitter className="w-5 h-5" />,
                  label: "Twitter",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="
                    w-9 h-9 rounded-full
                    bg-white border border-gray-300
                    flex items-center justify-center
                    hover:bg-gray-800 hover:text-white
                    transition-all
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Sainik Welfare", path: "/welfare" },
                { name: "Achievements", path: "/achievements" },
                { name: "Volunteers", path: "/volunteers" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { name: "NSS Activities", path: "/activities" },
                { name: "Annual Reports", path: "/reports" },
                { name: "Admin Portal", path: "/admin" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="https://nss.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
                >
                  NSS India <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                Government Engineering College, Patan, Gujarat – 384265
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                nss@gecpatan.ac.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 bg-gray-200">
        <div className="container mx-auto px-4 py-4 text-xs text-gray-600 flex flex-col sm:flex-row justify-between">
          <p>© 2024 NSS GEC Patan. All rights reserved.</p>
          <p>Developed by NSS GEC Patan team for Nation Building</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
