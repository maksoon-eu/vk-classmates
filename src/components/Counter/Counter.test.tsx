import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders with primary style', () => {
        render(<Counter style="primary" size={16} quantity={"1"} />);
        const counterElement = screen.getByText("1");
        expect(counterElement).toHaveClass('primary-counter');
    });

    test('renders with secondary style', () => {
        render(<Counter style="secondary" size={16} quantity={"1"}/>);
        const counterElement = screen.getByText("1");
        expect(counterElement).toHaveClass('secondary-counter');
    });

    test('renders with primary style and correct quantity over 99', () => {
        render(<Counter style="primary" size={16} quantity="100" />);
        const counterElement = screen.getByText('99+');
        expect(counterElement).toHaveClass('primary-counter');
      });      

      test('renders with stroke', () => {
        render(<Counter style="secondary" size={16} quantity={"1"} stroke={true} />);
        const counterElement = screen.getByTestId('counter');
        expect(counterElement).toHaveClass('stroke-counter');
    });
    
    test('does not render stroke when stroke prop is false', () => {
        render(<Counter style="primary" size={16} stroke={false} />);
        const counterElement = screen.getByTestId('counter');
        expect(counterElement).not.toHaveClass('stroke-counter');
    });

    test('quantity is formatted correctly', () => {
        render(<Counter style="primary" size={16} quantity="100" />);
        const counterElement = screen.getByText("99+");
        expect(counterElement).toBeInTheDocument();

        render(<Counter style="primary" size={16} quantity="abcde" />);
        const counterElementWithText = screen.getByText("abc");
        expect(counterElementWithText).toBeInTheDocument();
    });

    test('displays quantity text for sizes greater than 12', () => {
        render(<Counter style="primary" size={20} quantity="45" />);
        const counterElement = screen.getByText("45");
        expect(counterElement).toBeInTheDocument();
    });

    test('does not display quantity text for sizes 12 or less', () => {
        render(<Counter style="primary" size={12} quantity="45" />);
        expect(screen.queryByText("45")).toBeNull();
    });
});