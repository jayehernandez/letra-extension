<template lang="pug">
.top-left.icon
  i(:class="flagClass")
</div>
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
}
</script>
