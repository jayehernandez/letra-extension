<template lang="pug">
.top-left
  .flag.fadeIn(v-wow data-wow-duration="2s" :key="flagClass")
    i(
      :class="flagClass"
      @mouseover="showLanguage = true"
      @mouseleave="showLanguage = false"
    )
  .language-name(
    v-bind:class=`{
      fadeInDown: showLanguage === true,
      fadeOutUp: showLanguage === false,
    }`
    v-wow
    data-wow-duration="0.5s"
    v-if="showLanguage !== null"
  ) {{ flagLanguage | titleize }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Flag',
  computed: {
    ...mapState(['dailyData']),

    flagClass() {
      return `twa twa-4x ${this.dailyData.language.flag}`;
    },
    flagLanguage() {
      return this.dailyData.word.language;
    },
  },
  data() {
    return {
      showLanguage: null,
    };
  },
};
</script>
