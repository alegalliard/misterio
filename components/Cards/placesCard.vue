<template>
  <QuestionCard
    :question="question"
    :alternatives="allPlaces"
    :rightAnswer="currentGameSet().place"
    :componentId="currentKey"
  />
</template>

<script>
import axios from 'axios'
import QuestionCard from '@/components/Cards/Card.vue'
import { mapMutations, mapActions, mapGetters,mapState } from 'vuex'

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      allPlaces:[],
      currentPlace: null,
      question: 'Onde ocorreu o crime?',
      currentKey: 'place'
    }
  },
  mounted() {
    this.allPlaces = this.$store.state.placesList
  },
  methods: {
    ...mapMutations([
      'addPlaces'
    ]),
    ...mapState([
      'currentGameSet'
    ]),
    draw() {
      let total = this.places.length-1;
      this.currentPlace = Math.floor(Math.random() * total)
    }
  }
}
</script>
