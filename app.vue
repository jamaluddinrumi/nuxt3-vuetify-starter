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
import "~/assets/fonts.css";
import "~/assets/app.css";

const drawer = ref(false);

useHead({
  title: "Admin INDOMASCOT",
});
</script>
