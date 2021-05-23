import './style.css';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      FullName: 'Syrine Mabrouk',
      Profession: 'full-stack developer web ',
      Bio: 'I m a full-stack developer, specialising in web development i was create many of custom web applications.im obbesed with design',
      Img: 'https://institutcoop.hec.ca/es/wp-content/uploads/sites/3/2020/02/Deafult-Profile-Pitcher.png',
      date: 0,
      Show: false
     
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(prevState) {
    this.setState({
      date: this.state.date + 1
    });
  }


  isToggle = () => {
    this.setState(state => ({
      Show: !this.state.Show
    }))
  }

  render() {
    const Show = this.state.Show;
    return (
      <>
        <h1 style={{ textAlign: 'center' }}> Welcome to my profile </h1>
        <div className="container">
          <div className="avatar-flip">
            <img src={Show ? './profileimage.jpg' : this.state.Img} alt='mypic' height="150" width="150" />
            <img src={Show ? './profileimage.jpg' : this.state.Img} alt='mypic' height="150" width="150" />
          </div>
          <button classNAme='btn' onClick={this.isToggle}>Show my pic</button>
          <h2>{this.state.FullName} </h2>
          <h4>{this.state.Profession} </h4>
          <p> {this.state.Bio}</p>
        
        </div>
       
        <p style={{ textAlign: 'center' }} > The last component was mounted since {this.state.date} seconds</p>
      </>
    )
  }
}

export default App
