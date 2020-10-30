<template>
 <div>
   <h1> Hello World</h1>
    <compMenu></compMenu>
 </div>
</template>

<script>
import compMenu from './subcomps/menu'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    compMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
