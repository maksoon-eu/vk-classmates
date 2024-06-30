import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button Component', () => {
    test('renders the button with correct text', () => {
        render(<Button style="secondary" size={28} state="enabled" focused={false}>Что сделать</Button>);
        expect(screen.getByText('Что сделать')).toBeInTheDocument();
    });

    test('applies correct classes based on props', () => {
        render(<Button style="secondary" size={28} state="enabled" focused={true}>Что сделать</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass('button secondary-button size-28-button enabled-button focused-button');
    });

    test('shows counter when counter prop is true', () => {
        render(<Button style="secondary" size={28} state="enabled" counter={true} focused={false}>Что сделать</Button>);
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('shows loading indicator when button is clicked', () => {
        jest.useFakeTimers();
        render(<Button style="secondary" size={28} state="enabled" focused={false}>Что сделать</Button>);
        const button = screen.getByTestId('button');
        
        act(() => {
            fireEvent.click(button);
        });
        
        expect(button).toHaveClass('loading-button');
        
        act(() => {
            jest.runAllTimers();
        });
    });

    test('removes loading indicator after 3 seconds', () => {
        jest.useFakeTimers();
        render(<Button style="secondary" size={28} state="enabled" focused={false}>Что сделать</Button>);
        const button = screen.getByTestId('button');
        
        act(() => {
            fireEvent.click(button);
        });
        
        act(() => {
            jest.advanceTimersByTime(3000);
        });

        expect(button).not.toHaveClass('loading-button');
    });
});