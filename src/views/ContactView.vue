<template>
<div class="dark:bg-black">
  <div class="h-px w-4/5 my-[10px] bg-gray-300 mx-10"></div>

  <img src="src/assets/img/contact.webp" class="w-full mt-4 h-auto" />

  <div class="mx-4">
    <p
      class="text-[#FF9C7D] font-medium text-left md:mx-[400px] text-base mt-14"
    >
      Votre nom
    </p>

    <div class="w-full flex flex-row justify-center mt-2">
      <input
        type="text"
        class="
          h-11
          w-full
          bg-white
          flex
          border-blue-500 border-solid border-2
          rounded-lg
          pl-2
          placeholder:text-[#FF9C7D] placeholder:text-base
          md:mx-[400px]
        "
        style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
        placeholder="Votre nom"
      />
    </div>

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

    <p
      class="text-[#FF9C7D] font-medium md:mx-[400px] text-left text-base mt-4"
    >
      Email
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
        placeholder="youuuoy@gmail.com"
      />
    </div>

    <p
      class="text-[#FF9C7D] font-medium md:mx-[400px] text-left text-base mt-4"
    >
      Numéro de téléphone
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
        placeholder="+33 7 67 57 47 37"
      />
    </div>

    <p
      class="text-[#FF9C7D] font-medium text-left md:mx-[400px] text-base mt-4"
    >
      Message
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
        placeholder="Message
      "
      />
    </div>

    <button
      style="box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25)"
      class="
        text-base*
        mt-8
        w-full
        md:w-[46%]
        font-bold
        text-center text-white
        bg-blue-500
        py-3
        rounded-xl
        md:mx-[400px]
      "
    >
      Envoyer
    </button>

    <p
      class="
        text-[#FF9C7D]
        font-medium
        text-left text-base
        mb-2
        md:mx-[400px]
        mt-12
      "
    >
      Lieu du festival
    </p>

    <iframe
      class="md:mx-[400px] md:w-[46%] md:h-[500px]"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16608.414760366217!2d4.123362128839924!3d43.50466895944071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1653995683484!5m2!1sfr!2sfr"
      height="300"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
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

