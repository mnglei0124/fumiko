"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const [isNoButtonTransformed, setIsNoButtonTransformed] = useState(false);

  const handleNoClick = () => {
    setIsNoButtonTransformed(true);
  };

  const handleYesClick = async () => {
    setShowDialog(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-pink-50">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Hey Fumiko...</h1>

        <div className="mb-8"></div>

        <p className="text-xl text-gray-700 mb-12">
          Would you like to go home with me? 🏡
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleYesClick}
            className="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all"
          >
            Yes 😊
          </button>

          <button
            onClick={isNoButtonTransformed ? handleYesClick : handleNoClick}
            className={`px-8 py-3 rounded-full transition-all ${
              isNoButtonTransformed
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {isNoButtonTransformed ? "Yes 😊" : "No 😢"}
          </button>
        </div>

        {showDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg max-w-md w-full text-black">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">Yay! 🎉</h2>
              <p className="mb-4">Call me at: +976 88180956</p>
              <p className="mb-4">
                {`Let's meet at Sukhbaatar Square! Call me or text me! 🌟`}
              </p>
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-pink-500 text-white rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
