<template>
  <img src="src/assets/img/artiste.webp" class="w-full h-auto" />

  <div class="w-full flex flex-row justify-center justify-items-center mt-4">
    <div class="h-[25px] bg-[#ff9c7d] flex border-black border-solid border-2">
      <p class="text-sm font-medium text-center text-black px-4">RAPPEUR</p>
    </div>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-4 ml-2">
    <tr v-for="artiste in listeArtisteSynchro" :key="artiste.id">
    <RouterLink class="btn btn-light border-0 mt-3" :to="{ name:'bioView', params: { id: artiste.id }}" >
                                
                              
      <div class="relative mb-[35px]">
        <div
          class="
            border-2 border-black
            flex flex-wrap
            justify-center
            w-[90%]
            mt-4
            mx-2
          "
        >
          <img
            :src="artiste.image"
            class="w-full border-2 border-black h-auto"
          />
        </div>

        <div
          class="
            w-full
            absolute
            bottom-[-20px]
            flex flex-row
            justify-center justify-items-center
            mt-4
          "
        >
          <div class="h-[30px] border-2 border-black w-[40%] bg-[#ff9c7d] flex">
            <p class="w-full font-bebas text-center text-[20px] text-black">
              {{ artiste.nom }}
            </p>
          </div>
        </div>
      </div>
      </RouterLink>
    </tr>

    
  </div>
  <footer
    class="
      w-full
      bg-[#FF9C7D]
      grid grid-cols-2
      justify-items-center
      items-center
      mt-8
    "
  >
    <img src="../assets/img/image5.webp" class="w-[80%] sm:w-[30%] my-[10px] h-auto" />

    <div
      class="
        w-full
        flex flex-col flex-wrap
        justify-center
        items-center
        my-[15px]
      "
    >
      <div class="w-full flex flex-row flex-wrap justify-evenly">
        <img src="../assets/img/facebook.webp" class="w-[32px] h-auto" />
        <img src="../assets/img/instagram.webp" class="w-[32px] h-auto" />
        <img src="../assets/img/twitter.webp" class="w-[32px] h-auto" />
      </div>
      <div class="h-px w-4/5 my-[10px] bg-gray-300"></div>
      <div class="w-full flex flex-rom justify-evenly">
        <RouterLink to="/Contact" class="text-sm leading-7 font-medium"
          >Contact</RouterLink
        >

        <RouterLink to="/condition" class="text-sm leading-7 font-medium"
          >Mention légale</RouterLink
        >
      </div>
    </div>
  </footer>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { 
    getStorage,             // Obtenir le Cloud Storage
    ref,                    // Pour créer une référence à un fichier à uploader
    getDownloadURL, 
    uploadString,        // Permet de récupérer l'adress complète d'un fichier du Storage
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: null,
        password: null,
      },
      message: null, // Message de connexion
      listeArtiste: [], // Liste des pays - collection pays Firebase
      nom: null, // Pour la création d'un nouveau pays
      listeArtisteSynchro: [], // Liste des pays synchronisée - collection pays de Firebase
    };
  },

  mounted() {
  

    // Appel de la liste des pays
    // this.getArtiste();

    // Appel de la liste des pays synchronisée
    this.getArtisteSynchro();
  },
  

methods: {

  //  async getArtiste() {
  //     // Obtenir Firestore
  //     const firestore = getFirestore();
  //     // Base de données (collection)  document pays
  //     const dbArtiste = collection(firestore, "artiste");
  //     // Obtenir tous les documents de la collection pays
  //     // await pour attendre l'obtention des résultats
  //     const query = await getDocs(dbArtiste);
  //     query.forEach((doc) => {
  //       let artiste = {
  //         id: doc.id,
  //         nom: doc.data().nom,
  //         image: doc.data().image,

  //       };
  //       this.listeArtiste.push(artiste);
  //     });
  //   },
  async getArtisteSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtiste = collection(firestore, "artiste");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        this.listeArtisteSynchro.forEach(function(artiste){
                    // Obtenir le Cloud Storage
                    const storage = getStorage();
                    // Récupération de l'image par son nom de fichier
                    const spaceRef = ref(storage, 'artiste/'+artiste.image);
                    // Récupération de l'url complète de l'image
                    getDownloadURL(spaceRef)
                    .then((url) => {
                        // On remplace le nom du fichier
                        // Par l'url complète de la photo
                        artiste.image = url;
                    })
                    .catch((error) =>{
                        console.log('erreur downloadUrl', error);
                    })
                });
      });
    },
  },

}


</script>


