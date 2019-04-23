<template>
    <QuestionCard
      :question="question"
      :alternatives="allWeapons"
      :rightAnswer="currentGameSet().weapon"
      :componentId="currentKey"
    />
</template>

<script>
import QuestionCard from '@/components/Cards/Card.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    QuestionCard
  },
  data() {
    return {
      allWeapons: [],
      currentWeapon: null,
      question: 'Qual é a arma?',
      currentKey: 'weapon'
    }
  },
  mounted() {
    this.allWeapons = this.$store.state.weaponList
  },
  methods: {
    ...mapMutations([
      'addWeapons'
    ]),
    ...mapState([
      'currentGameSet'
    ])
  }
}
</script>
