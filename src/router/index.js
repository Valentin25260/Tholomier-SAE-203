import { createRouter, createWebHistory } from 'vue-router'
import AccueilView    from      '../views/AccueilView.vue'
import FilmsView      from      '../views/FilmsView.vue'
import SeriesView     from      '../views/SeriesView.vue'
import KidsView       from      '../views/KidsView.vue'
import MangasView     from      '../views/MangasView.vue'

import ListeVideo     from      '../views/video/ListeView.vue'
import CreateVideo     from      '../views/video/CreateView.vue'

import ListeParticipant     from      '../views/participant/ListeView.vue'
import CreateParticipant     from      '../views/participant/CreateView.vue'

import ListeCategorie     from      '../views/categorie/ListeView.vue'

import ListePays     from      '../views/pays/ListeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',          name: 'AccueilView',            component: AccueilView  },
    { path: '/films',     name: 'FilmsView',              component: FilmsView  },
    { path: '/series',    name: 'SeriesView',             component: SeriesView  },
    { path: '/kids',      name: 'KidsView',               component: KidsView  },
    { path: '/mangas',    name: 'MangasView',             component: MangasView  },

    { path: '/videos',    name: 'ListeVideo',             component: ListeVideo  },
    { path: '/createVideo',    name: 'CreateVideo',             component: CreateVideo  },

    { path: '/participants',    name: 'ListeParticipant',             component: ListeParticipant  },
    { path: '/createParticipant',    name: 'CreateParticipant',             component: CreateParticipant  },

    { path: '/categories',    name: 'ListeCategorie',             component: ListeCategorie  },

    { path: '/pays',    name: 'ListePays',             component: ListePays  },


  ]
})

export default router


