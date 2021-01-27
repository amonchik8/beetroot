<template>
  <li class="panel-block">
    <span class="panel-icon">
      <input @input="onChange" :checked="done" type="checkbox" />
    </span>
    {{ name }}
    <span>{{ done ? "done" : "todo" }}</span>
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