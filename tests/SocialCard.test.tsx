import React from 'react';
import { expect, describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../src/components/Card';

describe('Social card', () => {
  const userId = 22;
  const cardId = 1;
  test('should render all expected props', () => {
    render(<Card id={cardId} username='Bob' message='test message' userId={userId} timestamp={1718285916000} imagePath='/images/foo.jpeg'/>);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`posted-image-${cardId}`)).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
  });
  test('should not render image when not provided', () => {
    render(<Card id={cardId} username='Bob' message='test message' userId={userId} timestamp={1718285916000} />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
    expect(screen.queryByTestId(`posted-image-${cardId}`)).not.toBeInTheDocument();
  });
});