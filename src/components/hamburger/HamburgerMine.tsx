/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Fade as Hamburger } from 'hamburger-react';

import { useState } from 'react';

export function HamburgerMine() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="relative">
			<Hamburger
				// onToggle={(toggled) => {
				// 	if (toggled) {
				// 		console.log('open menu');
				// 	} else {
				// 		console.log('close menu');
				// 	}
				// }}
				color="rgba(255,255,255,0.4)"
				size={28}
				toggled={isOpen}
				toggle={setOpen}
			/>
		</div>
	);
}

/* 
<Hamburger onToggle={toggled => {
  if (toggled) {
     // open a menu
  } else {
     // close a menu
  }
}} />
*/
