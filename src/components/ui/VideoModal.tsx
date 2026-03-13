import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoSrc: string;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  videoSrc,
  title,
  onClose,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 bg-gray-900">
          <h3 className="text-white font-medium">{title} - Video Demo</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 동영상 */}
        <div className="aspect-video">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full"
            onError={e => {
              console.error('Video loading error:', e);
            }}
          >
            <p className="text-white p-4">
              Your browser doesn't support video playback.
            </p>
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};
