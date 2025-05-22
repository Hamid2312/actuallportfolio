import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CursorBubbling = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null });

  const { theme = "light" } = useContext(ThemeContext) || {};

  useEffect(() => {
    console.log("CursorBubbling mounted, theme:", theme);

    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas ref is null");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }

    // Set canvas size with fallback
    canvas.width = window.innerWidth || document.documentElement.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight;
    console.log("Canvas size:", canvas.width, "x", canvas.height);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = theme === "light" ? "#fff" : "#00FBF4";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    const handleParticle = () => {
      for (let i = 0; i < particlesArray.current.length; i++) {
        particlesArray.current[i].update();
        particlesArray.current[i].draw();
        if (particlesArray.current[i].size <= 0.3) {
          particlesArray.current.splice(i, 1);
          i--;
        }
      }
      console.log("Particle count:", particlesArray.current.length);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticle();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth || document.documentElement.clientWidth;
      canvas.height = window.innerHeight || document.documentElement.clientHeight;
      console.log("Resized canvas:", canvas.width, "x", canvas.height);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      console.log("Mouse move:", mouse.current.x, mouse.current.y);
      if (mouse.current.x && mouse.current.y) {
        particlesArray.current.push(new Particle(mouse.current.x, mouse.current.y));
      }
    };

    const handleClick = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      console.log("Mouse click:", mouse.current.x, mouse.current.y);
      for (let i = 0; i < 50; i++) { // Reduced for performance
        if (mouse.current.x && mouse.current.y) {
          particlesArray.current.push(new Particle(mouse.current.x, mouse.current.y));
        }
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
      console.log("Touch move:", mouse.current.x, mouse.current.y);
      if (mouse.current.x && mouse.current.y) {
        particlesArray.current.push(new Particle(mouse.current.x, mouse.current.y));
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
      console.log("Touch start:", mouse.current.x, mouse.current.y);
      for (let i = 0; i < 50; i++) { // Reduced for performance
        if (mouse.current.x && mouse.current.y) {
          particlesArray.current.push(new Particle(mouse.current.x, mouse.current.y));
        }
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchstart", handleTouchStart);
    animate();

    return () => {
      console.log("CursorBubbling unmounted");
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchstart", handleTouchStart);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      style={{ zIndex: -1 }}
    />
  );
};

export default CursorBubbling;
