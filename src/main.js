import App from './App.svelte';
import { writable } from 'svelte/store';
import { db } from './firebase';

db.collection('pushups').doc('counter')
  .onSnapshot(doc => {
    if (doc.exists) {
      pushupCount.set(doc.data().count);
    }
  });

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


export const pushupCount = writable(0);
export default app;