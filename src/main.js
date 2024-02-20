import App from './App.svelte';
import { writable } from 'svelte/store';

const app = new App({
	target: document.body,
});

export const pushupCount = writable(0);
export default app;