import React, { useState } from "react";
import { createMessage } from "apis/messages";

function AddMessage({ onMessageAdded }) {
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim() || isSubmitting) return;

		setIsSubmitting(true);
		try {
			await createMessage({ content: message });
			setMessage("");
			onMessageAdded();
		} catch (error) {
			console.error("Error adding message:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Write a note to yourself..."
					className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary resize-none h-32"
					disabled={isSubmitting}
				/>
			</div>
			<div>
				<button
					type="submit"
					className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Adding..." : "Add Note"}
				</button>
			</div>
		</form>
	);
}

export default AddMessage;
