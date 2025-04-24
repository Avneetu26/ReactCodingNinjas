import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {

  render() {

    const {cardDetails} = this.props;
    return <div className="anime-card">
      <img src={cardDetails.image} alt={cardDetails.name} />
        <p>{cardDetails.name}</p>
    </div>;
  }
}

export default AnimeCard;
