import React from 'react';
import { expect, describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../src/components/Card';
import mockIntersectionObserver from "./mocks/mockIntersectionObserver";

describe('Social card', () => {

  window.IntersectionObserver = mockIntersectionObserver;

  const postId = 1;
  const userId = 22;
  test('should render all expected props', () => {

    const post = {
      id: postId,
      author: {
        id: userId,
        username: "Bob"
      },
      message: "test message",
      imagePath: "/images/foo.jpeg",
      likes: 1000,
      isLiked: false,
      timestamp: 1718285916000
    };

    render(<Card post={post} />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`posted-image-${postId}`)).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
  });

  test('should not render image when not provided', () => {

    const post = {
      id: postId,
      author: {
        id: userId,
        username: "Bob"
      },
      message: "test message",
      likes: 1000,
      isLiked: false,
      timestamp: 1718285916000
    };

    render(<Card post={post} />);
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('test message')).toBeInTheDocument();
    expect(screen.getByTestId(`profile-pic-${userId}`)).toBeInTheDocument();
    expect(screen.queryByTestId(`posted-image-${postId}`)).not.toBeInTheDocument();
  });
});