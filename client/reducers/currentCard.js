import { DRAW_CARD } from '../actions/draw-card'


export default function updateCurrentCard(state = [], { type, payload }) {
  switch (type) {
    case DRAW_CARD :
    const { cards } = payload
      return cards
      .map((card) => Object.assign( card , { remaining: payload.remaining, points: points(card), deck_id: payload.deck_id }))


    default :
      return state
  }
}

function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function points(card) {
  if (card.value == "AC") {
    return 11
  } else if (isInt(card.value)) {
    return parseInt(card.value)
  } else { return 10 }
}
