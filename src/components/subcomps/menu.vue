<template>
  <ul>
    <li v-for="(item, index) in items" :key="`item-menu-${index}`" :id="`item-menu-${index}`">{{item.name}}
     <ul>
       <li v-for="(subItem, idx) in item.items" :key="`sub-menu-${idx}`" :id="`sub-menu-${idx}`">{{subItem.name}}
         <li></li>
       </ul> 

    </li>
  </ul>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      items:[{
        name: 'Rafa',
        items: [
          {name: 'Diogo'},
          {name: 'João'}
        ]
      },
      {
        name: 'wesley',
        items: [
          {name: 'Diogo'},
          {name: 'João'}
        ]
      }]
    }
  },
}
</script>

<style>

</style>