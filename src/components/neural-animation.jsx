import React, { useEffect, useState, useRef } from 'react';

const NeuralNetworkBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);

  const getRandomPosition = (max) => Math.random() * max;

  const generateNodes = (count, width, height) => {
    return Array.from({ length: count }, () => ({
      x: getRandomPosition(width),
      y: getRandomPosition(height),
      vx: (Math.random() - 0.5) * 0.5, 
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1 
    }));
  };

  const generateConnections = (nodes) => {
    const connections = [];
    nodes.forEach((_node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.82) { 
          connections.push([i, j]);
        }
      }
    });
    return connections;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    
    const initialNodes = generateNodes(70, width, height); 
    setNodes(initialNodes);
    setConnections(generateConnections(initialNodes));
    
    const animate = () => {
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          let x = node.x + node.vx;
          let y = node.y + node.vy;
          
          if (x <= 0 || x >= width) node.vx *= -1;
          if (y <= 0 || y >= height) node.vy *= -1;
          
          x = Math.max(0, Math.min(width, x));
          y = Math.max(0, Math.min(height, y));
          
          return { ...node, x, y };
        });
      });
    };

    const animationInterval = setInterval(animate, 16);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 bg-[#f0fdf4] bg-opacity-90">
      <svg className="w-full h-full">
        {connections.map(([i, j], index) => {
          const distance = Math.hypot(
            nodes[i]?.x - nodes[j]?.x,
            nodes[i]?.y - nodes[j]?.y
          );
          const opacity = Math.max(0, 1 - distance / 250);
          
          return (
            <line
              key={`connection-${index}`}
              x1={nodes[i]?.x}
              y1={nodes[i]?.y}
              x2={nodes[j]?.x}
              y2={nodes[j]?.y}
              stroke="rgba(22, 163, 74, 0.15)" 
              strokeWidth="1"
              strokeOpacity={opacity}
            />
          );
        })}
        
        {nodes.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={node.radius}
            fill="#16a34a" 
            className="animate-pulse"
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkBackground;
