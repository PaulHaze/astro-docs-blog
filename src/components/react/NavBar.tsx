import { useState } from 'react';
import { useCollapse } from 'react-collapsed';

import { Hamburger } from './Hamburger';
import { HamburgerLinks } from './HamburgerLinks';
import { NavLogo } from './Logo';

export function NavBar() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps } = useCollapse({ isExpanded });

	return (
		<>
			<nav className="flex h-[60px] items-center bg-mainBg-200">
				<div className="mx-auto flex w-full max-w-lg items-center justify-between px-10 md:px-20">
					<div className="h-10 w-10 flex-center">
						<NavLogo />
					</div>
					<ul className="hidden gap-x-5 text-sm text-mutedTxt sm:flex">
						<li className="hover:text-mainTxt">
							<a href="/">HOME</a>
						</li>
						<li className="hover:text-mainTxt">
							<a href="/blog/">BLOG</a>
						</li>
						<li className="hover:text-mainTxt">
							<a href="/about/">ABOUT</a>
						</li>
					</ul>
					<div className="sm:hidden">
						<Hamburger isOpen={isExpanded} setOpen={setExpanded} />
					</div>
				</div>
			</nav>
			<div {...getCollapseProps()}>
				<HamburgerLinks />
			</div>
		</>
	);
}
