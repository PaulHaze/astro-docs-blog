import { useState } from 'react';

import { Hamburger } from './Hamburger';
import { NavLogo } from './Logo';

export function NavBar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="">
			<nav className="flex h-[60px] items-center bg-stone-700/30">
				<div className="mx-auto flex w-full max-w-lg items-center justify-between px-10 md:px-20">
					<div className="h-10 w-10 flex-center">
						<NavLogo />
					</div>
					<ul className="hidden gap-x-5 text-sm text-stone-400 sm:flex">
						<li className="hover:text-stone-100">
							<a href="/">HOME</a>
						</li>
						<li className="hover:text-stone-100">
							<a href="/blog/">BLOG</a>
						</li>
						<li className="hover:text-stone-100">
							<a href="/about/">ABOUT</a>
						</li>
					</ul>
					<div className="sm:hidden">
						<Hamburger isOpen={isOpen} setOpen={setOpen} />
					</div>
				</div>
			</nav>
			<div className="">HAMBURGER LINKS</div>
		</div>
	);
}
