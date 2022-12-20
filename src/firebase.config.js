import { getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCSEvJFXO0I4J1MV6Vo7qWqbLRI5ATjt20",
    authDomain: "restaurantapp-ba83a.firebaseapp.com",
    databaseURL: "https://restaurantapp-ba83a-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ba83a",
    storageBucket: "restaurantapp-ba83a.appspot.com",
    messagingSenderId: "900707785539",
    appId: "1:900707785539:web:893a5341f0b127ff6cedf6"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)       //db
  const storage = getStorage(app)

  export { app, firestore, storage}