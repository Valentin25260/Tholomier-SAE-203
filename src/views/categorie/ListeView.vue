<template>
    <div class="container">
        <div class="card-header">
            <h5>Liste des catégories</h5>
        </div>    
        <hr/>
        <form>
          <h6>Nouvelle catégorie</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Libellé</span>
            </div>
            <input type="text" class="form-control" v-model='libelle' required />
            <button class="btn btn-light" type="button" @click='createCat()' title="Création">
              <i class="fa fa-save fa-lg"></i>
            </button>
          </div>
        </form>

        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="float-left">Liste des Catégories actuelles</div>                          
                          <span class="float-right">
                            <div class="input-group" >
                                <div class="input-group-prepend">
                                  <span class="input-group-text" >Filtrage</span>
                                </div>
                                <input type="text" class="form-control" v-model="filter" />
                                <button class="btn btn-light" type="button"  title="Filtrage">
                                  <i class="fa fa-search fa-lg"></i>
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form 
                            v-for="cat in filterByName" :key="cat.id">
                            <div class="input-group" >
                              <div class="input-group-prepend">
                                <span class="input-group-text">Libelle</span>
                              </div>
                              <input type="text" class="form-control" v-model='cat.libelle' required />
                              <button class="btn btn-light" type="button"  @click="updateCat(cat)" title="Modification">
                                <i class="fa fa-save fa-lg"></i>
                              </button>
                              <button class="btn btn-light" type="button" @click="deleteCat(cat)" title="Suppression">
                                <i class="fa fa-trash fa-lg"></i>
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


export default {
  name:'ListeView',
  data() {
    return {
      listeCat:[],  // Liste des categories - collection categorie Firebase
      libelle:null, // Pour la création d'une nouvelle catégorie
      filter:''
    }
  },
  computed:{
    // Tri des categorie par libelle en ordre croissant
    orderByName:function(){
      // Parcours et tri des categories 2 à 2
      return this.listeCat.sort(function(a,b){
        // Si le libelle de la categorie est avant on retourne -1
        if(a.libelle < b.libelle) return -1;
        // Si le nom de la categorie est après on retourne 1
        if(a.libelle > b.libelle) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est renseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(cat){
          // On ne renvoie que les categories dont le libelle contient 
          // la chaine de caractère du filtre
          return cat.libelle.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },
  mounted(){ // Montage de la vue
    // Appel de la liste des categories synchronisée
    this.getCat();
  },
  methods: {
    async getCat(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document categorie
      const dbCat= collection(firestore, "categorie");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbCat, (snapshot) =>{
      console.log('query', query);
        //  Récupération des résultats dans listeCat
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeCat = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        console.log('listecat', this.listeCat);
      })      
    },

    async createCat(){
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document categorie
      const dbCat = collection(firestore, "categorie");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement    
      const docRef = await addDoc(dbCat,{
          libelle: this.libelle
      })
      console.log('document créé avec le id : ', docRef.id);
    },

    async updateCat(cat){
        // Obtenir Firestore
        const firestore = getFirestore();
        // Base de données (collection)  document categorie
        // Reference de la categorie à modifier
        const docRef = doc(firestore, "categorie", cat.id);
        // On passe en paramètre format json
        // Les champs à mettre à jour
        await updateDoc(docRef, {
            libelle: cat.libelle
        }) 
      },

      async deleteCat(cat){
          // Obtenir Firestore
          const firestore = getFirestore();
          // Base de données (collection)  document categorie
          // Reference de la categorie à supprimer
          const docRef = doc(firestore, "categorie", cat.id);
          // Suppression categorie référencé
          await deleteDoc(docRef);
        },

  }
}
</script>

<style scoped>
</style>


