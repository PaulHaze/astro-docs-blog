export function NavBar() {
	return (
		<nav className="flex h-[60px] items-center bg-stone-700/30">
			<div className="mx-auto flex w-full max-w-lg items-center justify-between px-10 md:px-20">
				<div className="">Icon</div>
				<div className="sm:hidden">BURGER</div>
				<p>Links</p>
			</div>
			<div className="">HAMBURGER LINKS</div>
		</nav>
	);
}
