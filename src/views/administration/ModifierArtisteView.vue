<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
    <img :src="imageData" class="mx-auto mt-28 md:w-full" />
    <form @submit.prevent="updateArtiste">

      <h1 class="mb-10 font-barlow text-3xl font-bebas">Modifier l'artiste</h1>

      <div class="mb-10 flex w-full">
        <div class="bg-blue-500 p-3 text-2xl font-bebas text-white border-[1px] border-black rounded-l-xl">Nom</div>
        <input
          type="text"
          placeholder="Nom de l'artiste"
          class="w-full border-[1px] rounded-r-xl border-black bg-gray-100 p-2.5  text-2xl font-bebas"
          v-model="artiste.nom"
        />
      </div>

      <div class="mb-10 flex w-full">
        <div class="bg-blue-500 p-3 text-2xl font-bebas rounded-l-xl text-white border-[1px] border-black">Bio</div>
        <input
          type="text"
          placeholder="Biographie"
          class="w-full border-[1px] rounded-r-xl border-black bg-gray-100 p-2.5  text-2xl font-bebas"
          v-model="artiste.bio"
        />
      </div>
      
      <div class="bg-blue-500 p-3 text-2xl font-bebas text-white rounded-t-xl border-[1px] border-black text-center">chosir une image</div>
      <input
        type="file"
        placeholder="Nom de l'artiste"
        class="w-full border-[1px] border-black bg-gray-100 p-2.5  rounded-b-xl text-2xl font-bebas mb-10"
        name="file"
        id="file"
        ref="file"
        @change="previewImage"
      />
      <div class="flex flex-row justify-between gap-10">
        <button type="submit" class="w-full bg-blue-500 p-3 rounded-xl text-2xl font-bebas text-white border-[1px] border-black text-center">
           Modifier</button>

        <RouterLink to="/ListeArtistes" class="w-full bg-blue-500 p-3 text-2xl font-bebas rounded-xl text-white border-[1px] border-black text-center">
          Annuler
        </RouterLink>
      </div>
    </form>
  </main>
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
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.img = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

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
    async updateArtiste(){
            // Si l'image a été modifiée
            if(this.imgModifiee){
                // On supprime l'ancienne
                const storage = getStorage();
                // Référence du fichier
                let docRef = ref(storage, 'artiste/'+this.photoActuelle);
                // Suppression photo actuelle
                deleteObject(docRef);
                // création nouvelle photo
                // Référence de l'image à uploader
                docRef = ref(storage, 'artiste/'+this.artiste.image);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.artiste.image);                
                });                   
            }
            // Dans tous les cas on met à jour le participant dans Firestore
            const firestore = getFirestore();
            // Modification du participant à partir de son id
            await updateDoc(doc(firestore, "artiste", this.$route.params.id), this.artiste);
            // redirection sur la liste des participants
            this.$router.push('/ListeArtistes');       
        }
    },
};
</script>