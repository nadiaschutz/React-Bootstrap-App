import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
    apiKey: "AIzaSyBx4XhPX8JZSayuxQZEZf4LoNTQhqVICQQ",
    authDomain: "react-bootstrap-d66f1.firebaseapp.com",
    databaseURL: "https://react-bootstrap-d66f1.firebaseio.com",
    projectId: "react-bootstrap-d66f1",
    storageBucket: "react-bootstrap-d66f1.appspot.com",
    messagingSenderId: "109759868639"
};
  firebase.initializeApp(config);

class Fbdb extends Component {

    insertData(){
        firebase.database().ref('testDB'+this.state.uid).set({
            textString: 'My Test String Inserted into Firebase'
        });
        console.log('Firebase is working!');
    }

    constructor(props) {
        super(props);
        this.state = {uid: uuid.v1()};
     }
     render() {
       return (
           <div>
               <button onSubmit={this.insertData()}>Test DB</button>
           </div>
       );
   }
}

export default Fbdb;
