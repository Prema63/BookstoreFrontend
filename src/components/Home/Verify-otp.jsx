import React from 'react';
import { useState, useRef, useEffect } from 'react';

export default function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    if (pastedData.some(char => isNaN(char))) return;

    const newOtp = [...otp];
    pastedData.forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleVerify = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsVerifying(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo: accept "123456" as correct OTP
    if (otpValue === '123456') {
      setIsSuccess(true);
    } else {
      setError('Invalid OTP. Try 123456');
      setIsVerifying(false);
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setError('');
    setIsSuccess(false);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Verify OTP
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter the 6-digit code sent to your device
          </p>
        </div>

        {!isSuccess ? (
          <>
            <div className="flex gap-2 sm:gap-3 justify-center mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 text-center text-xl sm:text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
                  disabled={isVerifying}
                />
              ))}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <button
              onClick={handleVerify}
              disabled={isVerifying || otp.join('').length !== 6}
              className="w-full bg-indigo-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mb-4"
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Verify OTP'
              )}
            </button>

            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">Didn't receive the code?</p>
              <button
                onClick={handleResend}
                className="text-indigo-600 font-semibold hover:text-indigo-700 text-sm sm:text-base"
              >
                Resend OTP
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Verification Successful!</h3>
            <p className="text-gray-600 mb-6">Your OTP has been verified successfully.</p>
            <button
              onClick={handleResend}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          Demo: Use code <span className="font-mono font-semibold">123456</span> to verify
        </p>
      </div>
    </div>
  );
}