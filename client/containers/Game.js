import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Card from './Card'
import getDeckId from '../actions/get-deck-id'
import drawNewCard from '../actions/draw-card'


class Game extends Component {
  componentDidMount() {
    this.props.getDeckId()
  }

// loadDeck() {
//     axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then(response => {
//           console.log(response.data)
//               this.setState({
//           deck: response.data.deck_id,
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

 // drawUrl() {
 //   const {deck} = this.state
 //   return ("http://deckofcardsapi.com/api/deck/"+deck+"/draw/?count=2")
 // }

// drawCard() {
//     const {deck} = this.state
//     const url = ("http://deckofcardsapi.com/api/deck/"+deck+"/draw/?count=2")
//     axios.get(url)
//     .then(response => {
//     this.setState({
//       activeCard: response.data
//     });
//
// })
// .catch(error => {
//   console.log(error);
// });
//
// }

// renderCard() {
//   const {activeCard} = this.state
//   return <Card
//    value = {activeCard.value}
//    img = {activeCard.image}
//    />
// }




  render() {
    const { deck, currentCard } = this.props
    return (
      <div>
        <h1>{deck.deck_id}</h1>
        <button onClick={() => this.props.drawNewCard(deck.deck_id)}>Draw!</button>
        <p> {currentCard.remaining}</p>
        <img src={currentCard.image} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    currentCard: state.currentCard,
  }
}

Game.propTypes = {
  deck: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { getDeckId, drawNewCard} )(Game)
