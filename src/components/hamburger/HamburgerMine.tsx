import { Fade as Hamburger } from 'hamburger-react';

import { useState } from 'react';

export function HamburgerMine() {
	const [isOpen, setOpen] = useState(false);
	return <Hamburger size={28} toggled={isOpen} toggle={setOpen} />;
}
