import React, { useEffect, useState, useRef } from "react";
import "./LandingPage.css";

const feedbackImages = [
  require("./assets/img1.jpeg"),
  require("./assets/img2.jpeg"),
  require("./assets/img3.jpeg"),
  require("./assets/img4.jpeg"),
  require("./assets/img5.jpeg"),
  require("./assets/img6.jpeg"),
  require("./assets/img7.jpeg"),
  require("./assets/img8.jpeg"),
  require("./assets/img9.jpeg"),
  require("./assets/img10.jpeg"),
  require("./assets/img12.jpeg"),
  require("./assets/img13.jpeg"),
  require("./assets/img14.jpeg"),
  require("./assets/img15.jpeg"),
];

const logoUrl = require("./assets/logo.png");

const AUTO_SLIDE_INTERVAL = 1500; // 1.5 seconds

const LandingPage = () => {
  const [seconds, setSeconds] = useState(2000); // 20 sec timer, adjust as needed
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const autoSlideRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      window.location.href = "https://t.me/+FXwFj2mFqRw4NTc1";
    }
    const timer = setInterval(() => {
      setSeconds((sec) => (sec > 0 ? sec - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  // Carousel logic
  const showPrev = () => {
    setStartIndex((prev) => (prev - (isMobile ? 1 : 3) + feedbackImages.length) % feedbackImages.length);
  };
  const showNext = () => {
    setStartIndex((prev) => (prev + (isMobile ? 1 : 3)) % feedbackImages.length);
  };
  let visibleImages;
  if (isMobile) {
    visibleImages = [feedbackImages[startIndex]];
  } else {
    visibleImages = feedbackImages.slice(startIndex, startIndex + 3);
    if (visibleImages.length < 3) {
      visibleImages.push(...feedbackImages.slice(0, 3 - visibleImages.length));
    }
  }

  // Auto-slide effect
  useEffect(() => {
    autoSlideRef.current && clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setStartIndex((prev) => (prev + (isMobile ? 1 : 3)) % feedbackImages.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoSlideRef.current);
  }, [isMobile]);

  return (
    
    <div className="landing-root">
      <div className="background-overlay"></div>
      <div className="logo-box">
        <img src={logoUrl} alt="ACE Logo" className="logo-img" />
      </div>
      <div className="main-content">
        <h3><span className="highlight">🚀 High Quality Trading Signals For Free Of Cost <span role="img" aria-label="money">💰</span></span></h3>
        <p>with<br /><span className="brand">⚡ Aura Capital ⚡</span></p>
        <div className="timer-box">
          <span>Hurry Up!</span>
          <div className="timer">00:00:{seconds.toString().padStart(2, "0")}</div>
        </div>
        <a href="https://t.me/+FXwFj2mFqRw4NTc1" target="_blank" rel="noopener noreferrer" className="join-btn">
          <span className="telegram-icon" aria-label="Telegram">
            {/* White Telegram SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.12"/>
              <path d="M25.5 8.5L22.1 24.1C21.8 25.3 21 25.6 20 25.1L15.1 21.6L12.8 23.7C12.5 24 12.3 24.2 11.8 24.2L12.1 20.2L21.7 11.7C22.1 11.3 21.6 11.1 21.1 11.4L9.7 17.1L5.9 15.9C4.7 15.5 4.7 14.7 6.2 14.2L24 8.1C25 7.8 25.8 8.3 25.5 8.5Z" fill="white"/>
            </svg>
          </span>
          JOIN NOW
        </a>
        <div className="telegram-section">
          <b>✅ Join my Telegram &amp; Become Profitable Trader <span role="img" aria-label="money">🤑</span> with 100% Accurate Signals 🐝✅</b>
        </div>
        <div className="feedback-section">
          <span>🥳 <span className="highlight">Our Members Feedback</span> 👇</span>
          <div className="carousel-wrapper">
            <button className="carousel-arrow" onClick={showPrev}>&lt;</button>
            <div className="feedback-images">
              {visibleImages.map((img, idx) => (
                <img
                  src={img}
                  alt={`Feedback ${startIndex + idx + 1}`}
                  key={idx}
                  className={isMobile ? "mobile-feedback-img" : ""}
                />
              ))}
            </div>
            <button className="carousel-arrow" onClick={showNext}>&gt;</button>
          </div>
        </div>
        <a href="https://t.me/+FXwFj2mFqRw4NTc1" target="_blank" rel="noopener noreferrer" className="join-btn">
          <span className="telegram-icon" aria-label="Telegram">
            {/* White Telegram SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.12"/>
              <path d="M25.5 8.5L22.1 24.1C21.8 25.3 21 25.6 20 25.1L15.1 21.6L12.8 23.7C12.5 24 12.3 24.2 11.8 24.2L12.1 20.2L21.7 11.7C22.1 11.3 21.6 11.1 21.1 11.4L9.7 17.1L5.9 15.9C4.7 15.5 4.7 14.7 6.2 14.2L24 8.1C25 7.8 25.8 8.3 25.5 8.5Z" fill="white"/>
            </svg>
          </span>
          JOIN NOW
        </a>
      </div>
    </div>
  );
};

export default LandingPage; 