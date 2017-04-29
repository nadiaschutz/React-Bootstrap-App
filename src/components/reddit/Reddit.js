import React, { Component } from 'react';
import axios from 'axios';

class Reddit extends Component {

    componentWillMount() {
        this.getReddit();
    }

    getReddit() {
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({posts});
        })
        .catch(e => {
            this.setState({message: e});
            console.log(e);
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            subr: 'space',
            message: ''
        };
        this.getReddit = this.getReddit.bind(this);
     }

     render() {
       return (
           <div>
               <div className="container">
                  <h1>{`/r/${this.state.subr}`}</h1>
                  <ul>
                      {this.state.posts.map(post =>
                      <li key={post.id}>{post.title}</li>
                      )}
                  </ul>
               </div>
           </div>
       );
   }
}

export default Reddit;
