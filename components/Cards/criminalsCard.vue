<template>
  <QuestionCard
    :question="question"
    :alternatives="allCriminals"
    :rightAnswer="currentGameSet().criminal"
    :componentId="currentKey"
  />
</template>

<script>
import axios from 'axios'
import QuestionCard from '@/components/Cards/Card.vue'
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      allCriminals:[],
      currentCriminal: null,
      userCriminal: null,
      question: 'Quem são os suspeitos?',
      currentKey: 'criminal'
    }
  },
  mounted() {
    this.allCriminals = this.$store.state.criminalsList
    this.currentCriminal = this.$store.state.userChoices

  },
  methods: {
    ...mapMutations([
      'addCriminals'
    ]),
    ...mapState([
      'currentGameSet'
    ])
  }
}
</script>
