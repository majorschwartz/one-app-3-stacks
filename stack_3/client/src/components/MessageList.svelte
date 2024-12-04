<script>
	export let messages = [];
</script>

<div class="space-y-4">
	{#each [...messages] as message (message._id)}
		<div
			class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
		>
			<p class="text-gray-700">{message.content}</p>
			<div class="mt-2 text-sm text-gray-500">
				{new Date(message.timestamp).toLocaleString()}
			</div>
		</div>
	{:else}
		<div class="text-center py-8 text-gray-500">
			No notes yet. Add your first note above!
		</div>
	{/each}
</div>
