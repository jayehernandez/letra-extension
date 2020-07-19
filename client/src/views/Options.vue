<template lang="pug">
div(v-click-outside="closeOptionsMenu")
  .top-right.corner-elements
    RandomButton(@click="retrieveDailyData")
    OptionsButton(@click="toggleOptionsMenu")
  transition(name="fade")
    .options-menu(v-if="showOptions")
      .mb1 I'm learning:
      .choices
        label.option(v-for="languageOption in languageOptions")
          | {{ languageOption | titleize }}
          input.checkbox(
            type="checkbox"
            :value="languageOption"
            v-model="selectedLanguages"
            @click="resetMessage"
          )
          span.checkmark
      .has-text-centered.is-text-primary.my1.message {{ message }}
      button.save-button(
        :disabled="selectedLanguages.length === 0"
        @click="save"
      ) Save
      .has-text-centered.mt1
        a.nowrap(
          :href="contributeLink"
        ) {{ contributeLinkText }}
</template>

<script>
import { mapActions, mapState } from 'vuex';
import RandomButton from '../components/RandomButton';
import OptionsButton from '../components/OptionsButton';

export default {
  name: 'Options',
  components: {
    RandomButton,
    OptionsButton,
  },
  computed: {
    ...mapState(['languageOptions']),

    selectedLanguages: {
      get() {
        return this.$store.state.selectedLanguages;
      },
      set(value) {
        this.$store.commit('setSelectedLanguages', value);
      },
    },
  },
  data() {
    return {
      showOptions: false,
      message: '',
      contributeLink: 'https://github.com/jayehernandez/letra-extension',
      contributeLinkText: 'Contribute on Github',
    };
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    ...mapActions([
      'getLanguageOptions',
      'resetSelectedLanguages',
      'retrieveDailyData',
    ]),

    getOptions() {
      this.getLanguageOptions();
    },
    toggleOptionsMenu() {
      this.showOptions = !this.showOptions;
    },
    closeOptionsMenu() {
      this.showOptions = false;
    },
    save() {
      this.resetSelectedLanguages(this.selectedLanguages);
      this.toggleOptionsMenu();
      this.$snack.success({ text: 'Changes saved!', button: 'OK' });
    },
    resetMessage() {
      this.message = '';
    },
  },
};
</script>
