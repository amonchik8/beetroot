<template>
  <div class="panel-block">
    <form @submit.prevent="onSubmit" class="field has-addons">
      <div class="control">
        <input
          v-model.trim="newTodo"
          class="input"
          type="text"
          placeholder="Enter todo..."
        />
      </div>
      <div class="control">
        <button class="button is-info">Add todo</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AppForm",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.newTodo) {
        const todo = {
          id: Date.now(),
          name: this.newTodo,
          done: false,
        };
        this.$emit("submit", todo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
}
.form-input,
input {
  width: 100%;
}
</style>