<script>
export default {
  data: () => ({
    items: [
      { text: "Home", icon: "mdi-home", to: "/" },
      {
        text: "Progress Orders",
        icon: "mdi-progress-clock",
        to: "/progress-orders/",
      },
      { text: "Nett Income", icon: "mdi-currency-usd", to: "/nett-income/" },
      { text: "Logout", icon: "mdi-logout", to: "/login/" },
    ],
  }),
};
</script>

<template>
  <v-card class="pa-2 mx-auto" max-width="300">
    <v-list>
      <v-list-subheader>MENU</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.to"
        active-color="primary"
        rounded="xl"
      >
        <template #prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
