import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import bioView from '../views/bioView.vue'
import ConcertView from '../views/ConcertView.vue'
import conditionView from '../views/conditionView.vue'
import AdminView from '../views/AdminView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Artiste', name: 'ArtisteView', component: ArtisteView },
    { path: '/Festival', name: 'FestivalView', component: FestivalView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/bio', name: 'bioView', component: bioView },
    { path: '/Concert', name: 'ConcertView', component: ConcertView },
    { path: '/condition', name: 'conditionView', component: conditionView },
    { path: '/Admin', name: 'AdminView', component: AdminView },




  ]
})

export default router


