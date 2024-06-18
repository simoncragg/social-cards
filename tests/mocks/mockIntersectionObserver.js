import { vi } from 'vitest';

const mockIntersectionObserver = vi.fn();

mockIntersectionObserver.mockReturnValue({
	observe: () => null,
	unobserve: () => null,
	disconnect: () => null
});

export default mockIntersectionObserver;
