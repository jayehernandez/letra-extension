<template lang="pug">
.center-container.fadeIn(v-wow data-wow-duration="1s")
  h1 oops!
  .quote-container.sentence
    | An error occurred.
    br
    | Please go to the#{' '}
    a.is-text-primary.is-underlined(:href="webstoreLink") {{ webstoreText }}
    |  of the extension if this continues!
</template>

<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      webstoreLink:
        'https://chrome.google.com/webstore/detail/letra/cjodkkjokggcaeacdhjliobekbnnmoio',
      webstoreText: 'support tab',
    };
  },
};
</script>
