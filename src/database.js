import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDa-cI-JzzEOVoKR7-a-S3VyfqnRU0Py3Q",
    authDomain: "timeline-9f20b.firebaseapp.com",
    databaseURL: "https://timeline-9f20b.firebaseio.com",
    storageBucket: "timeline-9f20b.appspot.com",
    messagingSenderId: "166158007897"
  };

firebase.initializeApp(config)
const database = firebase.database()
export const storage = firebase.storage()

export default database