'use client';
import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaDownload } from 'react-icons/fa';
import clsx from 'clsx';

const demos = [
  { label: 'COMMERCIAL', src: '/audio/commercial.mp3' },
  { label: 'VIDEO GAMES', src: '/audio/videogames.mp3' },
  { label: 'AUDIOBOOK', src: '/audio/audiobook.mp3' },
  { label: 'CORPORATE', src: '/audio/corporate.mp3' },
  { label: 'E-LEARNING', src: '/audio/elearning.mp3' },
  { label: 'NETWORK PROMO', src: '/audio/networkpromo.mp3' },
];

function VoiceDemoPlayer({
  label,
  src,
  isActive,
  setActive,
}: {
  label: string;
  src: string;
  isActive: boolean;
  setActive: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      setActive(); // mark this as active player
      audio.play();
    }
    setPlaying(!playing);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(percentage) ? 0 : percentage);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = percent * audio.duration;
    }
  };

  return (
    <div
      className="relative bg-[#212121] text-white w-full max-w-[320px] flex items-center justify-between px-5 py-4 gap-3 cursor-pointer rounded"
      onClick={seek}
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
      <div className="flex-1 text-base text-left uppercase">{label}</div>
      <a href={src} download onClick={(e) => e.stopPropagation()}>
        <FaDownload />
      </a>
      {isActive && (
        <div
          className="absolute bottom-0 left-0 h-[4px] bg-[#9F9F9F] opacity-30"
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
}

export default function VoiceDemos() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateText(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="VoiceDemos" className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Group */}
        <div className="flex flex-col gap-6">
          {demos.slice(0, 3).map((demo) => (
            <VoiceDemoPlayer
              key={demo.label}
              label={demo.label}
              src={demo.src}
              isActive={activeSrc === demo.src}
              setActive={() => setActiveSrc(demo.src)}
            />
          ))}
        </div>

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-white text-center md:w-[300px] relative">
          <div
            className={clsx(
              'text-xl md:text-base font-light mb-1 transition-all duration-700',
              animateText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            EVERY
          </div>
          <div
            className={clsx(
              'text-[100px] md:text-9xl font-bold leading-none transition-all duration-700 delay-100',
              animateText ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            )}
          >
            STORY
          </div>
          <div
            className={clsx(
              'text-xl md:text-base font-light mt-1 transition-all duration-700 delay-200',
              animateText ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            )}
          >
            HAS A
          </div>
          <div
            className={clsx(
              'text-[100px] md:text-9xl font-bold text-[#E6252E] leading-none transition-all duration-700 delay-300',
              animateText ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            )}
          >
            VOICE
          </div>
        </div>

        {/* Right Group */}
        <div className="flex flex-col gap-6">
          {demos.slice(3).map((demo) => (
            <VoiceDemoPlayer
              key={demo.label}
              label={demo.label}
              src={demo.src}
              isActive={activeSrc === demo.src}
              setActive={() => setActiveSrc(demo.src)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
