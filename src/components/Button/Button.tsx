import React, { useEffect, useRef, useState } from 'react';
import Counter from "../Counter/Counter";
import './button.scss';
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

export interface ButtonProps {
    style: "primary" | "secondary";
    size: 28 | 36 | 56;
    state: "enabled" | "pressed" | "loading" | "disabled";
    counter?: boolean;
    focused: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ style = 'primary', size = 36, state = "enabled", counter, focused = false, children }) => {
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const btn = buttonRef.current;

        if (focused) {
            btn?.classList.add('focused-button');
        } else {
            btn?.classList.remove('focused-button');
        }
    }, [focused]);

    const handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 3000)
    };

    const buttonClass = `button ${style}-button size-${size}-button ${state}-button ${counter ? 'counter-button' : ''} ${focused ? 'focused-button' : ''} ${loading ? 'loading-button' : ''}`;

    return (
        <div className={buttonClass} ref={buttonRef} onClick={handleClick} data-testid="button">
            <div className={`buttonLabel size-${size}-button`}>
                <div className="buttonLabel__text">
                    {children}
                </div>
                {counter && <Counter style={'secondary'} size={16} quantity={"1"} stroke/>}
            </div>
            {(loading || state === 'loading') && <ProgressIndicator />}
        </div>
    );
};

export default Button;