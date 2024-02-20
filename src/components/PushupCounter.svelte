<script>
import { onMount } from 'svelte';
import { db } from '../firebase';
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore';

export let userEmail;

let count = 0;
let fundraisedAmount = 0; // New state for the fundraised amount
let updated = false;
let error = null;
let adding = false; // State to track when either pushups or funds are being added
let valueToAdd = 0; // The value to add, either pushups or funds

function fetchData() {
  const docRef = doc(db, 'pushups', 'josiah');
  const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      count = data.total;
      fundraisedAmount = data.donations;
      updated = true;
    } else {
      updated = false;
      error = "Document doesn't exist.";
    }
  }, (error) => {
    console.error("Error listening to document:", error);
    updated = false;
    this.error = "Failed to fetch data.";
  });

  return () => unsubscribe();  // Cleanup the listener on component destroy
}

// Increment either the pushup count or the fundraised amount
async function incrementValue(field, value) {
  if (userEmail === 'jlplett303@gmail.com' && value > 0) {
    adding = true;
    const docRef = doc(db, 'pushups', 'josiah');
    await updateDoc(docRef, {
      [field]: increment(value)
    }).then(() => {
      valueToAdd = 0; // Clear the input field after successful addition
    }).catch((error) => {
      console.error("Error updating document:", error);
      this.error = "Update failed.";
    }).finally(() => {
      adding = false; // Ensure input field is enabled after operation
    });
  }
}

onMount(() => fetchData());
</script>

<main>
  <h1>Josiah's Pushups & Fundraised Total</h1>
  {#if updated && error === null}
    <p>Pushups: {count}</p>
    <p>Fundraised: ${fundraisedAmount}</p>
    {#if userEmail === 'jlplett303@gmail.com'}
      <input 
        type="number" 
        bind:value={valueToAdd} 
        min="-100"
        max="500" 
        placeholder="Value to add"
        disabled={adding} />
      <button 
        on:click={() => incrementValue('total', valueToAdd)} 
        disabled={adding || valueToAdd <= 0}>
        Add {valueToAdd || 'some'} pushups
      </button>
      <button 
        on:click={() => incrementValue('donations', valueToAdd)} 
        disabled={adding || valueToAdd <= 0}>
        Add {"$" + valueToAdd || 'some'} donations
      </button>
    {/if}
  {:else}
    <p>{error}</p>
  {/if}
</main>

<style>
main {
  text-align: center;
}
button, input {
  margin-top: 20px;
  margin-right: 10px;
}
</style>
