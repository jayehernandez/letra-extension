<template lang="pug">
  div
    div(v-if="hasError")
      ErrorPage
    div(v-else)
      #background(:style="{ backgroundImage: `url('${imageUrl}')` }")
      Credit
      Flag
      Word
    Options
    Time
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Credit from './views/Credit';
import Flag from './views/Flag';
import Word from './views/Word';
import Options from './views/Options';
import Time from './views/Time';
import ErrorPage from './views/ErrorPage';

export default {
  name: 'App',
  components: {
    Credit,
    Flag,
    Word,
    Options,
    Time,
    ErrorPage,
  },
  computed: {
    ...mapState(['dailyData', 'hasError']),

    imageUrl() {
      if (!!this.dailyData.photo.urls) return this.dailyData.photo.urls.full;
      return '';
    },
  },
  mounted() {
    this.loadDailyData();
  },
  methods: {
    ...mapActions(['getSelectedLanguages']),

    loadDailyData() {
      this.getSelectedLanguages();
    },

    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
  },
}
</script>
