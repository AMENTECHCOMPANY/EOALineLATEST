import React, { useState } from 'react';
import { X, Mail, Check, Bell } from 'lucide-react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Real Supabase integration
      const { supabase } = await import('../../lib/supabase');
      const { data, error } = await supabase
        .from('notify_list')
        .insert([{ 
          email, 
          product: 'TUMI Complete Set',
          source: 'launch_page'
        }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setError('This email is already registered for notifications.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }
      
      console.log('Email saved to notify_list:', data);
      setIsSuccess(true);
      setEmail('');
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="https://ggcxbhkzkfuyyoxguizy.supabase.co/storage/v1/object/public/e.o.a-logo/E.O.A%20Logo.jpg"
              alt="E.O.A Logo"
              className="w-8 h-8 rounded-full border border-amber-400"
            />
            <span className="font-serif text-lg">E.O.A LINE</span>
          </div>
          
          <h3 className="text-2xl font-serif font-medium">Get Notified</h3>
          <p className="text-white/80 text-sm mt-2">
            Be the first to know when TUMI Complete Set launches
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Bell className="w-5 h-5" />
                    Notify Me When Available
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll only email you about the TUMI Complete Set launch. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">You're All Set!</h4>
              <p className="text-gray-600 mb-4">
                We'll notify you as soon as the TUMI Complete Set is available.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-sm text-amber-800">
                  <strong>What's next?</strong> Follow us on social media for behind-the-scenes content and exclusive previews.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;