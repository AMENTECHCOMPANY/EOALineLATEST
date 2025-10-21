import React from 'react';
import { X, FileText, Scale, AlertTriangle, Shield } from 'lucide-react';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
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

          {/* Acceptance */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Acceptance of Terms</h3>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the E.O.A Line website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          {/* Use License */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              Use License
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Permission is granted to temporarily download one copy of the materials on E.O.A Line's website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-gray-700 space-y-1 ml-4">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose or for any public display</li>
              <li>• Attempt to reverse engineer any software contained on the website</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          {/* Account Terms */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Account Terms</h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• You must be 18 years or older to create an account</li>
              <li>• You are responsible for maintaining the security of your account</li>
              <li>• You must provide accurate and complete information</li>
              <li>• You are responsible for all activities under your account</li>
              <li>• We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>
          </div>

          {/* Orders and Payments */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Orders and Payments</h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• All orders are subject to acceptance and availability</li>
              <li>• Prices are subject to change without notice</li>
              <li>• Payment must be received before order processing</li>
              <li>• We reserve the right to refuse or cancel any order</li>
              <li>• Promotional codes cannot be combined unless specified</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-600" />
              Intellectual Property
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All content, designs, logos, and trademarks on this website are the property of E.O.A Line and are protected 
              by copyright and trademark laws. Unauthorized use of any materials may violate copyright, trademark, and other laws.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">
              E.O.A Line shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
              your use of the website or products.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of New York, United States, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Questions About These Terms?
            </h4>
            <p className="text-sm text-amber-700">
              If you have any questions about these Terms of Service, please contact us at 
              <strong> legal@eoaline.com</strong> or call <strong>1-800-EOA-HELP</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;