import React, { useState, useEffect } from "react";
import AddMessage from "components/AddMessage";
import MessageList from "components/MessageList";
import { getMessages } from "apis/messages";

function App() {
	const [messages, setMessages] = useState([]);

	const fetchMessages = async () => {
		try {
			const data = await getMessages();
			setMessages(data);
		} catch (error) {
			console.error("Error fetching messages:", error);
		}
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm">
				<div className="max-w-4xl mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-900">
						Note To Self (React + FastAPI + MongoDB)
					</h1>
				</div>
			</header>
			<main className="max-w-4xl mx-auto px-4 py-8">
				<div className="space-y-6">
					<AddMessage onMessageAdded={fetchMessages} />
					<MessageList messages={messages} />
				</div>
			</main>
		</div>
	);
}

export default App;
