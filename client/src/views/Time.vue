<template lang="pug">
.bottom-right.corner-elements
  .date {{ computedDate }}
  .time {{ computedTime }}
</template>

<script>
export default {
  name: 'Time',
  data() {
    return {
      computedTime: '',
      computedDate: '',
    };
  },
  created() {
    this.getNow();
  },
  methods: {
    getNow() {
      setInterval(() => {
        this.getDateTime();
      }, 1000);
    },
    getDateTime() {
      const today = new Date();

      // Calculate time in 12-hour format
      const time = today.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.computedTime = time;

      // Compute date according to the current locale
      const date = today.toLocaleDateString([], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      this.computedDate = date;
    },
  },
};
</script>
