
export const state = () => ({
  weaponList: [],
  criminalsList: [],
  placesList: [],
  wrongAlts: [],
  currentGameSet: null,
  jacques: false,
  userSet: ['criminal', 'place', 'weapon'],
  endGame: false
})

const reducer = (prev, next) => prev + next

export const mutations = {
  addWeapons(state, payload) {
      state.weaponList = payload
  },
  addPlaces(state, payload) {
      state.placesList = payload
  },
  addCriminals(state, payload) {
      state.criminalsList = payload
  },
  newGame(state, payload) {
    state.currentGameSet = payload
  },
  wrong(state, payload) {
    state.wrongAlts.push(payload)
  },
  userGame(state, payload) {
    state.userSet[payload.card] = payload.answer
    state.endGame = typeof state.userSet.reduce(reducer) === 'number'
  },
  toggleJacquesBox(state, payload){
    state.jaques = payload
  }
}

export const actions = {
  createGame({commit, state}) {
    let gameSet = {
      weapon: Math.floor(Math.random() * state.weaponList.length) + 1,
      criminal: Math.floor(Math.random() * state.criminalsList.length) + 1,
      place: Math.floor(Math.random() * state.placesList.length) + 1
    }
    commit('newGame', gameSet)
  },
  userChoices({commit, state}, choices) {
    commit('userGame', choices)
  },
  showJacquesBox({commit, state}) {
    commit('toggleJacquesBox', !state.jacques)
  }
}


export const getters = {
  game(state) {
    return state.currentGameSet
  },
  isGameOver(state) {
    return state.endGame
  },
  conclusion(state) {
    let answer = ''
    let errors = state.userSet.filter( val => val )
    let right = []

    if(errors.length === 0) {
      answer = 'PARABÈNS'
    } else if(errors.length === 3) {
      answer = `Sua teoria não está nada boa. Precisamos pensar em outra melhor.`
    } else {
      if(errors.indexOf(1) < 0 )
        right.push(`o criminoso`)
      if(errors.indexOf(2) < 0 )
        right.push(`o local`)
      if(errors.indexOf(3) < 0 )
        right.push(`a arma`)

      answer = `Hum... Você só acertou ${right.join(' e ')}, mas está indo bem! Tente novamente.`
    }

    return answer;

  }
}
