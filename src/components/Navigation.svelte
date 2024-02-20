<script>
  import { createEventDispatcher } from 'svelte';
  import { onMount } from 'svelte';
  import { auth } from '../firebase';
  import { signInWithGoogle, signOutUser } from '../auth';
  import { onAuthStateChanged } from 'firebase/auth';
  
  const dispatch = createEventDispatcher();
  let user = null;
  
  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        user = firebaseUser;
        dispatch('userChanged', { userEmail: user.email }); // Dispatch event with user email
      } else {
        user = null;
        dispatch('userChanged', { userEmail: null }); // Reset to null when logged out
      }
    });
  
    return () => unsubscribe();
  });
  
  const login = () => {
    signInWithGoogle();
  };
  
  const logout = () => {
    signOutUser();
  };
</script>

{#if user}
  <p>Welcome, {user.displayName}</p>
  <button on:click={logout}>Sign out</button>
{:else}
  <button on:click={login}>Sign in with Google</button>
{/if}
  