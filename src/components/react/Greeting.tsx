import { useState } from 'react';

type Props = {
	messages: string[];
};

export function Greeting({ messages }: Props) {
	const randomMessage = () =>
		messages[Math.floor(Math.random() * messages.length)];

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div className="w-full flex-col flex-center">
			<h3>{greeting}! Thank you for visiting!</h3>
			<button
				className="text-mainBg mt-5 rounded bg-white px-4 py-2"
				onClick={() => setGreeting(randomMessage())}
			>
				New Greeting
			</button>
		</div>
	);
}
