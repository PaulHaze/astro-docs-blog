export function HamburgerLinks() {
	return (
		<ul className="flex w-full flex-col items-center justify-center bg-stone-700/30 pb-4 text-sm text-stone-400 ">
			<li className="w-[50%] border-b border-stone-400/50 py-4 text-center hover:text-stone-200">
				<a href="/">HOME</a>
			</li>
			<li className="w-[50%] border-b border-stone-400/50 py-4 text-center">
				<a href="/blog/">BLOG</a>
			</li>
			<li className="w-[50%] pt-4 text-center">
				<a href="/about/">ABOUT</a>
			</li>
		</ul>
	);
}
