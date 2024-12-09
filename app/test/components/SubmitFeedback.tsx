'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface SubmitFeedbackProps {
  isVisible: boolean;
  message: string;
  type: 'success' | 'error';
}

export default function SubmitFeedback({ isVisible, message, type }: SubmitFeedbackProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg ${
            type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 