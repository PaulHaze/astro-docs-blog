import type { Dispatch } from 'react';

import { Fade } from 'hamburger-react';

type HamburgerProps = {
	isOpen: boolean;
	setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export function Hamburger({ isOpen, setOpen }: HamburgerProps) {
	return (
		<Fade color="var(--text-200)" size={24} toggled={isOpen} toggle={setOpen} />
	);
}
