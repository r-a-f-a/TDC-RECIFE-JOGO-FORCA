<template>
    <div class="container">
    <template v-if="palavrasErradas.length === chances">
      <h1>JOGO ENCERRADO, VOCÊ PERDEU!</h1>
      <button @click="newGame"> JOGAR NOVAMENTE</button>
    </template>
    <template v-else>
      <h1>Jogo Forca</h1>
      <template v-if="winner">
        <button @click="newGame"> JOGAR NOVAMENTE</button>
        <h1 class="text-success font-weigth-bold"> VOCÊ GANHOU, PARABÉNS!!!</h1>
      </template>
      <span class="chances"> Você tem {{ chances - palavrasErradas.length }}</span>
      <palavras :gameWord=gameWord></palavras>
      <click :letters="letters"></click>
      <!-- <div class="letras text-center">
          <span class="" v-for="(letter, index) in letters" :key="index">
            <button @click="addLetter(letter)">{{ letter }} </button>
          </span>
      </div> -->
    </template>
    </div>
    
</template>

<script>
import palavras from './palavras'
import click from './click'
export default {
  name: "Game",
  created(){
    this.newGame()
    let _this = this
    this.$on('EVENT', function (letter){
      console.log('ON ENT CLICK', letter)
      _this.addLetter(letter)
    })

    this.$events.off('addLetter')
    this.$events.on('addLetter', function (letter){
      console.log('ON ENT CLICK', letter)
      _this.addLetter(letter)
    })
  },
  components: {
    palavras,
    click
  },
  data() {
    return {
      winner: false,
      chances: 5,
      wordSelected: 1,
      letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z'],
      words: [
        'BAGACEIRA',
        'VUEJS',
        'INOVACAO'
      ],
      gameWord:[],
      palavrasClicacas:[],
      palavrasErradas:[]
    }
  },
  methods: {
    newGame() {
      this.clean()
      this.selectedWord()
      this.makeGame()
    },
    clean(){
      this.winner = false;
      this.gameWord= []
      this.palavrasClicacas = []
      this.palavrasErradas = []
    },
    selectedWord() {
      this.wordSelected = Math.floor(Math.random() * this.words.length)
    },
    terminou() {
      if(this.gameWord.indexOf('_') < 0){
        this.winner = true
      }
    },
    makeGame() {
     this.gameWord = '_'.repeat(this.word.length).split('')
    },
    addLetter(letter) {
      // this.$emit('EVENT', {'test': true})
      this.palavrasClicacas.push(letter)
      let wrong = true
      this.word.forEach((element,index) => {
        if(element === letter) {
          this.$set(this.gameWord,index,letter)
          wrong = false
        }
      });
      if(wrong){
        this.palavrasErradas.push(letter)
      }
      this.terminou()
    }
  },
  computed:{
    word () {
      return this.words[this.wordSelected].split('')
    }
  }
}
</script>

<style scoped>
.gameWord{
  border-bottom: 2px solid red;
  margin-right: 3px;
}
</style>