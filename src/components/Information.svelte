<script>
  let milestones = [
    { pushups: 1000, description: "Will be doing a pushup in SLC at lunchtime, shirtless and oiled up." },
    { pushups: 2000, description: "[haven't reached this milestone]", greyedOut: true },
  ];
</script>

<main>
  <h1>Fundraiser Information</h1>
  <p>I'm doing an extra pushup for every dollar donated for mental health!<br>Donate, and imprison me to a life of constant pushups.</p>
  <a href="https://www.thepushupchallenge.ca/fundraisers/wellnesswarriors">Wellness Warriors donation page</a>
  <br>
  <a href="https://www.thepushupchallenge.ca/fundraisers/josiahplett">Josiah Plett donation page</a>
  <br><br>
  <h1>Milestones</h1>

  <div id="Milestones">
    {#each milestones as milestone}
      <p><b>{milestone.pushups}th Pushup</b></p>
      <td class={milestone.greyedOut ? "grey" : ""}>{milestone.description}</td>
    {/each}
  </div>
</main>

<style>
  #Milestones {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .grey {
    color: grey;
  }
</style>