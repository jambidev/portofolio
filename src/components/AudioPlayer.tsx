import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  autoPlay?: boolean;
  initialVolume?: number;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  audioSrc,
  autoPlay = true,
  initialVolume = 0.5,
  className = '',
}) => {
  // State for audio player
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(() => {
    // Try to get volume from localStorage
    const savedVolume = localStorage.getItem('audioPlayerVolume');
    return savedVolume ? parseFloat(savedVolume) : initialVolume;
  });
  const [isMuted, setIsMuted] = useState(() => {
    // Try to get muted state from localStorage
    const savedMuted = localStorage.getItem('audioPlayerMuted');
    return savedMuted ? savedMuted === 'true' : false;
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = isMuted ? 0 : volume;
      
      if (autoPlay && !isMuted) {
        audioRef.current.play().catch(err => {
          console.error('Error playing audio:', err);
          setIsPlaying(false);
        });
      }
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, autoPlay, volume, isMuted]);
  
  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      localStorage.setItem('audioPlayerVolume', volume.toString());
    }
  }, [volume]);
  
  // Handle mute/unmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      localStorage.setItem('audioPlayerMuted', isMuted.toString());
    }
  }, [isMuted, volume]);
  
  // Handle play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(err => {
          console.error('Error playing audio:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);
  
  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };
  
  return (
    <motion.div 
      className={`fixed bottom-4 right-4 flex items-center bg-slate-800/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg z-50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={toggleMute}
        className="p-2 text-white hover:text-blue-400 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-20 mx-2 accent-blue-500"
        aria-label="Volume"
      />
      
      <div className="text-xs text-white/80 ml-1">
        {isMuted ? "Muted" : `${Math.round(volume * 100)}%`}
      </div>
    </motion.div>
  );
};

export default AudioPlayer;