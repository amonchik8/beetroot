<template>
  <div id="app">
    <div class="panel">
      <TheHeader>Todo App</TheHeader>
      <AppForm @submit="onSubmit" />
      <div class="panel-tabs filters has-background-info-light">
        <AppFilter
          v-for="item in filters"
          :key="item.value"
          :checked="item.value === filter"
          :value="item.value"
          @change="filter = item.value"
          >{{ item.name }}</AppFilter
        >
      </div>
      <transition-group tag="ul" name="todo-list">
        <AppTodo
          class="todo-item"
          v-for="todo in filteredTodos"
          :key="todo.id"
          :id="todo.id"
          :name="todo.name"
          :done="todo.done"
          @change="onChange"
          @delete="onDelete"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import AppForm from "@/components/common/AppForm";
import AppTodo from "@/components/common/AppTodo";
import AppFilter from "@/components/common/AppFilter";

export default {
  components: { TheHeader, AppForm, AppTodo, AppFilter },
  name: "App",
  data() {
    return {
      filters: [
        { value: "all", name: "All" },
        { value: "done", name: "Done" },
        { value: "todo", name: "Todo" },
      ],
      filter: "all",
      todos: [
        { id: 1, name: "Todo something", done: false },
        { id: 2, name: "Todo something 2", done: true },
        { id: 3, name: "Todo something 3", done: false },
      ],
    };
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(({ done }) => {
        switch (this.filter) {
          case "done":
            return done;
          case "todo":
            return !done;
          default:
            return true;
        }
      });
    },
  },
  methods: {
    onChange(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      if (idx >= 0) {
        const todo = this.todos[idx];
        this.todos.splice(idx, 1, { ...todo, done: !todo.done });
      }
    },
    onDelete(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      if (idx >= 0) {
        this.todos.splice(idx, 1);
      }
    },
    onSubmit(todo) {
      const hasEqual = this.todos.some(
        (item) => item.name.toLowerCase() === todo.name.toLowerCase()
      );
      if (!hasEqual) {
        this.todos.push(todo);
      } else {
        alert("");
      }
    },
  },
};
</script>

<style lang="scss">
.panel {
  width: 100%;
}
</style>
