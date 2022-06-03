<template>

  <div class="dark:bg-black">

  <div class="h-px w-4/5 my-[10px] bg-gray-300 mx-10"></div>

  <img src="../assets/img/bio.png" class="w-full h-auto mt-4" />

  <div class="relative mb-[35px]">
    <div class="flex flex-col flex-wrap w-full items-center">
      <div class="border-2 border-black sm:w-[40%] mx-4 mt-4">
        <img :src="imageData" class="w-full h-auto" />
      </div>
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
      <div class="h-[41px] border-2 border-black w-[116px] bg-[#ff9c7d] flex">
        <p class="w-full font-bebas ml-2 text-center text-[28px] text-black">
          {{artiste.nom}}
        </p>
      </div>
    </div>
  </div>

  <p
    class="
      w-auto
      px-4
      md:mx-40 md:text-lg
      text-sm
      font-semibold
      text-center text-black
      dark:text-white
    "
  >
    {{ artiste.bio }}
  </p>
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
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {
  components: {},
  data() {
    return {
      imageData: null,
      artiste: {
        image: null,
        nom: null,
        bio: null,
        
      },     
            imgModifiee:false,      
            photoActuelle:null
    };
  },
  mounted() {
console.log("id artiste", this.$route.params.id);
        // Recherche participant concerné
        this.getArtiste(this.$route.params.id);
        },
  methods: {

        async getArtiste(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "artiste", id);
            // Référence du participant concerné
            this.refArtiste = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtiste.exists()){
                // Si oui on récupère ses données
                this.artiste = this.refArtiste.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.artiste.image;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'artiste/'+this.artiste.image);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },
  }
};
</script>