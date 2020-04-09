<template>
  <transition name="fade">
    <div id="options-menu" v-if="showOptions">
      <div class="mb1">I'm learning:</div>
      <div id="options-choices">
        <label class="option">Lol
        <input class="checkbox" type="checkbox" id="lol">
        <span class="checkmark"></span></label>
      </div>
      <button id="save-button">Save</button>
      <div class="has-text-centered is-text-primary mt1 message"></div>
    </div>
  </transition>
</template>

<script>
// import Background from '../views/Background.vue';
// import Word from '@/views/Word.vue';

const letraUrl = "https://jayehernandez.github.io/letra"

export default {
  name: 'Options',
  props: {
    showOptions: {
      type: Boolean,
      required: true,
    },
  },
  data () {
    return {
      message: "My new tab page"
    }
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>