import React from 'react';
import { X, RotateCcw, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

interface ReturnPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReturnPolicy: React.FC<ReturnPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Return Policy</h2>
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
          {/* 30-Day Guarantee */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              30-Day Return Guarantee
            </h3>
            <p className="text-green-700 leading-relaxed">
              We stand behind the quality of our products. If you're not completely satisfied with your purchase, 
              you can return it within 30 days of delivery for a full refund or exchange.
            </p>
          </div>

          {/* Return Conditions */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Return Conditions
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Eligible Items</h4>
                  <p className="text-sm text-gray-600">Items must be unworn, unwashed, and in original condition with tags attached.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Original Packaging</h4>
                  <p className="text-sm text-gray-600">Items must be returned in original packaging with all accessories included.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Time Limit</h4>
                  <p className="text-sm text-gray-600">Returns must be initiated within 30 days of delivery date.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Returnable Items */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Non-Returnable Items
            </h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="text-red-700 space-y-1">
                <li>• Sale or clearance items (marked as final sale)</li>
                <li>• Customized or personalized items</li>
                <li>• Items damaged by normal wear and tear</li>
                <li>• Items returned after 30 days</li>
                <li>• Items without original tags or packaging</li>
              </ul>
            </div>
          </div>

          {/* Refund Process */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Refund Timeline
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Processing Time</h4>
                <p className="text-sm text-gray-600">
                  Once we receive your return, please allow 3-5 business days for inspection and processing.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Refund Method</h4>
                <p className="text-sm text-gray-600">
                  Refunds will be issued to the original payment method. Credit card refunds may take 5-10 business days to appear on your statement.
                </p>
              </div>
            </div>
          </div>

          {/* Exchange Policy */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Exchange Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We offer free exchanges for size or color within 30 days of delivery. Simply indicate your exchange preference 
              when initiating your return, and we'll send the new item once we receive your return.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> If the new item has a different price, you'll be charged or refunded the difference.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Need Help with Returns?
            </h4>
            <p className="text-sm text-amber-700">
              Contact our customer service team at <strong>returns@eoafashion.com</strong> or 
              call <strong>1-800-EOA-HELP</strong> for assistance with your return or exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;