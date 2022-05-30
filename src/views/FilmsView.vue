<template>
  <div class="container ">                 
      <div class="row"> 
          <div class="card bg-dark">
              <div class="card-header">
                  <strong>Liste des films disponibles</strong>
              </div>
              <div class="card-body table-responsive">
                  <table class="table text-light">
                      <thead>
                          <tr>
                              <td>Vidéos</td>
                              <td>Infos</td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td class="text-center">
                                  <h5 class="media-heading"><b>Avatar</b></h5>
                                  <img class="media-object imageSmall" 
                                  src="https://jsonvideo.jmfino.fr/imagesvideos/avatar.jpg" alt="Avatar">
                              </td>
                              <td>

                                  <div>
                                      <span class="libelle">Nationalités : </span>
                                      <span>Etats-Unis</span>
                                  </div>
                                  <div>
                                      <span class="libelle">Réalisateurs : </span>
                                      <span>James Cameron</span>
                                  </div>
                                  <div>
                                      <span class="libelle">Acteurs : </span>
                                      <span>Zoe Saldana, Sam Worthington, Sigourney Weaver </span>
                                  </div>
                                  <div>
                                      <span class="libelle">Catégories : </span>
                                      <span> Aventure Fantastique Science-Fiction</span>
                                  </div>
                                  <div>
                                      <div class="libelle">Synopsis : </div>
                                      <div>
                                          Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus p...
                                      </div>
                                  </div>

                              </td>
                          </tr>
                          <tr>
                              <td class="text-center">
                                  <h5 class="media-heading"><b>Blood Diamond</b></h5>
                                  <img class="imageSmall" 
                                  src="https://jsonvideo.jmfino.fr/imagesvideos/bloodDiamond.jpg" alt="Blood Diamond">
                              </td>
                              <td>

                                  <div>
                                      <span class="libelle">Nationalités : </span><span>Etats-Unis Allemagne</span>
                                  </div>
                                  <div>
                                      <span class="libelle">Réalisateurs : </span><span>Edward Zwinck</span>
                                  </div>
                                  <div>
                                      <span class="libelle">Acteurs : </span><span>Leonardo DiCaprio, Djimon Hounsou, Jennifer Connelly</span>
                                  </div>
                                  <div>
                                      <span class="libelle">Catégories : </span>
                                      <span class="texte">Aventure Thriller Drame </span>
                                  </div>
                                  <div>
                                      <div class="libelle">Synopsis : </div>
                                      <div>
                                          Alors qu'il purge une peine de prison pour ses trafics, Archer rencontre Solomon Vandy, un pêcheur d'origine Mende. Arra...
                                      </div>
                                  </div>

                              </td>
                          </tr>
                      </tbody>
                  </table>   
              </div>	
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name:'FilmsView',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
</style>


