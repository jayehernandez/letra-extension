<template>
  <div>
    <span> {{ dailyData }} </span>
    <Credit></Credit>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
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
