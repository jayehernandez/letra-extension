<template lang="pug">
  div
    div(v-if="hasError")
      | To do: error page
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

export default {
  name: 'App',
  components: {
    Credit,
    Flag,
    Word,
    Options,
    Time,
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
    ...mapActions(['getDailyData']),

    loadDailyData() {
      this.getDailyData();
    },

    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
  },
}
</script>
