<script setup>
defineProps({
	messages: {
		type: Array,
		required: true,
	},
});
</script>

<template>
	<div class="space-y-4">
		<div
			v-for="message in [...messages].reverse()"
			:key="message._id"
			class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
		>
			<p class="text-gray-700">{{ message.content }}</p>
			<div class="mt-2 text-sm text-gray-500">
				{{ new Date(message.timestamp).toLocaleString() }}
			</div>
		</div>
		<div
			v-if="messages.length === 0"
			class="text-center py-8 text-gray-500"
		>
			No notes yet. Add your first note above!
		</div>
	</div>
</template>
