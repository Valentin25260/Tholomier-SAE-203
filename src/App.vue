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
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/Programmation" class="text-black"
                >Programmation</RouterLink
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/Artiste" class="text-black">Artistes</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/Festival" class="text-black"
                >Festival</RouterLink
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/Contact" class="text-black">Contact</RouterLink>
            </div>
          </li>

          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/Concert" class="text-black">Concert</RouterLink>
            </div>
          </li>

          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/bio" class="text-black">bio</RouterLink>
            </div>
          </li>

          <li class="nav-item">
            <div class="nav-link font-bebas ml-4 text-[20px]">
              <RouterLink to="/connexion" class="text-black">Administration</RouterLink>
            </div>
          </li>
        </ul>

       
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<style>
</style>


