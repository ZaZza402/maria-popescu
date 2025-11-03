import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Soft background shapes */}
      <circle cx="200" cy="200" r="150" fill="#C4E0D9" opacity="0.15" />
      <circle cx="280" cy="350" r="120" fill="#E8A298" opacity="0.12" />
      <circle cx="120" cy="400" r="100" fill="#C4E0D9" opacity="0.1" />
      
      {/* Plant in pot - left side */}
      <ellipse cx="100" cy="520" rx="50" ry="15" fill="#B8A89A" opacity="0.4" />
      <rect x="75" y="480" width="50" height="40" rx="5" fill="#D4C4B0" opacity="0.5" />
      
      {/* Plant leaves */}
      <path
        d="M85 480 Q70 450 75 420 Q80 450 85 480"
        fill="#7FA695"
        opacity="0.4"
      />
      <path
        d="M100 475 Q90 440 95 410 Q100 440 100 475"
        fill="#8BB5A5"
        opacity="0.5"
      />
      <path
        d="M115 480 Q125 445 120 415 Q115 445 115 480"
        fill="#7FA695"
        opacity="0.4"
      />
      
      {/* Window frame - right side */}
      <rect x="280" y="150" width="90" height="120" rx="8" fill="none" stroke="#B8A89A" strokeWidth="3" opacity="0.25" />
      <line x1="325" y1="150" x2="325" y2="270" stroke="#B8A89A" strokeWidth="2" opacity="0.25" />
      <line x1="280" y1="210" x2="370" y2="210" stroke="#B8A89A" strokeWidth="2" opacity="0.25" />
      
      {/* Books stack - bottom right */}
      <rect x="290" y="480" width="70" height="12" rx="2" fill="#E8A298" opacity="0.3" />
      <rect x="295" y="465" width="60" height="15" rx="2" fill="#C4E0D9" opacity="0.35" />
      <rect x="300" y="448" width="55" height="17" rx="2" fill="#B8A89A" opacity="0.3" />
      
      {/* Cozy chair illustration - center */}
      <ellipse cx="200" cy="420" rx="70" ry="20" fill="#D4C4B0" opacity="0.2" />
      <path
        d="M150 350 Q145 380 150 420 L250 420 Q255 380 250 350 Z"
        fill="#C4E0D9"
        opacity="0.3"
      />
      <rect x="145" y="320" width="10" height="30" rx="5" fill="#B8A89A" opacity="0.25" />
      <rect x="245" y="320" width="10" height="30" rx="5" fill="#B8A89A" opacity="0.25" />
      <path
        d="M140 280 Q140 320 145 350 L255 350 Q260 320 260 280 Z"
        fill="#D4C4B0"
        opacity="0.25"
      />
      
      {/* Decorative elements */}
      <circle cx="180" cy="180" r="4" fill="#E8A298" opacity="0.3" />
      <circle cx="220" cy="160" r="3" fill="#C4E0D9" opacity="0.4" />
      <circle cx="310" cy="380" r="5" fill="#7FA695" opacity="0.3" />
      <circle cx="90" cy="280" r="4" fill="#E8A298" opacity="0.25" />
      
      {/* Soft lamp illustration - left */}
      <line x1="70" y1="200" x2="70" y2="320" stroke="#B8A89A" strokeWidth="2" opacity="0.2" />
      <ellipse cx="70" cy="190" rx="25" ry="30" fill="#E8A298" opacity="0.15" />
      <ellipse cx="70" cy="325" rx="15" ry="8" fill="#D4C4B0" opacity="0.3" />
      
      {/* Abstract calming waves */}
      <path
        d="M20 500 Q100 490 180 495 T340 500"
        stroke="#C4E0D9"
        strokeWidth="2"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M30 520 Q110 515 190 518 T350 525"
        stroke="#E8A298"
        strokeWidth="2"
        fill="none"
        opacity="0.15"
      />
    </svg>
  );
};

export default HeroIllustration;
