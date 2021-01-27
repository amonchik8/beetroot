<template>
  <div id="app">
    <Header>Page 1</Header>
    <Section>
      <template #first>
        <h2>First Section</h2>
        <Button type="button__warning">Warning</Button>
      </template>
      <template #second>
        <h2>Second Section</h2>
        <Button @click="onClick" type="button__danger" :loading="loading">Danger</Button>
      </template>
    </Section>
    <Page>
      <template #header>Header</template>
      <template #main>Main</template>
      <template #footer>Footer</template>
    </Page>
    <h2>Count: {{ count }}</h2>
    <Button @click="count +=1">+</Button>
    <Button @click="count -=1">-</Button>
    <Button @click="count =0">Reset</Button>
  </div>
</template>

<script>
import Header from "./components/Header";
import Section from "./components/Section";
import Page from "./components/Page";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Page,
  },
  data() {
    return {
      loading: true,
      count:0,
    };
  },
  methods: {
    onClick() {
      console.log("hello");
    },
  },
};
</script>

<style lang="scss">
body {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>