import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import fonction d'initialisation du SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Votre configuration de Firebase
const firebaseConfig = {
   apiKey: "AIzaSyBjXoPbbOwpuxaGaq9XyGIg898mak5Ch-A",
   authDomain: "mmi-1-firebase-vuejs-3-df151.firebaseapp.com",
   projectId: "mmi-1-firebase-vuejs-3-df151",
   storageBucket: "mmi-1-firebase-vuejs-3-df151.appspot.com",
   messagingSenderId: "926613728383",
   appId: "1:926613728383:web:b636ab724523bc2d12a34a"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
