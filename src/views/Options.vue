<template lang="pug">
div
  .top-right.corner-elements
    RandomButton(@click="retrieveNewData")
    OptionsButton(@click="toggleOptionsMenu")
  transition(name="fade")
    #options-menu(v-if="showOptions")
      .mb1 I'm learning:
      #options-choices
        label.option Lol
          input.checkbox#lol(type="checkbox")
          span.checkmark
      button#save-button Save
      .has-text-centered.is-text-primary.mt1.message
</template>

<script>
import RandomButton from './../components/RandomButton';
import OptionsButton from './../components/OptionsButton';

export default {
  name: 'Options',
  components: {
    RandomButton,
    OptionsButton,
  },
  data() {
    return {
      showOptions: false,
    };
  },
  mounted() {
    this.get
  },
  methods: {
    // ...mapActions('getLanguageOptions'),

    retrieveNewData() {
      console.log('retrieve');
    },
    toggleOptionsMenu() {
      this.showOptions = !this.showOptions;
    },
  },
}
</script>
