import styles from './navStyles.module.scss';

export function HamburgerLinks() {
	return (
		<div className={styles.hamburgerLinks}>
			<ul>
				<li>
					<a href="/">HOME</a>
				</li>
				<li>
					<a href="/blog/">BLOG</a>
				</li>
				<li>
					<a href="/about/">ABOUT</a>
				</li>
			</ul>
		</div>
	);
}
