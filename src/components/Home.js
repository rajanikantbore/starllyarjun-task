import React from 'react';
import axios from 'axios';
                 

export default class Home extends React.Component {
  state = {
    updateMe: [],
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  clickMe(person){
    console.log(person);
    this.setState({updateMe:(person.userId,  
                              person.id,
                              person.title,
                              person.body)
  });
 
  // this.setState({updateMe:person[{}]})
}

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Titles</h2>
        <h2>{this.state.updateMe}</h2>

        {
          this.state.persons.map((person,index) =>(
// eslint-disable-next-line
              <p key={person.id}>
                <a onClick={this.clickMe.bind(this,person)}>
                  {person.title}
                </a>
              </p>
          )
        )
        }
    </div>
    )
  }
}