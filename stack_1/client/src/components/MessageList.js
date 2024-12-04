import React from "react";

function MessageList({ messages }) {
	return (
		<div className="space-y-4">
			{messages.map((message, index) => (
				<div
					key={message._id || index}
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<p className="text-gray-700">{message.content}</p>
					<div className="mt-2 text-sm text-gray-500">
						{new Date(message.timestamp).toLocaleString()}
					</div>
				</div>
			))}
			{messages.length === 0 && (
				<div className="text-center py-8 text-gray-500">
					No notes yet. Add your first note above!
				</div>
			)}
		</div>
	);
}

export default MessageList;
