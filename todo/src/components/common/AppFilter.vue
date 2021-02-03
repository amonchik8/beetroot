<template>
  <label class="radio">
    <input
      :value="value"
      :checked="checked"
      @change="$emit('change', value)"
      type="radio"
    />
    <span><slot /></span>
  </label>
</template>
<script>
export default {
  name: "AppFilter",
  props: {
    value: String,
    checked: Boolean,
  },
};
</script>