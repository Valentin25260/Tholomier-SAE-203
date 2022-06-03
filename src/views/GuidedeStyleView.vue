<template>

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
        dark:text-white
        "
    >
        Pour ce qui est du choix des heures de passage des artistes pas de panique.
        Vous en serez plus dans quelques semaines. Nos équipes sont encore en
        réflexion pour vous proposer la meilleure expérience possible.
    </p>

    <div class="w-full flex flex-row justify-center justify-items-center mt-12">
    <RouterLink to="Concert" class=""
      ><div
        class="h-[41px] bg-[#ff9c7d] flex"
        style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
      >
        <p class="font-bebas ml-2 text-[28px] text-white">PLUS D’INFO</p>
        <img src="src/assets/img/fleche.png" class="w-auto h-auto" /></div
    ></RouterLink>
  </div>



*

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

    <img src="src/assets/img/carré.png" class="w-full mt-10 h-auto" />


    <p
      class="text-[#FF9C7D] font-medium text-left md:mx-[400px] text-base mt-4"
    >
      Votre prénom
    </p>

    <div class="w-full flex flex-row justify-center mt-2">
      <input
        type="text"
        class="
          md:mx-[400px]
          h-11
          w-full
          bg-white
          flex
          border-blue-500 border-solid border-2
          rounded-lg
          pl-2
          placeholder:text-[#FF9C7D] placeholder:text-base
        "
        style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
        placeholder="Votre prénom"
      />
    </div>


    <div class="flex flex-row flex-wrap">
      <div>
        <p class="text-2xl sm:text-4xl font-bebas text-blue-500 ml-3 mt-4">
          Scène : l’horloge
        </p>

        <p class="text-lg font-medium text-[#ff9c7d] ml-3 mt-3 sm:text-2xl">
          21h : PNL <br />22h : VLADIMIR <br />23h30 : DJ SNAKE
        </p>
      </div>

      <img
        src="../assets/img/image10.webp"
        class="w-[191px] h-auto sm:w-[250px] ml-2 mt-8"
      />
    </div>




    </footer>

</template>