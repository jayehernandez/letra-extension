<template lang="pug">
  div
    Credit
    Flag
    Word
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Credit from './views/Credit';
import Flag from './views/Flag';
import Word from './views/Word';

export default {
  name: 'App',
  components: {
    Credit,
    Flag,
    Word,
  },
  computed: {
    ...mapState(['dailyData']),
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
