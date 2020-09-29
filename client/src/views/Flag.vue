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
      .flag-list(v-for="language in otherLanguages")
        .flag.fadeIn(v-wow data-wow-duration="2s" :key="language.flag")
          i(
            :class="language.flag"
            class="twa twa-4x"
            @click="toggleActiveLanguage(language.language)"
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
    otherLanguages() {
      return this.selectedLanguagesWithFlags.filter(o => o.language !== this.dailyData.word.language);
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
      'saveDailyData'
    ]),
    getOptions() {
      this.getSelectedLanguagesWithFlags();
    },
    toggleFlagDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown
    },
    toggleActiveLanguage(name) {
      const other = this.dailyData.translations[name];
      let { flag, voice, translation } = other;
      let { word, romanization } = translation;

      let thisTranslation = {
        flag: this.dailyData.language.flag,
        voice: this.dailyData.language.voice,
        translation: {
          translation: this.dailyData.word.translation,
          word: this.dailyData.word.word,
          romanization: this.dailyData.word.romanization ?
            this.dailyData.word.romanization :
            null
        }
      };
      
      let toggledDailyData = {
        ...this.dailyData,
        language: {
          flag: flag,
          voice: voice
        },
        word: {
          language: name,
          translation: translation.translation,
          word: word
        }
      }
      toggledDailyData.translations[this.dailyData.word.language] = thisTranslation;

      this.saveDailyData(toggledDailyData);
      this.showLanguageDropdown = false;
    }
  },
  mounted() {
    this.getOptions();
  }
};
</script>
