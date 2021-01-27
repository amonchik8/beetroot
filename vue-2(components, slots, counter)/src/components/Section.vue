<template>
  <div class="section">
    <div class="section__col">
        <slot name="first" />
    </div>
    <div class="section__col">
        <slot name="second" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
};
</script>

<style lang="scss">
.section {
  display: flex;
  &__col {
    min-height: 200px;
    flex: 1 1 50%;
    &:nth-child(1) {
      background-color: lightblue;
    }
    &:nth-child(2) {
      background-color: lightgreen;
    }
  }
}
</style>