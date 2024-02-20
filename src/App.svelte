<script>
  import { writable } from 'svelte/store';
  import PushupCounter from './components/PushupCounter.svelte';
  import Navigation from './components/Navigation.svelte';
  
  let userEmail = writable(null); // This remains as your reactive store for user email

  // Function to update userEmail based on event from Navigation
  function handleUserChange(event) {
    userEmail.set(event.detail.userEmail);
  }
</script>
  
<main>
  <Navigation on:userChanged={handleUserChange} />
  <PushupCounter userEmail={$userEmail} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>