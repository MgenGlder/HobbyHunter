<template>
  <div class="home">
    Welcome to Hobby-Hunter
    <img alt="Vue logo" src="../assets/logo.png">
    <JiuJitsu/>
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
