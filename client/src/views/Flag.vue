<template lang="pug">
.top-left
  .flag.fadeIn(v-wow data-wow-duration="2s" :key="flagClass")
    i(
      :class="flagClass"
      @mouseover="showLanguage = true"
      @mouseleave="showLanguage = false"
      @click="toggleFlagDropdown"
    )
  .language-name(
    v-bind:class=`{
      fadeInDown: showLanguage === true,
      fadeOutUp: showLanguage === false,
    }`
    v-wow
    data-wow-duration="0.5s"
    v-if="showLanguage !== null"
  ) {{ flagLanguage | titleize }}
  transition(name="fade")
    .options-menu(v-if="showLanguageDropdown")
      .mb1 I'm learning:
      .choices
        label.option(v-for="languageOption in languageOptions")
          | {{ languageOption | titleize }}
          input.checkbox(
            type="checkbox"
            :value="languageOption"
            v-model="selectedLanguages"
          )
          span.checkmark
      button.save-button(
        :disabled="selectedLanguages.length === 0"
        @click="save"
      ) Save

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Flag',
  computed: {
    ...mapState([
      'dailyData',
      'languageOptions'
    ]),
    selectedLanguages: {
      get() {
        return this.$store.state.selectedLanguages;
      },
      set(value) {
        this.$store.commit('setSelectedLanguages', value);
      },
    },
    flagClass() {
      return `twa twa-4x ${this.dailyData.language.flag}`;
    },
    flagLanguage() {
      return this.dailyData.word.language;
    },
  },
  data() {
    return {
      showLanguage: null,
      showLanguageDropdown: false
    };
  },
  methods: {
    ...mapActions([
      'getLanguageOptions',
      'resetSelectedLanguages',
    ]),
    getOptions() {
      this.getLanguageOptions();
    },
    toggleFlagDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown
    },
    save() {
      this.resetSelectedLanguages(this.selectedLanguages);
      this.toggleFlagDropdown();
      this.$snack.success({ text: 'Changes saved!', button: 'OK' });
    },
  },
  mounted() {
    this.getOptions();
  }
};
</script>
