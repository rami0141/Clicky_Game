import React from "react";
import Nav from "../Nav";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";

export default class Game extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Container>
        </Container>
        <Footer />
      </div>
    );
  }
}
