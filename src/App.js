import React, { Component } from "react";
import "./App.css";

import Swipeable from "react-swipy";
import Card from "./components/Card";
import Fade from 'react-reveal/Fade'; 

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

const dislike = {
  backgroundColor: "red",
  padding: "16px 24px",
  cursor: "pointer",
  border: "none",
  borderRadius: 3,
  color: "#ffffff"
};

const like = {
  backgroundColor: "green",
  padding: "16px 24px",
  cursor: "pointer",
  border: "none",
  borderRadius: 3,
  color: "#ffffff"
};

class App extends Component {
  state = {
    cards: [
      "Lorem ipsum dolor sit amet",
      "Donec tempor risus non velit laoreet, semper feugiat turpis dignissim.",
      "Nunc viverra augue in dictum accumsan.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Maecenas feugiat tincidunt lacinia. ",
      "Nullam feugiat quam ligula, sit amet faucibus ante aliquet sit amet."
    ]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
  render() {
    const { cards } = this.state;
    return (
      <React.Fragment>
        <div style={appStyles}>
          <div style={wrapperStyles}>
            {cards.length > 0 && (
              <div style={wrapperStyles}>
                <Swipeable
                  buttons={({ right, left }) => (
                    <div style={actionsStyles}>
                      <button style={dislike} onClick={left}>
                        Dislike
                      </button>
                      <button style={like} onClick={right}>
                        Like
                      </button>
                    </div>
                  )}
                  onAfterSwipe={this.remove}
                >
                  <Card><Fade top>{cards[0]}</Fade></Card>
                </Swipeable>
                {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
              </div>
            )}
            {cards.length <= 1 && (
              <Card zIndex={-2}>No more text to review</Card>
            )}
          </div>
        </div>
        <ul>
          <li>{cards.length > 1 && <p>{cards[1]}</p>}</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
