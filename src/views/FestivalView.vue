<template>
<div class="dark:bg-black">
  <div class="h-px w-4/5 my-[10px] bg-gray-300 mx-10"></div>

  <img src="../assets/img/festival.png" class="w-full mt-4 h-auto" />

  <div class="flex flex-row overflow-x-auto ...">
    <img src="../assets/img/image10.webp" class="mt-10 ml-3 w-1/3 h-auto" />
    <img src="../assets/img/image12.webp" class="mt-10 mx-3 w-1/3 h-auto" />
    <img src="../assets/img/image13.webp" class="mt-10 mr-3 w-1/3 h-auto" />
  </div>

  <p
    class="
      px-4
      h-[84.91px]
      text-sm
      font-semibold
      text-center
      mt-4
      text-black
      md:mx-96 md:text-lg
      dark:text-white

    "
  >
    Espi Festi est un festival qui se déroula à Espiguette plus précisément sur
    la plage au Grau-du-Roi. Nous allons accueillir jusqu’à 50 000 personnes
    maxium par jour pour un budjet de 6 millions d’euros.
  </p>

  <img src="../assets/img/carré.png" class="w-full mt-10 h-auto" />

  <p
    class="
      px-4
      h-[84.91px]
      text-sm
      font-semibold
      text-center
      mt-4
      text-black
      md:mx-96 md:text-lg
      dark:text-white
    "
  >
    Nous sommes le premier festival de France à l’organiser sur une plage avec
    la mer à coter. N’hésitez pas à venir en mailot de bain si vous souhaitez
    vous rafraichir.
  </p>

  <div class="flex flex-row overflow-x-auto ...">
    <img src="../assets/img/1.webp" class="mt-6 h-auto ml-3 w-auto" />
    <img src="../assets/img/2.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/3.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/4.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/5.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/6.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/7.webp" class="mt-6 ml-3 h-auto w-auto" />
    <img src="../assets/img/8.webp" class="mt-6 ml-3 h-auto w-auto" />
  </div>
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


