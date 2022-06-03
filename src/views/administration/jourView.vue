<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
    <img :src="imageData" class="mx-auto mt-28 md:w-full" />
    <form @submit.prevent="createArtiste">

      <h1 class="mb-10 font-barlow text-3xl font-bebas">Ajouter un artiste</h1>

      <div class="mb-10 flex w-full">
        <div class="bg-blue-500 p-3 text-2xl font-bebas text-white border-[1px] border-black rounded-l-xl">Nom</div>
        <input
          type="text"
          placeholder="Nom de l'artiste"
          class="w-full border-[1px] rounded-r-xl border-black bg-gray-100 p-2.5  text-2xl font-bebas"
          v-model="consert.artiste"
        />
      </div>

      <div class="flex flex-row justify-between gap-10">
        <button type="submit" class="w-full bg-blue-500 p-3 rounded-xl text-2xl font-bebas text-white border-[1px] border-black text-center">
           Ajouter</button>

        <button class="w-full bg-blue-500 p-3 text-2xl font-bebas rounded-xl text-white border-[1px] border-black text-center">
          <router-link to="/ListeConcert">Annuler</router-link>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      consert: {
        artiste: null,
            
      },
    };
  },
  mounted() {},
  methods: {
    
    async createArtiste() {
    const db = getFirestore();
    const docRef = addDoc(collection(db, "concert-vendredi"), this.consert);
      this.$router.push("/ListeConcerts");
    },
  },
};
</script>