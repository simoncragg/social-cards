import { expect, describe, test } from 'vitest';
import SocialCard from '../src/components/SocialCard';
import { render, screen } from '@testing-library/react';

describe('Social card', () => {
  const userId = 22;
  test('should render all expected props', () => {
    render(<SocialCard username='Bob' title='test title' message='test message' userId={userId} />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
  });
  test('should not render title when not provided', () => {
    render(<SocialCard username='Bob' message='test message' userId={userId} />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('test title')).not.toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
  });
});