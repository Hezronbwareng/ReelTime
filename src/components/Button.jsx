import React from 'react';
import './button.css';

function Button({ icon, name, bgColor = '#ff3700', color = '#ffffff', className = '' }) {
  return (
    <a
      href="#"
      className={`mainBtn ${className}`}  // Use template literals to apply the className
      style={{ color: color, background: bgColor }}
    >
      {icon} {name}
    </a>
  );
}

export default Button;
