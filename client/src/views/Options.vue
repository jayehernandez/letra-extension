<template lang="pug">
div(v-click-outside="closeOptionsMenu")
  .top-right.corner-elements
    RandomButton(@click="retrieveDailyData")
    OptionsButton(@click="toggleOptionsMenu")
  transition(name="fade")
    .options-menu(v-if="showOptions")
      .mb1 I'm learning:

      multiselect(
        v-model="selectedLanguages",
        :options="checkboxOptions",
        :multiple="true",
        :close-on-select="true",
        :show-labels="false",
        :custom-label="customLabel",
        placeholder="Select a language",
        @click="resetMessage"
      )

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

    checkboxOptions: {
      get() {
        return Object.keys(this.languageOptions);
      },
      set() {},
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
    customLabel(value) {
      if (typeof value !== 'string') return '';

      const frags = value.split('-');
      return frags
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
  },
};
</script>
