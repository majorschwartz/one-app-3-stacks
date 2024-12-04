<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	let message = "";
	let isSubmitting = false;

	async function handleSubmit(e) {
		e.preventDefault();
		if (!message.trim() || isSubmitting) return;

		isSubmitting = true;
		try {
			await fetch("http://localhost:5000/api/messages", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ content: message }),
			});
			message = "";
			dispatch("message-added");
		} catch (error) {
			console.error("Error adding message:", error);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form on:submit={handleSubmit} class="space-y-4">
	<div>
		<textarea
			bind:value={message}
			placeholder="Write a note to yourself..."
			class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary resize-none h-32"
			disabled={isSubmitting}
		/>
	</div>
	<div>
		<button
			type="submit"
			class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			disabled={isSubmitting}
		>
			{isSubmitting ? "Adding..." : "Add Note"}
		</button>
	</div>
</form>
