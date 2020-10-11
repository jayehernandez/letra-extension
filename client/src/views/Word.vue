<template lang="pug">
.center-container
  .fadeIn.center-container(
    v-wow data-wow-duration="1s"
    :key="dailyData.word.word"
    v-if="!loading"
  )
    .daily-word-container
      h3.mb0 {{ dailyData.word.romanization || '' }}
      .is-flex.is-justify-centered
        h1(
          v-bind:style="{ 'font-size': calculateFontSizeForDailyWord }"
        ) {{ dailyData.word.word || '' }}
        TranslateButton(@click="speak")
      h2 {{ dailyData.word.translation || '' }}
    .quote-container
      .sentence {{ dailyData.quote.sentence }}
      .author.mt1 {{ dailyData.quote.author }}
  div(v-else)
    .lds-ellipsis
      div
      div
      div
      div
</template>

<script>
import { mapState } from 'vuex';
import TranslateButton from '../components/TranslateButton';

export default {
  name: 'Word',
  components: {
    TranslateButton,
  },
  computed: {
    ...mapState(['dailyData', 'loading']),
    calculateFontSizeForDailyWord() {
      if (this.dailyData.word.word) {
        switch (true) {
          case this.dailyData.word.word.length >= 20:
            return '7vw';
          case this.dailyData.word.word.length >= 15:
            return '8vw';
          case this.dailyData.word.word.length >= 13:
            return '9vw';
          default:
            return '10vw';
        }
      }
      return '10vw';
    },
  },
  methods: {
    speak() {
      // eslint-disable-next-line
      responsiveVoice.speak(
        this.dailyData.word.word,
        this.dailyData.language.voice,
      );
    },
  },
};
</script>
