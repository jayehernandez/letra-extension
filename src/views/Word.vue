<template lang="pug">
.center-container.fadeIn(v-wow data-wow-duration="1s" :key="dailyData.word.word")
  .daily-word-container
    .is-flex
      h1 {{ dailyData.word.word || '' }}
      TranslateButton(@click="speak")
    h2 {{ dailyData.word.translation || '' }}
  .quote-container
    .sentence {{ dailyData.quote.sentence }}
    .author.mt1 {{ dailyData.quote.author }}
</template>

<script>
import { mapState } from 'vuex';
import TranslateButton from './../components/TranslateButton';

export default {
  name: 'Word',
  components: {
    TranslateButton,
  },
  computed: {
    ...mapState(['dailyData']),
  },
  methods: {
    speak() {
      responsiveVoice.speak(this.dailyData.word.word, this.dailyData.language.voice);
    }
  },
}
</script>
