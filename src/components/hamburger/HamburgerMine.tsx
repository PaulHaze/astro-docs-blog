import { Fade as Hamburger } from 'hamburger-react';

import { useState } from 'react';

export function HamburgerMine() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="relative">
			<Hamburger
				color="rgba(255,255,255,0.4)"
				size={28}
				toggled={isOpen}
				toggle={setOpen}
			/>
		</div>
	);
}
