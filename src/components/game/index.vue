<template>
    <div class="container">
    <template v-if="letrasErradas.length === chances">
      <h1>JOGO ENCERRADO, VOCÊ PERDEU!</h1>
      <button @click="newGame"> JOGAR NOVAMENTE</button>
      <div class="image">
        <div class="backdrop" :style="{height: frontImage}"></div>
        <img src="@/assets/hangman.png" />
      </div>
    </template>
    <template v-else>
      <h1>Jogo Forca</h1>
      <template v-if="winner">
        <button @click="newGame"> JOGAR NOVAMENTE</button>
        <h1 class="text-success font-weigth-bold"> VOCÊ GANHOU, PARABÉNS!!!</h1>
      </template>
      <div class="image">
        <div class="backdrop" :style="{height: frontImage}"></div>
        <img src="@/assets/hangman.png" />
      </div>
      <span class="chances"> Você tem {{ chances - letrasErradas.length }}</span>
      <palavras :gameWord=gameWord></palavras>
      <click :letters="letters"></click>
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
      letrasErradas:[],

      frontImage: '100%'
    }
  },
  methods: {
    newGame() {
      this.clean()
      this.selectedWord()
      this.makeGame()
      this.frontImage = '100%'
    },
    clean(){
      this.winner = false;
      this.gameWord= []
      this.palavrasClicacas = []
      this.letrasErradas = []
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

      this.word.forEach((element, index) => {
        if(element === letter) {
          this.$set(this.gameWord, index, letter)
          wrong = false
        }
      })

      if(wrong){
        this.letrasErradas.push(letter)

        switch(this.letrasErradas.length) {
          case 0:
            this.frontImage = '100%'
            break
          case 1:
            this.frontImage = '80%'
            break
          case 2:
            this.frontImage = '60%'
            break
          case 3:
            this.frontImage = '40%'
            break
          case 4:
            this.frontImage = '20%'
            break
          case 5:
            this.frontImage = '0%'
            break
        }
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
img {
  display: block;
}

.image {
  position: relative;
  display: flex;
  justify-content: center;
}

.backdrop {
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
}
</style>