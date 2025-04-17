import React, { useEffect, useState } from 'react';
import './GlowingText.css';

const GlowingText = ({ text, className = '' }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [layerCount, setLayerCount] = useState(10);

  // Adjust number of layers based on screen size for better performance
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width <= 480) {
        setLayerCount(6);
      } else if (width <= 768) {
        setLayerCount(8);
      } else {
        setLayerCount(10);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create copies of the text for the 3D effect based on screen size
  const textLayers = Array(layerCount).fill(text);

  return (
    <div className={`glowing-3d-text ${className}`} style={{ '--window-width': `${windowWidth}px` }}>
      <div className="glowing-3d-text-container">
        {textLayers.map((layer, index) => (
          <h1 key={index} style={{ '--layer-index': index }}>{layer}</h1>
        ))}
      </div>
    </div>
  );
};

export default GlowingText;
