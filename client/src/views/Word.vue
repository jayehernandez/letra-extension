<template lang="pug">
.center-container
  .fadeIn.center-container(
    v-wow data-wow-duration="1s"
    :key="dailyData.word.word"
    v-if="!loading"
  )
    .daily-word-container
      .is-flex.is-justify-centered
        h1 {{ dailyData.word.word || '' }}
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
import TranslateButton from './../components/TranslateButton';

export default {
  name: 'Word',
  components: {
    TranslateButton,
  },
  computed: {
    ...mapState(['dailyData', 'loading']),
  },
  methods: {
    speak() {
      responsiveVoice.speak(this.dailyData.word.word, this.dailyData.language.voice);
    }
  },
}
</script>
