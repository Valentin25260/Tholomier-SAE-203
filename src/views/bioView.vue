<template>
  <div class="h-px w-4/5 my-[10px] bg-gray-300 mx-10"></div>

  <img src="image/bio.png" class="w-full h-auto mt-4" />

  <div class="relative mb-[35px]">
    <div class="flex flex-col flex-wrap w-full items-center">
      <div class="border-2 border-black sm:w-[40%] mx-4 mt-4">
        <img src="image/PNL2.png" class="w-full h-auto" />
      </div>
    </div>

    <div
      class="
        w-full
        absolute
        bottom-[-20px]
        flex flex-row
        justify-center justify-items-center
        mt-4
      "
    >
      <div class="h-[41px] border-2 border-black w-[116px] bg-[#ff9c7d] flex">
        <p class="w-full font-bebas ml-2 text-center text-[28px] text-black">
          PNL
        </p>
      </div>
    </div>
  </div>

  <p
    class="
      w-auto
      px-4
      md:mx-40 md:text-lg
      text-sm
      font-semibold
      text-center text-black
    "
  >
    Précurseur de la tendance du rap planant et vaporeux, PNL est depuis 2015
    l’une des entités musicales les plus médiatisées en France. Révélé cette
    année-là avec leur premier album « Le Monde Chico », ils sortent ensuite
    leur deuxième opus « Dans la légende » en 2016 qui viendra confirmer leur
    succès. Avec leur dernier album « Deux Frères » sorti en 2019, le duo de
    Corbeil-Essonnes squatte toujours les sommets des classements des ventes en
    France à l'heure actuelle.
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