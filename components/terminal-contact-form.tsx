"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function TerminalContactForm({ onClose }:any) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentInput, setCurrentInput] = useState("");

  const questions = [
    "What's your name?",
    "What's your email address?",
    "What message would you like to send?",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < questions.length - 1) {
      setFormData((prevData) => ({
        ...prevData,
        [Object.keys(formData)[step]]: currentInput,
      }));
      setStep(step + 1);
      setCurrentInput("");
    } else {
      console.log("Form submitted:", { ...formData, message: currentInput });
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg w-full max-w-md shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-green-400 text-xl font-mono animate-pulse">
            Contact Terminal
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div className="bg-black p-4 rounded font-mono text-green-400 h-64 overflow-y-auto custom-scrollbar">
          {questions.slice(0, step + 1).map((q, index) => (
            <div key={index} className="mb-2">
              <p className="animate-typing">$ {q}</p>
              {index < step && (
                <p className="pl-2">{(formData as { [key: string]: string })[Object.keys(formData)[index]]}</p>
              )}
            </div>
          ))}
          {step < questions.length && (
            <form onSubmit={handleSubmit} className="mt-2">
              <label htmlFor="input" className="sr-only">
                Input
              </label>
              <div className="flex">
                <span className="mr-2">$</span>
                <input
                  type="text"
                  id="input"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="bg-transparent flex-grow outline-none text-green-300 border-b border-green-500"
                  autoFocus
                />
              </div>
            </form>
          )}
        </div>
        {step === questions.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="mt-4 w-full bg-green-500 text-black py-2 rounded font-mono"
          >
            Close Terminal
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}
