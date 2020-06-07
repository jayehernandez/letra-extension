<template lang="pug">
.top-left.icon.fadeIn(v-wow data-wow-duration="2s" :key="flagClass")
  i(:class="flagClass")
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
  },
};
</script>
