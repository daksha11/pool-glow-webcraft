
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const RippleButton = ({ children, className, ...props }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  let rippleCount = 0;

  const addRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const id = rippleCount;
    rippleCount += 1;
    
    setRipples([...ripples, { x, y, id }]);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(ripple => ripple.id !== id));
    }, 1000);
  };

  return (
    <Button 
      className={`bg-pool-600 hover:bg-pool-700 text-white ripple-container ${className}`}
      onClick={addRipple}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple-effect"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '200px',
            height: '200px',
          }}
        />
      ))}
      {children}
    </Button>
  );
};

export default RippleButton;
