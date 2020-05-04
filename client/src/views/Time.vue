<template lang="pug">
.bottom-right.corner-elements
  .date {{ computedDate }}
  .time {{ computedTime }}
</template>

<script>
export default {
  name: 'Time',
  computed: {
    today() {
      return new Date();
    },
    computedDate() {
      return this.today.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
    },
    computedTime() {
      return this.today.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
    },
  },
}
</script>
