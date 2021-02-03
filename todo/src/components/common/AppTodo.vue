<template>
  <li class="panel-block todo" :class="done && 'has-background-success'">
    <label class="todo__label">
      <span class="panel-icon">
        <input @input="onChange" :checked="done" type="checkbox" />
      </span>
      {{ name }}
    </label>
    <button
      @click="$emit('delete', id)"
      class="button is-small is-danger todo__remove-btn"
    >
      Delete
    </button>
  </li>
</template>
<script>
export default {
  name: "AppTodo",
  props: {
    id: Number,
    name: String,
    done: Boolean,
  },
  methods: {
    onChange() {
      this.$emit("change", this.id);
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  cursor: pointer;
}
.todo {
  padding: 0;
  padding-right: 24px;
  &:hover {
    .todo__remove-btn {
      visibility: visible;
      opacity: 1;
    }
  }
  &__remove-btn {
    visibility: hidden;
    opacity: 0;
    transition-property: opacity, visibility;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }
  &__label {
    padding: 12px 0 12px 24px;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__name {
    display: flex;
    align-items: center;
  }
}
</style>