import { Component } from "react";
import "../App.css";

export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imgLink: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }
  async componentDidMount() {
    const memes = await fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => result.data.memes);
    this.setState({ allMemeImgs: memes });
  }

  changeEvent(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.imgLink);
  }

  changeImage(event) {
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    this.setState({ imgLink: this.state.allMemeImgs[randomNum].url });
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type={"text"}
            placeholder="Top Text"
            name="topText"
            value={this.state.topText}
            onChange={(event) => this.changeEvent(event)}
          />
          <input
            type={"text"}
            placeholder="Bottom Text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={(event) => this.changeEvent(event)}
          />
          <button onClick={(event) => this.changeImage(event)}>
            Change Image
          </button>
        </form>

        <div className="meme">
          <img src={this.state.imgLink} alt="img"></img>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
