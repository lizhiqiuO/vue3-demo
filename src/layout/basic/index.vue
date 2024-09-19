<template>
  <van-nav-bar :title="$route.meta.title as string" />
  <router-view />
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import { useRouter } from 'vue-router';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
</script>

<style scoped lang="scss"></style>
