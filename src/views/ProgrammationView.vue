<template>
  <div class="h-px w-4/5 my-[10px] bg-gray-300 mx-10"></div>

  <img src="image/progra.webp" class="w-full h-auto mt-4" />

  <div
    class="bg-blue-500 mt-10 md:mx-[200px] pt-1"
    style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
  >
    <div class="grid grid-cols-3 justify-items-center mt-6">
      <p class="mt-2 text-white font-bebas text-[28px]">VENDREDI</p>
      <p class="mt-2 text-white font-bebas text-[28px]">SAMEDI</p>
      <p class="mt-2 text-white font-bebas text-[28px]">DIMANCHE</p>
    </div>

    <div class="grid grid-cols-3 ml-[14%]">
      <p class="text-sm font-medium text-[#FF9C7D] mt-3">ÉLECTRO / HIP-HOP</p>
    </div>

    <div class="grid grid-cols-3 justify-items-center mt-4 ml-[-8px]">
      <p class="text-sm font-medium leading-5 text-white">
        DJ SNAKE <br />
        VLADIMIR
      </p>
      <p class="text-sm font-medium leading-5 text-white">
        DAFT PUNK<br />
        BOB SINCLAR
      </p>
      <p class="text-sm font-medium leading-5 text-white">
        DAVID GUETTA<br />
        PETIT BISCUIT
      </p>
    </div>

    <div class="grid grid-cols-3 ml-[14%]">
      <p class="text-sm font-medium text-[#FF9C7D] mt-4">RAP</p>
    </div>

    <div class="grid grid-cols-3 justify-items-center mt-4 ml-[-14px]">
      <p class="text-sm font-medium leading-5 text-white">
        PNL<br />
        ZOLA<br />
        BOOBA<br />
        DAMSO<br />
        NINHO<br />
        PLK<br />
        SCH
      </p>
      <p class="text-sm font-medium leading-5 text-white ml-[-14px]">
        HAMZA<br />
        GAZO<br />
        KAARIS<br />
        PRIME<br />
        FREEZE<br />
        TIAKOLA<br />
        JOK’AIR
      </p>
      <p class="text-sm font-medium leading-5 text-white ml-[-14px]">
        NAPS<br />
        KOBA LAD<br />
        NIRO<br />
        DA UZI<br />
        ICO<br />
        LETO
      </p>
    </div>

    <div class="justify-items-center">
      <p class="font-bebas text-[32px] text-center pb-3 text-[#FF9C7D] mt-4">
        1.2.3 juillet
      </p>
    </div>
  </div>

  <div class="w-full flex flex-row justify-center justify-items-center mt-12">
    <RouterLink to="Concert" class=""
      ><div
        class="h-[41px] bg-[#ff9c7d] flex"
        style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
      >
        <p class="font-bebas ml-2 text-[28px] text-white">PLUS D’INFO</p>
        <img src="image/fleche.png" class="w-auto h-auto" /></div
    ></RouterLink>
  </div>

  <p
    class="
      px-4
      h-[84.91px]
      text-sm
      font-semibold
      text-center
      mt-12
      text-black
      md:mx-96 md:text-lg
    "
  >
    Pour ce qui est du choix des heures de passage des artistes pas de panique.
    Vous en serez plus dans quelques semaines. Nos équipes sont encore en
    réflexion pour vous proposer la meilleure expérience possible.
  </p>

  <img src="image/scene.webp" class="mt-8 w-full h-auto" />

  <div class="flex flex-row overflow-x-auto ...">
    <img src="image/image 10.webp" class="mt-12 ml-3 w-1/3 h-auto" />
    <img src="image/image 12.webp" class="mt-12 mx-3 w-1/3 h-auto" />
    <img src="image/image 13.webp" class="mt-12 mr-3 w-1/3 h-auto" />
  </div>

  <p
    class="
      px-4
      h-[84.91px]
      text-sm
      font-semibold
      text-center
      mt-10
      text-black
      md:mx-96 md:text-lg
    "
  >
    Nous avons voulu dépassez nos limites et vous surprendre avec 3 scènes. Vous
    aurez le choix d’aller écoutez vos artistes préféré, ainsi vous n’aurez
    aucun répit vous aurez toujours un artiste qui vous fera vibrer.
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
    <img src="image/image 5.webp" class="w-[80%] sm:w-[30%] my-[10px] h-auto" />

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
        <img src="image/facebook 1.webp" class="w-[32px] h-auto" />
        <img src="image/instagram 1.webp" class="w-[32px] h-auto" />
        <img src="image/twitter 1.webp" class="w-[32px] h-auto" />
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



        
