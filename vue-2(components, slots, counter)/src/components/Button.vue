<template>
  <button @click="$emit('click')" :class="type" class="button">
      <span v-if="loading">Loading ...</span>
      <slot v-else />
      </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    loading: Boolean,
    type: {
      type: String,
      validator(prop) {
        return ["primary", "button__danger", "button__warning"].includes(prop);
      },
      default: "primary",
    },
  },
};
</script>

<style lang="scss">
.button {
    margin-right: 20px;
  padding: 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: bisque;
  box-shadow: 1px 1px 1px 1px black;
  transition: box-shadow 0.2s ease;
  &:active {
    box-shadow: 2px 2px 2px 2px black;
  }
  &__danger {
    background-color: red;
  }
  &__warning {
    background-color: orangered;
  }
}
</style>

