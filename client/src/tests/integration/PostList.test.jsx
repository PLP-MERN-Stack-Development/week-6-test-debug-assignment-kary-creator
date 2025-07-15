import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PostList } from '../../components/PostList';

// Mock the fetch API
beforeEach(() => {
  global.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

describe('PostList Integration', () => {
  it('renders posts from API', async () => {
    const mockPosts = [
      { _id: '1', title: 'First Post' },
      { _id: '2', title: 'Second Post' },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    render(<PostList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('First Post')).toBeInTheDocument();
      expect(screen.getByText('Second Post')).toBeInTheDocument();
    });
  });

  it('shows error on fetch failure', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    render(<PostList />);
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
}); 