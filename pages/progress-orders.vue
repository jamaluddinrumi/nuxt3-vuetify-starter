<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <div class="d-flex align-center h-screen justify-center">
    <slot />
    Progress Orders
  </div>
</template>
