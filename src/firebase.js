import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDiHBl4Cz4IZnbNKkfEtz2o-o4lW81d4b8',
  authDomain: 'first-flight-with-friend-33f8c.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-33f8c.firebaseio.com',
  storageBucket: 'first-flight-with-friend-33f8c.appspot.com',
  messagingSenderId: '975040414134'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

