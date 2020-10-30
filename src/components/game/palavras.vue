<template>
  <div class="palavra">
    <div class="text-center well well-lg">
      <span class="gameWord" v-for="(option,idx) in gameWord" :key="`letter-${idx}`">{{ option }}</span>
    </div>
  </div>
</template>

<script>
export default {
 name:'palavras',
 props: ['gameWord']
}
</script>

<style>

</style>