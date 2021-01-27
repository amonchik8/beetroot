<template>
  <div class="panel-block">
    <form @submit.prevent="onSubmit" class="field has-addons">
      <div class="control">
        <input
          v-model="newTodo"
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
      
    }
  }
};
</script>