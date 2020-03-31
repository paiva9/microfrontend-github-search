<template>
  <div class="sidebar">
    <div class="title">Github Search</div>

    <div class="items">
      <a v-for="(app, x) in apps" :key="x" :href="app.url">{{ app.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      apps: [
        { url: "#/search/repositories", label: "Repositórios" },
        { url: "#/search/users", label: "Usuários" }
      ]
    };
  }
};
</script>

<style src="./style.css" scoped></style>
