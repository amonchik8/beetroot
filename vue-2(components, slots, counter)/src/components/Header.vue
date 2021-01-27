<template>
<header>
    <h1 class="title"><slot>title</slot></h1>
</header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style lang="scss" scoped>
header {
    padding: 12px 24px;
    background-color: aquamarine;
    margin-bottom: 10px;
}
.title {
    color:  burlywood;
}
</style>