import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './rainLightningAnimation.css';

interface RainLightningBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  enableSound?: boolean;
  className?: string;
}

const RainLightningBackground: React.FC<RainLightningBackgroundProps> = ({
  intensity = 'medium',
  enableSound = false,
  className = '',
}) => {
  const [lightningActive, setLightningActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(enableSound);
  const thunderSoundRef = useRef<HTMLAudioElement | null>(null);
  const rainSoundRef = useRef<HTMLAudioElement | null>(null);
  
  // Determine number of raindrops based on intensity
  const getRaindropsCount = () => {
    switch (intensity) {
      case 'low': return 50;
      case 'high': return 150;
      case 'medium':
      default: return 100;
    }
  };

  // Generate raindrops
  const raindrops = Array.from({ length: getRaindropsCount() }).map((_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 0.6 + Math.random() * 0.8,
    size: Math.random() < 0.3 ? 'large' : Math.random() < 0.6 ? 'medium' : 'small',
  }));

  // Lightning effect timing
  useEffect(() => {
    const triggerLightning = () => {
      if (Math.random() < 0.7) { // 70% chance of lightning
        setLightningActive(true);
        
        // Play thunder sound if enabled
        if (soundEnabled && thunderSoundRef.current) {
          thunderSoundRef.current.currentTime = 0;
          thunderSoundRef.current.play().catch(err => console.error('Error playing thunder:', err));
        }
        
        // Lightning flash duration
        setTimeout(() => {
          setLightningActive(false);
        }, 200 + Math.random() * 200);
        
        // Chance for a second flash
        if (Math.random() < 0.4) {
          setTimeout(() => {
            setLightningActive(true);
            setTimeout(() => {
              setLightningActive(false);
            }, 100 + Math.random() * 100);
          }, 300 + Math.random() * 200);
        }
      }
    };

    // Set interval for lightning based on intensity
    const lightningInterval = setInterval(() => {
      triggerLightning();
    }, intensity === 'high' ? 5000 : intensity === 'medium' ? 8000 : 12000);

    return () => clearInterval(lightningInterval);
  }, [intensity, soundEnabled]);

  // Initialize and handle sound effects
  useEffect(() => {
    // Create audio elements
    thunderSoundRef.current = new Audio('/thunder.mp3');
    rainSoundRef.current = new Audio('/rain.mp3');
    
    if (rainSoundRef.current) {
      rainSoundRef.current.loop = true;
      rainSoundRef.current.volume = 0.4;
    }
    
    // Play rain sound if enabled
    if (soundEnabled && rainSoundRef.current) {
      rainSoundRef.current.play().catch(err => console.error('Error playing rain:', err));
    }
    
    return () => {
      // Clean up audio when component unmounts
      if (rainSoundRef.current) {
        rainSoundRef.current.pause();
        rainSoundRef.current = null;
      }
      if (thunderSoundRef.current) {
        thunderSoundRef.current.pause();
        thunderSoundRef.current = null;
      }
    };
  }, []);

  // Toggle sound effects when soundEnabled changes
  useEffect(() => {
    if (soundEnabled && rainSoundRef.current) {
      rainSoundRef.current.play().catch(err => console.error('Error playing rain:', err));
    } else if (!soundEnabled && rainSoundRef.current) {
      rainSoundRef.current.pause();
    }
  }, [soundEnabled]);

  return (
    <div className={`rain-lightning-container ${className}`}>
      {/* Sound toggle button */}
      <button 
        className="sound-toggle" 
        onClick={() => setSoundEnabled(!soundEnabled)}
        aria-label={soundEnabled ? "Matikan suara" : "Aktifkan suara"}
      >
        {soundEnabled ? "🔊" : "🔇"}
      </button>
      
      {/* Rain effect */}
      <div className="rain-container">
        {raindrops.map((drop) => (
          <div
            key={drop.id}
            className={`raindrop ${drop.size}`}
            style={{
              left: drop.left,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          />
        ))}
      </div>
      
      {/* Lightning effect */}
      <AnimatePresence>
        {lightningActive && (
          <motion.div
            className="lightning"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.8, 0.4, 0.9, 0] }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1] }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      
      {/* Clouds */}
      <div className="clouds">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className="cloud"
            style={{
              left: `${index * 20}%`,
              animationDelay: `${index * 2}s`,
              opacity: 0.6 + (index * 0.05),
              transform: `scale(${0.8 + (index * 0.1)})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RainLightningBackground;