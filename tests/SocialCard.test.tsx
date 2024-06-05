import { expect, describe, test } from 'vitest';
import SocialCard from '../src/components/SocialCard';
import { render, screen } from '@testing-library/react';

describe('Social card', () => {
  test('should render all expected props', () => {
    render(<SocialCard username='Bob' title='test title' message='test message' />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
  test('should not render title when not provided', () => {
    render(<SocialCard username='Bob' message='test message' />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.queryByText('test title')).not.toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
  });
});