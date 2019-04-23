<template>
  <div class="card">
    <h2 class="subsub">{{question}}</h2>
    <ul>
      <li
        tabindex="0"
       v-for="(alternative) in alternatives"
        :key="alternative.Id"
        @click="selectAnswer(alternative.Id)"
        :class="answerClass(alternative.Id)"
      >
        {{alternative.Nome}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  props: {
    question: String,
    alternatives: Array,
    rightAnswer: Number,
    componentId: String
  },
  data() {
    return {
      selectedIndex: null
    }
  },
  methods: {
    ...mapActions([
      'userChoices'
    ]),
    ...mapGetters([
      'isGameOver'
    ]),
    selectAnswer(index) {
      this.selectedIndex = index
      let rightAnswer = (index === this.rightAnswer) ? 0 : this.checkIdIndex(this.componentId)
console.log( (index === this.rightAnswer))
      let answer = {
        card: (this.checkIdIndex(this.componentId) - 1),
        answer: rightAnswer
      }
      this.userChoices(answer);

    },
    checkIdIndex(id) {
      if(id === 'criminal') return 1
      else if(id === 'place') return 2
      else if(id === 'weapon') return 3
    },
    answerClass(index) {
      let answerClass = ''
      if(index === this.selectedIndex)
        answerClass = 'selected'
      return answerClass
    }
  }
}
</script>
