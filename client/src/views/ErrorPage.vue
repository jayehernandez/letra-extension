<template lang="pug">
.center-container.fadeIn(v-wow data-wow-duration="1s")
  h1 oops!
  .quote-container.sentence
    | An error occured.
    br
    | Please go to the support tab of the extension if this continues!
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>
