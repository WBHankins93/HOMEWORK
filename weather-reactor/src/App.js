import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import NewsMain from './NewsMain'

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: '',
      newsData: []
    }
  }

  getNewsData = async () => {

    try{

      const news = await fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7fdbe0ba183a4b5694259a7ec56149c4');
      // The response from api's is in JSON, notice the end of the crimes.json
      // so we have to parse that into a regulat object so we can use it.
      const newsJson = await news.json();
      return newsJson

    } catch(err){
      return err
    }
  }

  componentDidMount() {

    this.getNewsData().then((newsData) => {
      console.log(newsData, ' this is data');

      this.setState({newsData: newsData})
    }).catch((err) => {
      console.log(err)
    })
  }

  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        {this.state.logged ? <NewsMain username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
