// import { useRef } from 'react';
// import type { RefObject } from 'react';

import { useInView } from 'react-intersection-observer';

// import { useIsVisible } from '@/hooks/useIsVisible.jsx';

export function ObserverBoxPkg() {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	return (
		<div
			className={`my-10 h-[300px] w-[300px] text-white  transition-all duration-1000 flex-center ${inView ? 'translate-x-[100px] bg-blue-500 opacity-100' : 'bg-red-500 opacity-20'}`}
		>
			<p ref={ref}>{inView ? 'PKG VISIBLE' : 'PKG NOT VISIBLE'}</p>
		</div>
	);
}
