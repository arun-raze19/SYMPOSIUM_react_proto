import React, { useEffect, useRef } from 'react';
import './GlowingDotsEffect.css';

const GlowingDotsEffect = () => {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];
    let animationFrame = null;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize dots with premium colors and effects
    const initDots = () => {
      dots = [];
      const numberOfDots = Math.min(Math.floor(window.innerWidth * window.innerHeight / 12000), 120);

      // Premium color palette
      const colors = [
        [133, 169, 71],  // Main green
        [62, 123, 39],   // Dark green
        [239, 227, 194], // Cream accent
        [76, 175, 80],   // Bright green
        [139, 195, 74]   // Light green
      ];

      const colorWeights = [0.4, 0.3, 0.1, 0.1, 0.1]; // Weight distribution

      for (let i = 0; i < numberOfDots; i++) {
        // Weighted random color selection
        let colorIndex = 0;
        const rand = Math.random();
        let cumulativeWeight = 0;

        for (let j = 0; j < colorWeights.length; j++) {
          cumulativeWeight += colorWeights[j];
          if (rand < cumulativeWeight) {
            colorIndex = j;
            break;
          }
        }

        const selectedColor = colors[colorIndex];
        const opacity = Math.random() * 0.5 + 0.3;

        // Premium size distribution with some larger dots
        let radius;
        if (Math.random() > 0.9) {
          radius = Math.random() * 3 + 2; // Larger dots (10% chance)
        } else {
          radius = Math.random() * 1.5 + 0.8; // Regular dots
        }

        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          color: `rgba(${selectedColor[0]}, ${selectedColor[1]}, ${selectedColor[2]}, ${opacity})`,
          pulse: Math.random() * 0.1 + 0.05, // Pulsing speed for premium effect
          pulseFactor: 0,                    // Current pulse state
          pulseDirection: Math.random() > 0.5 ? 1 : -1 // Direction of pulse
        });
      }

      dotsRef.current = dots;
    };

    // Draw dots and connections with premium effects
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots with premium effects
      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];

        // Update pulsing effect for premium look
        dot.pulseFactor += dot.pulse * dot.pulseDirection;
        if (Math.abs(dot.pulseFactor) > 0.5) {
          dot.pulseDirection *= -1; // Reverse direction
        }

        // Draw dot with glow effect
        const currentRadius = dot.radius * (1 + dot.pulseFactor * 0.3);

        // Draw glow
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, currentRadius * 3
        );

        // Extract color components for glow
        const colorMatch = dot.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
        if (colorMatch) {
          const [_, r, g, b, a] = colorMatch;
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${parseFloat(a) * 0.8})`);
          gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${parseFloat(a) * 0.2})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          // Draw the glow
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, currentRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        // Update position with smooth movement
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges with slight randomization for natural movement
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx * (0.9 + Math.random() * 0.2);
          // Add slight vertical movement when bouncing horizontally
          dot.vy += (Math.random() - 0.5) * 0.1;
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy = -dot.vy * (0.9 + Math.random() * 0.2);
          // Add slight horizontal movement when bouncing vertically
          dot.vx += (Math.random() - 0.5) * 0.1;
        }

        // Limit velocity for stability
        const maxVelocity = 0.8;
        dot.vx = Math.max(Math.min(dot.vx, maxVelocity), -maxVelocity);
        dot.vy = Math.max(Math.min(dot.vy, maxVelocity), -maxVelocity);

        // Draw connections with premium gradient effect
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(Math.pow(dot.x - dot2.x, 2) + Math.pow(dot.y - dot2.y, 2));

          if (distance < 120) {
            // Create gradient for connection
            const gradient = ctx.createLinearGradient(dot.x, dot.y, dot2.x, dot2.y);

            // Extract colors from both dots
            const color1Match = dot.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
            const color2Match = dot2.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);

            if (color1Match && color2Match) {
              const opacity = 0.2 * (1 - distance / 120);
              gradient.addColorStop(0, `rgba(${color1Match[1]}, ${color1Match[2]}, ${color1Match[3]}, ${opacity})`);
              gradient.addColorStop(1, `rgba(${color2Match[1]}, ${color2Match[2]}, ${color2Match[3]}, ${opacity})`);

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.6;
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(dot2.x, dot2.y);
              ctx.stroke();
            }
          }
        }

        // Draw connections to mouse with premium effect
        const mouseDistance = Math.sqrt(Math.pow(dot.x - mouseRef.current.x, 2) + Math.pow(dot.y - mouseRef.current.y, 2));
        if (mouseDistance < 180) {
          // Create gradient for mouse connection
          const gradient = ctx.createLinearGradient(dot.x, dot.y, mouseRef.current.x, mouseRef.current.y);

          const colorMatch = dot.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
          if (colorMatch) {
            const opacity = 0.4 * (1 - mouseDistance / 180);
            gradient.addColorStop(0, `rgba(${colorMatch[1]}, ${colorMatch[2]}, ${colorMatch[3]}, ${opacity})`);
            gradient.addColorStop(1, `rgba(239, 227, 194, ${opacity})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(drawDots);
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Handle touch movement for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };

        // Prevent scrolling when interacting with dots
        // e.preventDefault();
      }
    };

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
      initDots();
    };

    // Initialize
    setCanvasDimensions();
    initDots();
    drawDots();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="glowing-dots-canvas"></canvas>
  );
};

export default GlowingDotsEffect;
