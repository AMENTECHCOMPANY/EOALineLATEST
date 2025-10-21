import React, { useEffect, useState } from 'react';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { handlePaymentSuccess } from '../lib/stripe';

const SuccessPage: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Get session ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const session_id = urlParams.get('session_id');
    
    if (session_id) {
      setSessionId(session_id);
      handlePaymentSuccess(session_id);
      
      // Fetch order details (optional)
      // fetchOrderDetails(session_id);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your order. Your payment has been processed successfully.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Package className="w-4 h-4" />
            Order Details
          </h3>
          {sessionId && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Order ID:</strong> {sessionId.substring(0, 8)}...
            </p>
          )}
          <p className="text-sm text-gray-600">
            <strong>Status:</strong> Confirmed
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            What's Next?
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• You'll receive an order confirmation email shortly</li>
            <li>• We'll send tracking information once your order ships</li>
            <li>• Expected delivery: 5-7 business days</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => window.location.href = '/shop'}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Back to Home
          </button>
        </div>

        {/* Support */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Need help? Contact us at{' '}
            <a href="mailto:support@eoaline.com" className="text-blue-600 hover:underline">
              support@eoaline.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;