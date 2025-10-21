import React, { useState } from 'react';
import { X, RotateCcw, Package, CheckCircle, AlertCircle } from 'lucide-react';

interface ReturnsProcessProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReturnsProcess: React.FC<ReturnsProcessProps> = ({ isOpen, onClose }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');

  if (!isOpen) return null;

  const handleSubmitReturn = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle return request submission
    alert('Return request submitted successfully! You will receive an email with return instructions.');
    setOrderNumber('');
    setEmail('');
    setReason('');
    setComments('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Returns Process</h2>
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
          {/* Return Steps */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-amber-600" />
              How to Return Your Order
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Initiate Return</h4>
                  <p className="text-sm text-gray-600">Fill out the return form below or contact our customer service team.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-100 text-black rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Receive Return Label</h4>
                  <p className="text-sm text-gray-600">We'll email you a prepaid return shipping label within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-100 text-black rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Package & Ship</h4>
                  <p className="text-sm text-gray-600">Pack items in original packaging and attach the return label.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-100 text-black rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Receive Refund</h4>
                  <p className="text-sm text-gray-600">Refund processed within 5-7 business days after we receive your return.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Return Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Return</h3>
            <form onSubmit={handleSubmitReturn} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Number *</label>
                  <input
                    type="text"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="EOA-123456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Return *</label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="size">Wrong Size</option>
                  <option value="color">Wrong Color</option>
                  <option value="quality">Quality Issue</option>
                  <option value="damaged">Damaged in Shipping</option>
                  <option value="not-as-described">Not as Described</option>
                  <option value="changed-mind">Changed My Mind</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Please provide any additional details about your return..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Submit Return Request
              </button>
            </form>
          </div>

          {/* Important Notes */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Important Return Requirements
            </h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Items must be returned within 30 days of delivery</li>
              <li>• Items must be unworn, unwashed, and in original condition</li>
              <li>• Original tags must be attached</li>
              <li>• Items must be in original packaging</li>
              <li>• Sale items are final sale and cannot be returned</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Need Help?
            </h4>
            <p className="text-sm text-green-700">
              Contact our customer service team at <strong>returns@eoaline.com</strong> or 
              call <strong>1-800-EOA-HELP</strong> for assistance with your return.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsProcess;