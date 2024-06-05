import { expect, test } from 'vitest';
import SocialCard from '../src/components/SocialCard';
import { render, screen } from '@testing-library/react';

test('Given social card is rendered', () => {
  render(<SocialCard username='Bob' title='test title' message='test message' />);
  expect(screen.getByText('Bob')).toBeInTheDocument();
  expect(screen.getByText('test title')).toBeInTheDocument();
  expect(screen.getByText('test message')).toBeInTheDocument();
});