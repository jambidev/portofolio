import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const LoadingAnimation = ({
  onLoadingComplete = () => {},
  duration = 3000
}: LoadingAnimationProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -20,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const text = "KOMA SOLUTION";

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Code editor-like container */}
        <div className="bg-[#252526] rounded-md shadow-xl overflow-hidden w-[90vw] max-w-3xl">
          {/* Editor title bar */}
          <div className="bg-[#3c3c3c] px-4 py-2 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-400 font-mono">Selamat Datang Kawan</div>
          </div>
          
          {/* Code content area */}
          <div className="p-6 font-mono">
            <div className="flex items-center mb-4">
              <div className="text-blue-400 mr-2">const</div>
              <div className="text-yellow-300 mr-2">Loading</div>
              <div className="text-white mr-2">=</div>
              <div className="text-purple-400 mr-2">()</div>
              <div className="text-white mr-2">=&gt;</div>
              <div className="text-purple-400">{'{'}</div>
            </div>
            
            <div className="ml-8 mb-4">
              <div className="text-green-400 mb-2">// Initializing KOMA SOLUTION</div>
              <motion.div
                className="flex items-center justify-center my-8"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    className={`text-4xl md:text-6xl font-bold ${char === " " ? "mr-4" : ""} ${index < 4 ? "text-blue-500" : "text-yellow-400"}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              
              <div className="flex items-center">
                <div className="text-blue-400 mr-2">return</div>
                <div className="text-white">(</div>
                <div className="text-green-400 mx-2">// Loading complete</div>
                <div className="text-white">);</div>
              </div>
            </div>
            
            <div className="text-purple-400">{'}'}</div>
          </div>
        </div>
        
        {/* Loading progress bar */}
        <motion.div 
          className="h-1 bg-blue-500 absolute bottom-0 left-0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: duration / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
