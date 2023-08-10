<template>
  <div class="home">
    <h2>
      Check out the meetup group
      <a
        href="https://www.meetup.com/western-mass-bitcoin-meetup/"
        target="_blank"
        >on Meetup.com</a
      >
      to see when our next monthly meetup is.
    </h2>
    <img
      alt="Bitcoin symbol"
      src="../assets/wmbm-banner.png"
      class="center-fit"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>
<style scoped>
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
