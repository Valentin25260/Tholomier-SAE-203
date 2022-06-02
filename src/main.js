import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
   apiKey: "AIzaSyDjrZ-h3pzs1a_F27prbb9k8l6PefK7LtI",
   authDomain: "sae-203-e8944.firebaseapp.com",
   projectId: "sae-203-e8944",
   storageBucket: "sae-203-e8944.appspot.com",
   messagingSenderId: "214622293484",
   appId: "1:214622293484:web:5c9e18b095561f9c6484c9",
   measurementId: "G-4T191CXQ04"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
