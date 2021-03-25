import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  petCards = () => {
    return this.props.pets.map((pet, index) => (
      <div className="ui cards" key={index}>
        <Pet pet={pet} />
      </div>
    ));
  };
  render() {
    return this.petCards();
  }
}

export default PetBrowser;
