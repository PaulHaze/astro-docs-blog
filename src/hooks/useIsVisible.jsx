import { useEffect, useState } from 'react';
// import type { MutableRefObject } from 'react';

// interface RefObject<T> {
// 	// immutable
// 	readonly current: T | null;
// }

export function useIsVisible(ref) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
