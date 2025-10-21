import React from 'react';
import { X, Truck, Clock, Globe, Package } from 'lucide-react';

interface ShippingInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] space-y-8">
          {/* Shipping Options */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-600" />
              Shipping Options
            </h3>
            <div className="grid gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">Standard Shipping</h4>
                  <span className="text-amber-600 font-semibold">$15.00</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">5-7 business days</p>
                <p className="text-xs text-green-600">FREE on orders over $100</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">Express Shipping</h4>
                  <span className="text-amber-600 font-semibold">$25.00</span>
                </div>
                <p className="text-sm text-gray-600">2-3 business days</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">Overnight Shipping</h4>
                  <span className="text-amber-600 font-semibold">$45.00</span>
                </div>
                <p className="text-sm text-gray-600">Next business day</p>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Processing Time
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 mb-2">
                <strong>Standard Processing:</strong> 1-2 business days
              </p>
              <p className="text-sm text-blue-700">
                Orders placed before 2 PM EST Monday-Friday are processed the same day. 
                Weekend orders are processed on the next business day.
              </p>
            </div>
          </div>

          {/* International Shipping */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              International Shipping
            </h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Canada & Mexico</h4>
                <p className="text-sm text-gray-600 mb-1">7-14 business days • $35.00</p>
                <p className="text-xs text-gray-500">Duties and taxes may apply</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Europe & UK</h4>
                <p className="text-sm text-gray-600 mb-1">10-21 business days • $45.00</p>
                <p className="text-xs text-gray-500">Duties and taxes may apply</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Rest of World</h4>
                <p className="text-sm text-gray-600 mb-1">14-28 business days • $55.00</p>
                <p className="text-xs text-gray-500">Duties and taxes may apply</p>
              </div>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Order Tracking</h4>
            <p className="text-sm text-gray-600">
              You'll receive a tracking number via email once your order ships. 
              Track your package at any time through our website or the carrier's tracking portal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;