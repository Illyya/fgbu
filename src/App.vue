<template>
  <div id="app">
    <div class="content">
      <a 
        v-if="show" 
        @click="show = !show" 
        class="content__link" 
        href="#">
        Обработать данные
      </a>
      <processedData 
        v-else
        :h1='h1'
        :h2='h2'
        :ColsTitles='ColsTitles'
        :Data='Data' />
    </div>
  </div>
</template>

<script>
import processedData from "./components/processedData.vue";

export default {
  name: "App",
  components: {
    processedData,
  },  
  data() {
    return {
      show: true,
      h1: this.$store.state.data.H1Content,
      h2: this.$store.state.data.TableName,
      ColsTitles: this.$store.state.data.ColsTitles,
      Data: this.$store.state.data.Data,
    };
  },
  beforeCreate: function () {
    document.title = this.$store.state.data.PageTitle;
  },
};
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__link {
    color: #2e2e2e;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover {
      color: #a09f9f;
    }
  }
}
</style>
