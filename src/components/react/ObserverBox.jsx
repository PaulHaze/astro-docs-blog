import { useRef } from 'react';
// import type { RefObject } from 'react';

import { useIsVisible } from '@/hooks/useIsVisible.jsx';

export function ObserverBox() {
	const ref = useRef();
	const isVisible = useIsVisible(ref);

	return (
		<div
			className={`h-[300px] w-[300px] text-white  transition-all duration-1000 flex-center ${isVisible ? 'translate-x-[-100px] bg-blue-500 opacity-100' : 'bg-red-500 opacity-20'}`}
		>
			<p ref={ref}>{isVisible ? 'VISIBLE' : 'NOT VISIBLE'}</p>
		</div>
	);
}
