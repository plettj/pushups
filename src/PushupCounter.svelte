<script>
import { onMount } from 'svelte';
import { db } from '../firebase';  // Adjust the path as necessary

let count = 0;

onMount(() => {
  const unsubscribe = db.collection('pushups').doc('counter')
    .onSnapshot(doc => {
      count = doc.data().count;
    });

  return () => unsubscribe();  // Cleanup the listener on component destroy
});

async function incrementCount() {
  await db.collection('pushups').doc('count').update({
    count: firebase.firestore.FieldValue.increment(1)
  });
}

</script>

<main>
  <h1>Pushup Counter</h1>
  <p>Current Count: {count}</p>
  <button on:click={incrementCount}>Add a Pushup</button>
</main>

<style>
/* Add your styles here */
main {
    text-align: center;
}
button {
    margin-top: 20px;
}
</style>
