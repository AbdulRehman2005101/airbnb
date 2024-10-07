import React from "react";

const Upper_Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around gap-6 p-6 bg-gray-50">
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-semibold text-gray-900">Support</h1>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Live Chat</li>
            <li>Community Forum</li>
            <li>Accessibility Help</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-semibold text-gray-900">Hosting</h1>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Host Your Home</li>
            <li>Host an Experience</li>
            <li>Responsible Hosting</li>
            <li>Hosting Resources</li>
            <li>Insurance for Hosts</li>
            <li>Community Center</li>
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-semibold text-gray-900">Airbnb</h1>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift Cards</li>
            <li>Policies</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Upper_Footer;
