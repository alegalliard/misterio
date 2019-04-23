<template>
  <section class="container">
    <div>
      <h1 class="title">Mistério</h1>
      <h2 class="subtitle">
        <span class="small"> Jacques Clouseau </span>
        <span class="role">(Inspetor)</span>
      </h2>

      <article class="paper text" v-if="!showGame">
        <h3 class="subsub">Um terrível assassinato reportado!</h3>

        <figure class="picture sean">
          <img src="~/assets/images/sean.jpg" alt="Sean" />
          <figcaption>
            Mr. Sean Bean
            <span class="red-text">(vítima)</span>
          </figcaption>
        </figure>

        <p>O empresário Sean Bean foi assassinado e o corpo dele foi deixado
        na frente da delegacia de polícia. O Inspetor Jacques Clouseau foi
        escolhido para investigar este caso. Após uma série de
        investigações, ele organizou uma lista com prováveis assassinos,
        os locais do crime e quais armas poderiam ter sido utilizadas.
        </p>
        <p>Você é a única testemunha e precisa ajudar o Inspetor
        Jacques a desvendar esse crime.
        </p>

        <button class="btn-typewritter" @click="initGame">Desvendar</button>
      </article>

      <div class="card-board" v-if="showGame">
        <jacquesBox v-if="jacques" />
        <criminalCard />
        <placesCard />
        <weaponsCard />

      </div>

      <footer v-if="isGameOver()">
        Eu sei a verdade!
        <button class="btn-typewritter"
          @click="endGame">
          Enviar teoria
        </button>
      </footer>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

import criminalCard from '~/components/Cards/criminalsCard.vue'
import weaponsCard from '~/components/Cards/weaponsCard.vue'
import placesCard from '~/components/Cards/placesCard.vue'
import jacquesBox from '~/components/box.vue'

export default {
  middleware: 'weapons',
  data() {
    return {
      showGame: false
    }
  },
  components: {
    criminalCard,
    weaponsCard,
    placesCard,
    jacquesBox
  },
  methods: {
    ...mapActions([
      'createGame',
      'showJacquesBox'
    ]),
    ...mapGetters([
      'isGameOver',
      'conclusion'
    ]),
    ...mapState([
      'jacques'
    ]),
    initGame() {
      this.showGame = !this.showGame
      this.createGame()
    },
    endGame() {
      alert(this.conclusion())
    }
  }
}
</script>
