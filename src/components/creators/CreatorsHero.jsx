import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreatorsHero({ onOpenAccelerator }) {
  const [activeMode, setActiveMode] = useState('3d'); // '3d' or 'stage'
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timecode, setTimecode] = useState('00:00:04:12');
  const videoRef = useRef(null);

  // Timecode counter for video playback
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;
    const mins = Math.floor(t / 60).toString().padStart(2, '0');
    const secs = Math.floor(t % 60).toString().padStart(2, '0');
    const frames = Math.floor((t % 1) * 24).toString().padStart(2, '0');
    setTimecode(`00:${mins}:${secs}:${frames}`);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (activeMode === '3d' && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else if (activeMode === 'stage') {
      setTimecode('00:14:28:12');
    }
  }, [activeMode]);

  return (
    <section className="cr-hero-section" id="hero">
      <div className="creators-container">
        
        {/* Top Eyebrow Studio Bar */}
        <div className="cr-hero-top-bar">
          <div className="cr-hero-eyebrow">
            FOR CREATORS &amp; ARTISTS
          </div>
          <div className="cr-hero-eyebrow-tag">
            <span>RECORD &bull; EDIT &bull; GROW &bull; STUDIO INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Main Hero Grid: Editorial Typography + Director's Soundstage Frame */}
        <div className="cr-hero-grid">
          
          {/* Left Column: Typography, Copy & Action Architecture */}
          <div className="cr-hero-copy-col">
            <h1 className="cr-hero-headline">
              <span className="cr-headline-line">Your Talent.</span>
              <span className="cr-headline-line">Your Voice.</span>
              <span className="cr-headline-line cr-headline-stage">
                <em>Your Stage.</em>
              </span>
            </h1>

            <p className="cr-hero-lead">
              Turn your talent and creative identity into a digital presence people remember.
            </p>

            <p className="cr-hero-support">
              sBLOOM helps you turn your ideas into content, build your presence, reach your audience, and grow with the right creative tools and digital support.
            </p>

            {/* Content Pillars Highlights Chips — 2x2 Balanced Editorial Grid */}
            <div className="cr-hero-feature-chips">
              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                  </svg>
                </span>
                <span className="cr-chip-text">Ideas into Content</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                  </svg>
                </span>
                <span className="cr-chip-text">Camera Presence &amp; Voice</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </span>
                <span className="cr-chip-text">Soundstage Production</span>
              </div>

              <div className="cr-feature-chip">
                <span className="cr-chip-icon-box">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </span>
                <span className="cr-chip-text">Audience &amp; Digital Growth</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="cr-hero-actions">
              <button 
                type="button"
                className="cr-btn-primary"
                onClick={onOpenAccelerator}
                style={{ padding: '15px 34px', fontSize: '0.96rem' }}
              >
                <span>Start Your Creator Journey</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Cinema Soundstage Viewfinder Frame with 3D Studio & Live Stage Switcher */}
          <div className="cr-hero-visual-col">
            
            {/* Viewfinder Mode Switcher Bar */}
            <div className="cr-visual-tabs-bar">
              <div className="cr-visual-tabs">
                <button 
                  type="button" 
                  className={`cr-visual-tab ${activeMode === '3d' ? 'active' : ''}`}
                  onClick={() => setActiveMode('3d')}
                >
                  <span className="cr-tab-dot"></span>
                  <span>3D Studio Suite</span>
                </button>
                <button 
                  type="button" 
                  className={`cr-visual-tab ${activeMode === 'stage' ? 'active' : ''}`}
                  onClick={() => setActiveMode('stage')}
                >
                  <span className="cr-tab-dot"></span>
                  <span>Live Soundstage</span>
                </button>
              </div>

              <div className="cr-visual-telemetry-pill">
                <span className="cr-live-pulse-dot"></span>
                <span>{activeMode === '3d' ? '3D WORKSPACE' : 'STAGE 01'}</span>
              </div>
            </div>

            {/* Main Cinema Soundstage Frame */}
            <div className="cr-cinema-frame">
              
              {/* Top Viewfinder Telemetry */}
              <div className="cr-viewfinder-top">
                <div className="cr-rec-indicator">
                  <span className="cr-rec-dot"></span>
                  <span className="cr-rec-text">
                    {activeMode === '3d' ? 'RENDER • 60 FPS' : 'REC • 4K DCI'}
                  </span>
                </div>

                <div className="cr-viewfinder-timecode">
                  {timecode}
                </div>

                <div className="cr-viewfinder-controls">
                  {activeMode === '3d' && (
                    <button 
                      type="button" 
                      className="cr-vf-ctrl-btn"
                      onClick={toggleSound}
                      title={isMuted ? "Turn Sound On" : "Mute Sound"}
                    >
                      {isMuted ? (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <line x1="23" y1="9" x2="17" y2="15" />
                            <line x1="17" y1="9" x2="23" y2="15" />
                          </svg>
                          <span>MUTE</span>
                        </>
                      ) : (
                        <>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                          <span>SOUND ON</span>
                        </>
                      )}
                    </button>
                  )}
                  <div className="cr-fps-tag">
                    {activeMode === '3d' ? 'DCI 4K' : '24 FPS'}
                  </div>
                </div>
              </div>

              {/* Viewfinder Corner Brackets */}
              <div className="cr-bracket cr-bracket-tl"></div>
              <div className="cr-bracket cr-bracket-tr"></div>
              <div className="cr-bracket cr-bracket-bl"></div>
              <div className="cr-bracket cr-bracket-br"></div>

              {/* Media Container: 3D Video or Indian Creator Image */}
              {activeMode === '3d' ? (
                <div 
                  className="cr-cinema-media-wrapper" 
                  onClick={togglePlay}
                  title="Click to Play / Pause"
                >
                  <video 
                    ref={videoRef}
                    src="/creator-new-video.mp4" 
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="cr-cinema-video"
                    onTimeUpdate={handleTimeUpdate}
                  />
                  {!isPlaying && (
                    <div className="cr-cinema-play-overlay">
                      <div className="cr-play-icon-badge">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="cr-cinema-media-wrapper">
                  <img 
                    src="/creator-hero.jpg" 
                    alt="Indian Artist Speaking into Studio Microphone on Soundstage - Your Talent, Your Voice, Your Stage" 
                    className="cr-cinema-img"
                  />
                </div>
              )}

              {/* Bottom Viewfinder Info Strip */}
              <div className="cr-viewfinder-bottom">
                <div className="cr-vf-meta-left">
                  <span className="cr-vf-label">
                    {activeMode === '3d' ? 'PIPELINE:' : 'AUDIO IN:'}
                  </span>
                  <span className="cr-vf-val">
                    {activeMode === '3d' 
                      ? 'CUT → STORY → AUDIO → COLOR → FINAL' 
                      : '48kHz • Studio Vocal Master'}
                  </span>
                </div>
                <div className="cr-vf-meta-right">
                  <span className="cr-vf-badge">
                    {activeMode === '3d' ? 'sBLOOM 3D ENGINE' : 'STAGE 01'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
