<script>
	import { onMount } from 'svelte';
	import AddMessage from './components/AddMessage.svelte';
	import MessageList from './components/MessageList.svelte';

	let messages = [];

	async function fetchMessages() {
		try {
			const response = await fetch('http://localhost:5000/api/messages');
			messages = await response.json();
		} catch (error) {
			console.error('Error fetching messages:', error);
		}
	}

	onMount(() => {
		fetchMessages();
	});
</script>

<div class="min-h-screen bg-gray-50">
	<header class="bg-white shadow-sm">
		<div class="max-w-4xl mx-auto px-4 py-6">
			<h1 class="text-3xl font-bold text-gray-900">
				Note To Self (Svelte + Express + SQLite)
			</h1>
		</div>
	</header>
	<main class="max-w-4xl mx-auto px-4 py-8">
		<div class="space-y-6">
			<AddMessage on:message-added={fetchMessages} />
			<MessageList {messages} />
		</div>
	</main>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>