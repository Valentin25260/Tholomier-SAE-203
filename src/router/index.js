import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import bioView from '../views/bioView.vue'
import ConcertView from '../views/ConcertView.vue'
import conditionView from '../views/conditionView.vue'
import AdminView from '../views/administration/AdminView.vue'
import ListeArtistesView from '../views/administration/ListeArtistesView.vue'
import ListeConcertsView from '../views/administration/ListeConcertsView.vue'
import CreateView from '../views/administration/CreateView.vue'
import ModifierArtisteView from '../views/administration/ModifierArtisteView.vue'
import jourView from '../views/administration/jourView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Artiste', name: 'ArtisteView', component: ArtisteView },
    { path: '/Festival', name: 'FestivalView', component: FestivalView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/bio/:id', name: 'bioView', component: bioView },
    { path: '/Concert', name: 'ConcertView', component: ConcertView },
    { path: '/condition', name: 'conditionView', component: conditionView },
    { path: '/ListeArtistes', name: 'ListeArtistesView', component: ListeArtistesView },
    { path: '/Admin', name: 'AdminView', component: AdminView },
    { path: '/ListeConcerts', name: 'ListeConcertsView', component: ListeConcertsView },
    { path: '/ModifierArtiste/:id', name: 'ModifierArtiste', component: ModifierArtisteView },
    { path: '/Create', name: 'CreateView', component: CreateView },
    { path: '/jour', name: 'jourView', component: jourView },




  ]
})

export default router


