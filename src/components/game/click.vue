<template>
    <div class="letras text-center">
          <span class="" v-for="(letter, index) in letters" :key="index">
            <button @click="addLetter(letter)">{{ letter }} </button>
          </span>
      </div>
</template>

<script>
export default {
 name: 'letter-click',
 props: ['letters'],
 methods: {
   addLetter(letter){
      console.log('EMIT ENT CLICK', letter)
      this.$events.emit('addLetter', letter)
      // this.$emit('EVENT', {'test': true})

   }
 }
}
</script>

<style>

</style>