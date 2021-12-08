<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <JiuJitsu msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import JiuJitsu from '@/components/JiuJitsu.vue';

@Options({
  components: {
    JiuJitsu,
  },
})
export default class Home extends Vue {}
</script>
