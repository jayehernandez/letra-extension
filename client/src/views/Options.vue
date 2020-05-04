<template lang="pug">
div
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
      button.save-button(
        :disabled="selectedLanguages.length === 0"
        @click="save"
      ) Save
      .has-text-centered.is-text-primary.mt1.message {{ message }}
</template>

<script>
import { mapActions, mapState } from 'vuex';
import RandomButton from './../components/RandomButton';
import OptionsButton from './../components/OptionsButton';

export default {
  name: 'Options',
  components: {
    RandomButton,
    OptionsButton,
  },
  computed: {
    ...mapState(['languageOptions']),

    selectedLanguages: {
      get () {
        return this.$store.state.selectedLanguages;
      },
      set (value) {
        this.$store.commit('setSelectedLanguages', value);
      }
    },
  },
  data() {
    return {
      showOptions: false,
      message: '',
    };
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    ...mapActions(['getLanguageOptions', 'saveSelectedLanguages', 'retrieveDailyData']),

    getOptions() {
      this.getLanguageOptions();
    },
    toggleOptionsMenu() {
      this.showOptions = !this.showOptions;
    },
    save() {
      this.saveSelectedLanguages(this.selectedLanguages);
      this.message = 'Saved changes!';
    },
    resetMessage() {
      this.message = '';
    },
  },
}
</script>
