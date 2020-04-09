<template>
<div class="center-container">
  <div class="daily-word-container">
    <div class="word-container">
      <h1>{{ dailyData.word.word || '' }}</h1>
      <button id="translate-button" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
      </button>
    </div>
    <h2>{{ dailyData.word.translation || '' }}</h2>
  </div>
  <div class="quote-container">
    <div class="quote">
      <div id="quote">{{ dailyData.quote.sentence }}</div>
      <div id="author" class="mt1">{{ dailyData.quote.author }}</div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Word',
  computed: {
    ...mapState(['dailyData']),
  },
}
</script>
