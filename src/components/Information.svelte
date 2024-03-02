<script>
  let milestones = [
    { pushups: 1000, description: "Shirtless Pushups in SLC at lunchtime! <a href='https://www.reddit.com/r/uwaterloo/comments/1b47yl2/the_1000th_pushup_shirtless_in_slc_like_you_voted/'>Reddit Recap</a>." },
    { pushups: 2000, description: "Undecided; Reddit is voting <a href='https://www.reddit.com/r/uwaterloo/comments/1b483jo/reddit_tell_us_how_to_do_our_2000th_pushup_for/'>here</a>." },
    { pushups: 3000, description: "[haven't reached this milestone]", greyedOut: true },
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
      <td class={milestone.greyedOut ? "grey" : ""}>{@html milestone.description}</td>
    {/each}
  </div>

  <!-- Pushups for Running across Canada -->
  <!-- <a href="https://gofund.me/b5442f80">Donate to Keenan to support his run!</a>-->
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