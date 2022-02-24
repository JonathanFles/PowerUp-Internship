
import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }//constructor

  
  componentDidMount(){
    fetch('https://api.dev.chimu.io/scraper/interns/articles/')
    .then(res => res.json())
    .then (json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }//componentDidMount
  

  render(){
    var {isLoaded, items} = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="App">
          <div className="headLine"><h1>Intern-News</h1></div>
          <ul>
            {items.data.articles.map(item => (
              <li key = {item.id}>
                <div className = "paragraph">
                  <div className ="title"><img className="icon" src = {item.source_image}/> {item.title}</div>
                  <div className ="description">{item.description}</div>
                  <div>{this.image}</div>
                  <div><a href = {item.url}>Read More...</a></div>
                  <div><img className="articleImage" src = {item.image}/></div>
                  <div>{item.publisher}</div>
                  <div>{item.created}</div>
                  <button onClick={(e) => e.target.style.color === 'red'?
                                          e.target.style.color = 'black' : e.target.style.color = 'red'}> like </button>
                </div>
                <br></br>
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}//class

export default App;
