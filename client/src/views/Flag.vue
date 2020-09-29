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
    div(v-if="showLanguageDropdown")
      .flag-list(v-for="language in selectedLanguagesWithFlags")
        .flag.fadeIn(v-wow data-wow-duration="2s" :key="language.flag")
          i(
            :class="language.flag"
            class="twa twa-4x"
          )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Flag',
  computed: {
    ...mapState([
      'dailyData',
      'selectedLanguagesWithFlags'
    ]),
    flagClass() {
      return `twa twa-4x ${this.dailyData.language.flag}`;
    },
    flagLanguage() {
      return this.dailyData.word.language;
    },
    selectedLanguages() {
      let selected = this.selectedLanguagesWithFlags.map(o => {
        return o.language;
      });
      return selected;
    }
  },
  data() {
    return {
      showLanguage: null,
      showLanguageDropdown: false
    };
  },
  methods: {
    ...mapActions([
      'getSelectedLanguagesWithFlags',
      'resetSelectedLanguages',
    ]),
    getOptions() {
      this.getSelectedLanguagesWithFlags();
    },
    toggleFlagDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown
    },
    save() {
      // this.resetSelectedLanguages(this.selectedLanguages);
      this.toggleFlagDropdown();
      this.$snack.success({ text: 'Changes saved!', button: 'OK' });
    },
  },
  mounted() {
    this.getOptions();

    console.log(this);
  }
};
</script>
