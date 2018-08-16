import React from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import ClickItem from "../ClickItem";
import data from "../../data.json";

export default class Game extends React.Component {
  state = {
    data,
    score: 0,
    topScore: 0
  }


// ------------------------------------------------
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Container>
          <ClickItem />
        </Container>
        <Footer />
      </div>
    );
  }
}
