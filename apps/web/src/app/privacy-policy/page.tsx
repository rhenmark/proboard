// src/components/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg mb-4"><strong>Effective Date:</strong> September 13, 2024</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Proboard! This Privacy Policy explains how we collect, use, and safeguard visitor information when you access our platform. By using Proboard, you agree to the practices described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
      <p className="mb-4">
        <strong>Visitor Data:</strong> We collect information about your visit to Proboard, including your IP address, browser type, and usage patterns. This data helps us understand how visitors interact with our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Monitor and analyze the performance of Proboard.</li>
        <li>Improve the functionality and content of our platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. How We Share Your Information</h2>
      <p className="mb-4">
        We do not sell, rent, or share your visitor data with third parties, except as necessary to comply with legal obligations or protect our rights.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect visitor data from unauthorized access or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Choices</h2>
      <p className="mb-4">
        As we do not collect personal information, you do not need to make choices regarding your data. However, you can control your browser settings to manage cookies and tracking technologies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy periodically. Any changes will be posted on Proboard, and you are encouraged to review it regularly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        <strong>Email:</strong> <a href="mailto:proboard.contact@gmail.com" className="text-blue-600 hover:underline">proboard.contact@gmail.com</a>
        <br />
        <strong>Address:</strong> Bacolod, Philippines
      </p>
    </div>
  );
};

export default PrivacyPolicy;
