<template>
  <div class="relative">
    <img src="src/assets/img/accueil.png" class="w-full h-auto" />

    <svg
      class="absolute top-0 left-0 w-[58.2%] h-auto"
      width="691"
      height="428"
      viewBox="0 0 691 518"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0H435.172L691 518H0V0Z"
        fill="#FF9C7D"
        fill-opacity="0.80"
      ></path>
    </svg>

    <div class="absolute top-[15px] left-[2%] w-[62.2%]">
      <p class="w-[375px] h-15 text-[32px] text-left">
        <span
          class="
            w-[405px]
            h-24
            text-[32px]
            sm:text-[100px]
            text-left text-black
            font-bebas
          "
          >Espi </span
        ><span
          class="
            w-[405px]
            h-24
            text-[32px]
            sm:text-[100px]
            text-left text-blue-500
            font-bebas
          "
          >Festi</span
        >
      </p>

      <p
        class="
          w-[70%]
          h-[41px]
          text-[16px]
          sm:text-[40px]
          text-left text-white
          font-bebas
        "
      >
        Le premier festival de france sur une plage.
      </p>
    </div>

    <p
      class="
        font-bebas
        text-2xl
        mx-14
        text-center
        mt-10
        md:mx-96
        sm:text-[40px]
      "
    >
      <span class="text-blue-500">Retrouvez nous le</span>
      <span class="text-[#FF9C7D]"> 1,2 et 3 juillet</span>
      <span class="text-blue-500"> au festival Espi festi pour notre </span>
      <span class="text-[#FF9C7D]">première édition.</span>
    </p>

    <img src="src/assets/img/carré.png" class="w-full mt-12 h-auto" />

    <div class="flex flex-row flex-wrap mt-8 ml-1 w-full md:px-[300px]">
      <RouterLink to="Programmation" class="w-1/2 h-auto mt-[50px]">
        <img src="src/assets/img/image1.webp" class="w-full h-auto" />
      </RouterLink>

      <RouterLink to="Artiste" class="w-1/2 h-auto">
        <img src="src/assets/img/image2.webp" class="w-full h-auto" />
      </RouterLink>
      <RouterLink to="Festival" class="w-full h-auto">
        <img src="src/assets/img/image3.webp" class="w-full h-auto" />
      </RouterLink>
    </div>

    <img src="src/assets/img/carré.png" class="w-full mt-8 h-auto" />

    <p
      class="
        font-bebas
        text-2xl
        mx-14
        text-center
        md:mx-96
        sm:text-[40px]
        mt-10
      "
    >
      <span class="text-blue-500">Rassemblez-vous et passez</span>
      <span class="text-[#FF9C7D]"> 3 jours </span>
      <span class="text-blue-500"> de </span>
      <span class="text-[#FF9C7D]">pure plasir.</span>
    </p>

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
  </div>
</template>




