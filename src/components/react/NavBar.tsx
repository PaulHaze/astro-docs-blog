import { NavLogo } from './Logo';

export function NavBar() {
	return (
		<div className="">
			<nav className="flex h-[60px] items-center bg-stone-700/30">
				<div className="mx-auto flex w-full max-w-lg items-center justify-between px-10 md:px-20">
					<div className="h-10 w-10 flex-center">
						<NavLogo />
					</div>
					<div className="hidden sm:visible">LINKS</div>
					<div className="sm:hidden">BURGER</div>
				</div>
			</nav>
			<div className="">HAMBURGER LINKS</div>
		</div>
	);
}
