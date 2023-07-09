import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYunH_0nE5CQ0ZeVnHg395dE-Zr5KEdrY",
  authDomain: "todolist-19c9e.firebaseapp.com",
  projectId: "todolist-19c9e",
  storageBucket: "todolist-19c9e.appspot.com",
  messagingSenderId: "447339567090",
  appId: "1:447339567090:web:d2e3363a3df5f83aa8bd6b",
  databaseURL: 'https://todolist-19c9e-default-rtdb.europe-west1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)