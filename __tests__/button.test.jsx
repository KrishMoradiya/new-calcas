import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Button from '../packages/calcas-theme/src/components/common/button/button';

describe('Button component', () => {
  it('renders button component', async () => {
    const { getByRole } = render(<Button />);

    await waitFor(() => {
      const buttonElement = getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });
  });
  it('renders button component with text', async () => {
    const { getByRole } = render(<Button children="Click Me" />);

    await waitFor(() => {
      const buttonElement = getByRole('button', { name: /click me/i });
      expect(buttonElement).toBeInTheDocument();
    });
  });
  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click Me</Button>,
    );

    const buttonElement = getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onFocus handler when focused', async () => {
    const handleFocus = jest.fn();
    const { getByRole } = render(
      <Button onFocus={handleFocus}>Click Me</Button>,
    );

    const buttonElement = getByRole('button', { name: /click me/i });
    fireEvent.focus(buttonElement);

    await waitFor(() => {
      expect(handleFocus).toHaveBeenCalledTimes(1);
    });
  });

  it('calls onMouseOver handler when hovered', async () => {
    const handleMouseOver = jest.fn();
    const { getByRole } = render(
      <Button onMouseOver={handleMouseOver}>Click Me</Button>,
    );

    const buttonElement = getByRole('button', { name: /click me/i });
    fireEvent.mouseOver(buttonElement);

    await waitFor(() => {
      expect(handleMouseOver).toHaveBeenCalledTimes(1);
    });
  });
  it('renders an anchor with href when href is provided', async () => {
    const { getByRole } = render(
      <Button href="https://example.com">Click Me</Button>,
    );

    await waitFor(() => {
      const anchorElement = getByRole('link', { name: /click me/i });
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute('href', 'https://example.com');
    });
  });

});
