<template>
  <div id="background" :style="{ backgroundImage: `url('${backgroundImageUrl }')` }"></div>
</template>

<script>
import axios from 'axios';

const unsplashUrl = "https://api.unsplash.com/photos/random?client_id=c-_dTbF48_mnaQ8paMBtLPsCqmpMzKEpcPqImbnDImI&collections=9836658";

export default {
  name: 'Background',
  mounted() {
    axios.get(
      unsplashUrl,
      { 'headers': { 'Accept': 'application/json' } }
    )
      .then(response => {
        const unsplashImage = response.data;
        this.storeImage(unsplashImage);

      });
  },
  data () {
    return {
      backgroundImage: null,
    }
  },
  computed: {
    backgroundImageUrl() {
      if (!!this.backgroundImage) return this.backgroundImage.urls.full;
      else return '';
    }
  },
  methods: {
    storeImage(unsplashImage) {
      chrome.storage.sync.get("dailyData", (response) => {
        response.dailyData.unsplashImage = unsplashImage;
        chrome.storage.sync.set({ dailyData: response.dailyData });
        this.backgroundImage = unsplashImage;
        debugger;
      });
    }
  },
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>