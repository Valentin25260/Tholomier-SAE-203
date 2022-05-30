<script >
import IconLogo from "./components/icons/IconLogo.vue";
export default {
  components: { IconLogo },
};
</script>

<template>
  <div class="">
    <nav class="navbar navbar-expand-lg mt-2 navbar-dark">
      <div class="navbar-brand">
        <RouterLink to="/"
          ><icon-logo /><span class="sr-only"> Vidéo</span></RouterLink
        >
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/films">Programmation</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/series">Artistes</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/kids">Festival</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/mangas">Contact</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/mangas"></RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MonCompte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mes vidéos</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Administration
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <div class="dropdown-item">
                <RouterLink to="/videos">Vidéos</RouterLink>
              </div>

              <div class="dropdown-item">
                <RouterLink to="/participants">Participants</RouterLink>
              </div>

              <div class="dropdown-item">
                <RouterLink to="/categories">Catégories</RouterLink>
              </div>

              <div class="dropdown-item">
                <RouterLink to="/pays">Pays</RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>


