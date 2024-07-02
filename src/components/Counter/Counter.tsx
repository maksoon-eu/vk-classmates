import React from 'react';
import './counter.scss';

export interface CounterProps {
  style: "primary" | "secondary";
  size: 8 | 12 | 16 | 20 | 24;
  stroke?: boolean;
  quantity?: string;
  pulse?: boolean;
}

const Counter: React.FC<CounterProps> = ({ style = 'primary', size = 8, stroke = true, quantity, pulse = true }) => {
    const formatQuantity = () => {
        if (quantity && +quantity) {
            return (+quantity) > 99 ? '99+' : quantity;
        } else {
            return quantity && quantity.length > 3 ? quantity.substring(0, 3) : quantity;
        }
    };

    const shouldDisplayText = size > 12;
    const quantityText = formatQuantity();
    const isSingleCharacter = quantity?.length === 1;
    const pulseActive = pulse && (size === 8 || size === 12)
    
    const counterClass = `counter ${style}-counter size-${size}-counter ${stroke ? 'stroke-counter' : ''} ${pulseActive ? 'pulse-counter' : ''} ${isSingleCharacter ? 'single-character' : ''}`;

    return (
        <div className={counterClass} data-testid="counter">
            <div className={`counterIndicator ${style}-counter size-${size}-counter ${isSingleCharacter ? 'single-character' : ''}`}>
                {shouldDisplayText && quantityText}
            </div>
            {pulseActive && 
                <>
                    <div className="pulseAnimation one"></div>
                    <div className="pulseAnimation two"></div>
                </>
            }
        </div>
    );
};

export default Counter;