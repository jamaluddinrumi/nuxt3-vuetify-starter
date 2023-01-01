<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" location="right">
      <MainMenu />
    </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar-title>
        <span class="bangers">INDOMASCOT</span>
      </v-toolbar-title>

      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import "@fontsource/inter/400.css";
import "@fontsource/inter/variable.css"; // Contains ONLY variable weights and no other axes.
import "@fontsource/bangers";

const drawer = ref(null);

useHead({
  title: "Admin INDOMASCOT",
});
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.bangers {
  font-family: "Bangers", cursive;
}

@supports (font-variation-settings: normal) {
  body {
    font-family: "InterVariable";
    font-variation-settings: "wght" 400;
  }
}
</style>
