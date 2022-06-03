<template>
    <div class="container">
        <div class="card-header text-2xl text-center font-bebas sm:mx-80">
            <h5>Liste des Artiste le vendredi !</h5>
        </div>   
        </div>

        <div class="w-full flex flex-row justify-center justify-items-center mt-8">
    <RouterLink to="jour" 
      ><div
        class="h-[41px] bg-[#ff9c7d] flex"
        style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
      >
        <p class="font-bebas ml-2 text-[30px] text-white">Ajouter un artiste le vendredi</p>
        <img src="src/assets/img/fleche.png" class="w-auto h-auto mx-3" /></div
    ></RouterLink>
  </div>
        
       

        <div class="card-body table-responsive mt-6">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">                             
                          <span class="ml-[42%] float-left">
                            <div class="input-group" >
                                <div class="input-group-prepend">
                                  <span class="input-group-text font-bebas">Rechercher</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />

                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                     <table class=" mt-10 w-full">
                        <tr>         
                            <td class="bg-blue-500 text-center font-bebas text-xl   sm:col-span-full">Artiste du vendredi</td>
                        </tr>
                    </table>
                    <tr>
                        <td>
                          <form 
                            v-for="Artiste in filterByName" :key="Artiste.id">
                            
                            <div class="input-group grid grid-cols-1 sm:grid-cols-2" >
                              
                              <input type="text" class=" text-black sm:text-3xl text-xl mt-10 font-bebas sm:ml-[290px]" v-model='Artiste.artiste' required />
                                <div class="flex flex-col sm:flex-row">
                                
                                <div class="justify-self-end flex flex-row justify-center w-full sm:mt-10 sm:ml-20">

                            <span  title="Modifier le participant" class="mr-2">
                              <RouterLink class="btn btn-light border-0 mt-3" :to="{ name:'ModifierArtiste', params: { id: Artiste.id }}" >
                                <i class="fa fa-edit fa-lg"></i>
                              </RouterLink>
                            </span>

                              <button class="btn btn-light border-0  mt-3" type="button" @click="deleteArtiste(Artiste)" title="Suppression">
                                <i class="fa fa-trash fa-lg"></i>
                              </button>
    

                              </div>
                              </div>
                               
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  

   

   
</template>
 <script>
    // Bibliothèque Firestore : import des fonctions
    import { 
        getFirestore, 
        collection, 
        doc, 
        getDocs, 
        addDoc, 
        updateDoc, 
        deleteDoc, 
        onSnapshot, 
        orderBy
        } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

        import {
        getStorage, // Obtenir le Cloud Storage
        ref, // Pour créer une référence à un fichier à uploader
        getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
        uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
        } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";


    export default {
    name:'ListeArtiste',
    data() {
        return {
        listeArtiste:[],  // Liste des Artiste - collection Artiste Firebase
        listeArtisteSynchro:[],  // Liste des Artiste - collection Artiste Firebase
        artiste:null, // Pour la création d'un nouveau Artiste
        filter:''
        }
    },
    computed:{
        // Tri des Artiste par artiste en ordre croissant
        orderByName:function(){
        // Parcours et tri des Artiste 2 à 2
        return this.listeArtiste.sort(function(a,b){
            // Si le artiste du Artiste est avant on retourne -1
            if(a.artiste < b.artiste) return -1;
            // Si le artiste du Artiste est après on retourne 1
            if(a.artiste > b.artiste) return 1;
            // Sinon ni avant ni après (homonyme) on retourne 0
            return 0;
        });
        },
        // Filtrage de la propriété calculée de tri
        filterByName:function(){
        // On effectue le fitrage seulement si le filtre est rnseigné
        if(this.filter.length > 0){
            // On récupère le filtre saisi en minuscule (on évite les majuscules)
            let filter = this.filter.toLowerCase();
            // Filtrage de la propriété calculée de tri
            return this.orderByName.filter(function(Artiste){
            // On ne renvoie que les Artiste dont le artiste contient 
            // la chaine de caractère du filtre
            return Artiste.artiste.toLowerCase().includes(filter);
            })
        }else{
            // Si le filtre n'est pas saisi
            // On renvoie l'intégralité de la liste triée
            return this.orderByName;
        }
        }
    },
    mounted(){ // Montage de la vue
        // Appel de la liste des Artiste synchronisée
        this.getArtiste();
    },
    methods: {
        async getArtiste(){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document Artiste
        const dbArtiste= collection(firestore, "concert-vendredi");
        // Liste des Artiste synchronisée
        const query = await onSnapshot(dbArtiste, (snapshot) =>{
        console.log('query', query);
            //  Récupération des résultats dans listeArtisteSynchro
            // On utilse map pour récupérer l'intégralité des données renvoyées
            // on identifie clairement le id du document
            // les rest parameters permet de préciser la récupération de toute la partie data
            this.listeArtiste = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            console.log('listeArtiste', this.listeArtiste);

            
           
        })      
        },
    
        async createArtiste(){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document Artiste
        const dbArtiste= collection(firestore, "concert-vendredi");
        // On passe en paramètre format json
        // Les champs à mettre à jour
        // Sauf le id qui est créé automatiquement    
        const docRef = await addDoc(dbArtiste,{
            artiste: this.artiste
        })
        console.log('document créé avec le id : ', docRef.id);
        },

        async updateArtiste(Artiste){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document Artiste
            // Reference du Artiste à modifier
            const docRef = doc(firestore, "concert-vendredi", Artiste.id);
            // On passe en paramètre format json
            // Les champs à mettre à jour
            await updateDoc(docRef, {
                artiste: Artiste.artiste
            }) 
        },

        async deleteArtiste(Artiste){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document Artiste
            // Reference du Artiste à supprimer
            const docRef = doc(firestore, "concert-vendredi", Artiste.id);
            // Suppression du Artiste référencé
            await deleteDoc(docRef);
            },

    }
    }
    </script>