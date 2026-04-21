// src/components/CursorBubbling.jsx
import React, { useEffect, useRef } from "react";

const CursorBubbling = () => {
  const particleCount = useRef(0); // Track particle count without causing re-renders

  useEffect(() => {
    const createBubble = (e) => {
      const bubble = document.createElement("span");
      bubble.classList.add("bubble");
      document.body.appendChild(bubble);

      const size = Math.random() * 8 + 4; // Much smaller bubbles (4px - 12px)
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${e.clientX - size / 2}px`;
      bubble.style.top = `${e.clientY - size / 2}px`;

      // Use the theme's primary color instead of random ugly colors, with a nice glow
      bubble.style.background = `rgba(var(--primary-rgb), 0.6)`;
      bubble.style.boxShadow = `0 0 10px rgba(var(--primary-rgb), 0.4)`;

      particleCount.current += 1; // Increment count silently

      // Remove bubble and update count
      const removeBubble = () => {
        bubble.remove();
        particleCount.current -= 1; // Decrement count silently
      };
      setTimeout(removeBubble, 1200);
    };

    const handleMouseMove = (e) => {
      if (Math.random() > 0.8) {
        createBubble(e);
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 5; i++) {
        createBubble(e);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Embed CSS styles within the component
  return (
    <>
      <style>
        {`
          .bubble {
            position: fixed;
            border-radius: 50%;
            pointer-events: none;
            animation: bubbleFade 1.2s ease-out forwards;
            z-index: 9999;
          }

          @keyframes bubbleFade {
            0% {
              transform: scale(0.5) translateY(0);
              opacity: 1;
            }
            100% {
              transform: scale(1.2) translateY(-25px);
              opacity: 0;
            }
          }
        `}
      </style>
      {null} {/* Return null as the component doesn't render visible content */}
    </>
  );
};

export default CursorBubbling;