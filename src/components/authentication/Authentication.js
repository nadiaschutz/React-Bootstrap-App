import React, { Component } from 'react';
import './Authentication.css';
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

class Authentication extends Component {

    register() {
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise
        .then(user => {
            var message = "Welcome " + user.email;
            firebase.database().ref('users/'+user.uid).set({
                email: user.email
            });
            this.setState({message: message});
        })
        .catch(e => {
            var message = e.message;
            this.setState({message: message});
        });
    }

    login(event) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then(res => {
            var message = "You are logged in as " + res.email;
            this.setState({message: message});
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
        })
        .catch(e => {
            var message = e.message;
            this.setState({message: message});
        });
    }

    logout() {
        const promise = firebase.auth().signOut();

        promise
        .then(res => {
            var message = "You are logged out from your account";
            this.setState({message: message});
            var lout = document.getElementById('logout');
            lout.classList.add('hide');
        })
        .catch(e => {
            var message = e.message;
            this.setState({message: message});
        });
    }

    googleLogin() {
        console.log('Signing with google active');
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);

        promise
        .then( res => {
            var user = res.user;
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });
            var message = "You are logged in as " + user.email;
            this.setState({message: message});
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
        })
        .catch(e => {
            var message = e.message;
            this.setState({message: message});
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            uid: uuid.v1(),
        };

        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.logout = this.logout.bind(this);
     }

     render() {
       return (
            <div className="container">
                  <div className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input type="email" ref="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" ref="password" id="password" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                      </label>
                    </div>
                    <p>{this.state.message}</p>
                    <button onClick={this.login} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    <button onClick={this.register} className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    <button onClick={this.googleLogin} className="btn btn-lg btn-danger btn-block" type="submit">Google</button>
                    <button onClick={this.logout} id="logout" className="hide btn btn-lg btn-primary btn-block" type="submit">Logout</button>
                </div>
            </div>
       );
   }
}

export default Authentication;
