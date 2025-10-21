import React from 'react';
import { X, Shield, Eye, Lock, Database } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] space-y-6">
          <div className="text-sm text-gray-500 mb-6">
            Last updated: January 2025
          </div>

          {/* Introduction */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Introduction</h3>
            <p className="text-gray-700 leading-relaxed">
              At E.O.A Line, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or make purchases from us.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Information We Collect
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Name, email address, phone number</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely)</li>
                  <li>• Account preferences and settings</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Usage Information</h4>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Website browsing behavior and preferences</li>
                  <li>• Device information and IP address</li>
                  <li>• Cookies and similar tracking technologies</li>
                  <li>• Purchase history and product interactions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-green-600" />
              How We Use Your Information
            </h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• Process and fulfill your orders</li>
              <li>• Provide customer service and support</li>
              <li>• Send order confirmations and shipping updates</li>
              <li>• Improve our website and shopping experience</li>
              <li>• Send promotional emails (with your consent)</li>
              <li>• Prevent fraud and ensure security</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Information Sharing</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:
            </p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• With service providers who help us operate our business</li>
              <li>• To comply with legal requirements or court orders</li>
              <li>• To protect our rights, property, or safety</li>
              <li>• With your explicit consent</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-red-600" />
              Data Security
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your personal information, including SSL encryption, 
              secure payment processing, and regular security audits. However, no method of transmission over the internet 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Your Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• Access and review your personal information</li>
              <li>• Request corrections to inaccurate information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Request data portability</li>
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Cookies and Tracking</h3>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Questions About Privacy?</h4>
            <p className="text-sm text-amber-700">
              Contact our Privacy Officer at <strong>privacy@eoaline.com</strong> or 
              call <strong>1-800-EOA-HELP</strong> for any privacy-related questions or concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;