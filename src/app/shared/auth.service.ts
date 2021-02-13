import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private fireAuth: AngularFireAuth) { 
    this.fireAuth.authState.subscribe(user=>{
      this.user = user;
    });
  }

  async loginWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res=>{
        console.log('Login Successful');
        
      }).catch(err=>{
        console.log('Error while sign in', err);
      });

  }

  async loginWithGithub(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
      res=>{
        console.log('Login Successful');
        
      }).catch(err=>{
        console.log('Error while sign in', err);
      });

  }
}
