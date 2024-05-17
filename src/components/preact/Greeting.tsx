import { useState } from 'preact/hooks';

export function Greeting({ messages }) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<p>Greeting Placeholder</p>
		</div>
	);
}
