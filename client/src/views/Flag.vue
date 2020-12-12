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
      .flag-options Show in:
      .flag-list(v-for="(language, index) in otherLanguages")
        .flag.fadeIn(
          v-wow
          data-wow-duration="2s"
          :key="dailyData.translations[language].flag"
          v-bind:class=`{ mt0: index === 0 }`
        )
          i(
            :class="dailyData.translations[language].flag"
            class="twa twa-4x"
            @click="toggleActiveLanguage(language); showLanguageDropdown = false;"
          )
        .language-name {{ language | titleize }}
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Flag',
  computed: {
    ...mapState(['dailyData', 'selectedLanguages']),
    flagClass() {
      return `twa twa-4x ${this.dailyData.language.flag}`;
    },
    flagLanguage() {
      return this.dailyData.word.language;
    },
    otherLanguages() {
      return this.selectedLanguages.filter(
        o => o !== this.dailyData.word.language,
      );
    },
  },
  data() {
    return {
      showLanguage: null,
      showLanguageDropdown: false,
    };
  },
  methods: {
    ...mapActions([
      'getSelectedLanguages',
      'toggleActiveLanguage',
      'saveDailyData',
    ]),
    getOptions() {
      this.getSelectedLanguages();
    },
    toggleFlagDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
  },
  mounted() {
    this.getOptions();
  },
};
</script>
