<template lang="pug">
.bottom-left
  | Photo by#{' '}
  a(:href="photoLink") {{ photographerData.name }}
  |  on#{' '}
  a(href="https://unsplash.com/?utm_source=letra&utm_medium=referral") Unsplash
  |  | Text to Speech provided by#{' '}
  a(href="https://responsivevoice.org/") responsivevoice.org
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Credit',
  computed: {
    ...mapState(['dailyData']),

    photographerData() {
      return this.dailyData.photo.user;
    },

    photoLink() {
      return `https://unsplash.com/@${this.photographerData.username}?utm_source=letra&utm_medium=referral`;
    },
  },
};
</script>
