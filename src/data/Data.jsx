const productos = [
    {
      title: "Buzo Dunder Mifflin",
      category: "Buzos",
      img: "/public/assets/images/buzo-canguro-dunder-mifflin-negro1-21c37e0d5339a0283b16296602784978-640-0.png",
      price: 15000,
      stock: 1,
      description: "Buzo negro con el logo de Dunder Mifflin. Ideal para fanáticos de The Office."
    },
    {
      title: "Remera Bazooka",
      category: "Remeras",
      img: "/public/assets/images/bazooka_shirt.jpg",
      price: 6800,
      stock: 10,
      description: "Remera estampada con diseño de Bazooka. Perfecta para los amantes de los cómics."
    },
    {
      title: "Buzo Marvel",
      category: "Buzos",
      img: "/public/assets/images/buzo-marvel-logo-collage-blanco1-a401b56543acf2221016583493947681-640-0.png",
      price: 16000,
      stock: 10,
      description: "Buzo blanco con el logo de Marvel. Imprescindible para los seguidores del universo Marvel."
    },
    {
      title: "Buzo Tortugas Ninja",
      category: "Buzos",
      img: "/public/assets/images/buzo-tortugas-adolescentes-negro1-a063894efcc4b7c68e16582486612923-640-0.png",
      price: 14500,
      stock: 10,
      description: "Buzo negro con estampado de las Tortugas Ninja. Genial para los nostálgicos de los 90."
    },
    {
      title: "Buzo X-Men",
      category: "Buzos",
      img: "/public/assets/images/buzo-xmen-97-negro1-fc2b5a7a5ed62a652e16470077967635-640-0.png",
      price: 18000,
      stock: 10,
      description: "Buzo negro con diseño de los X-Men. Ideal para los fanáticos de los superhéroes mutantes."
    },
    {
      title: "Buzo Mario - Peaches",
      category: "Buzos",
      img: "/public/assets/images/buzo_bb1-d85a6e266a580f66de16825359064036-640-0.webp",
      price: 13500,
      stock: 10,
      description: "Buzo con estampado de Mario y Peach. Perfecto para los jugadores de videojuegos retro."
    },
    {
      title: "Buzo Friends",
      category: "Buzos",
      img: "/public/assets/images/buzo_ca1-635776287399d99edd16278462998415-640-0.webp",
      price: 14500,
      stock: 10,
      description: "Buzo con el logotipo de Friends. Ideal para los fanáticos de la famosa serie de televisión."
    },
    {
      title: "Buzo Tortugas Ninja - Leonardo",
      category: "Buzos",
      img: "/public/assets/images/buzo_leo1-8da0bd0b3010bc7a3216468535157106-640-0.webp",
      price: 14000,
      stock: 10,
      description: "Buzo con estampado de Leonardo de las Tortugas Ninja. Perfecto para los amantes de las TMNT."
    },
    {
      title: "Buzo Simpsons",
      category: "Buzos",
      img: "/public/assets/images/buzo_simpsons_the-san1-cdd3d1e7ed41670dbf16252427101175-640-0.webp",
      price: 15300,
      stock: 10,
      description: "Buzo con estampado de Los Simpsons. Genial para los fanáticos de la familia amarilla."
    },
    {
      title: "Buzo Star Wars",
      category: "Buzos",
      img: "/public/assets/images/buzo_sta1-8afb8d3dd380617eac16595354093763-640-0.webp",
      price: 12500,
      stock: 10,
      description: "Buzo con diseño de Star Wars. Imprescindible para los seguidores de la saga galáctica."
    },
    {
      title: "Remera Alf",
      category: "Remeras",
      img: "/public/assets/images/alf_shirt.jpg",
      price: 7000,
      stock: 10,
      description: "Remera estampada con el personaje Alf. Perfecta para los nostálgicos de los 80."
    },
    {
      title: "Remera Back To The Future",
      category: "Remeras",
      img: "/public/assets/images/back_to_the_future.jpg",
      price: 6900,
      stock: 10,
      description: "Remera con diseño de Volver al Futuro. Ideal para los fanáticos de la icónica película."
    },
    {
      title: "Remera Batman",
      category: "Remeras",
      img: "/public/assets/images/batman_shirt.jpg",
      price: 7200,
      stock: 10,
      description: "Remera estampada con el logotipo de Batman. Perfecta para los amantes del Caballero Oscuro."
    },
    {
      title: "Remera Casettes",
      category: "Remeras",
      img: "/public/assets/images/casettes.jpg",
      price: 6700,
      stock: 10,
      description: "Remera con estampado de cassettes retro. Genial para los fanáticos de la música vintage."
    },
    {
      title: "Remera Commodore 64",
      category: "Remeras",
      img: "/public/assets/images/commodore.jpg",
      price: 7000,
      stock: 10,
      description: "Remera con diseño del clásico Commodore 64. Ideal para los entusiastas de la informática retro."
    },
    {
      title: "Remera Italpark",
      category: "Remeras",
      img: "/public/assets/images/italpark.jpg",
      price: 7200,
      stock: 10,
      description: "Remera con estampado del parque de diversiones Italpark. Perfecta para los nostálgicos de los 90."
    },
    {
      title: "Remera Meteoro",
      category: "Remeras",
      img: "/public/assets/images/meteoro.jpg",
      price: 7000,
      stock: 10,
      description: "Remera estampada con el emblemático auto Meteoro. Genial para los amantes de las carreras."
    },
    {
      title: "Remera Pepsi",
      category: "Remeras",
      img: "/public/assets/images/pepsi_shirt.jpg",
      price: 6900,
      stock: 10,
      description: "Remera con diseño de Pepsi. Ideal para los fanáticos de la famosa bebida gaseosa."
    },
    {
      title: "Remera Polaroid",
      category: "Remeras",
      img: "/public/assets/images/polaroid.jpg",
      price: 7100,
      stock: 10,
      description: "Remera estampada con la icónica cámara Polaroid. Perfecta para los amantes de la fotografía."
    },
    {
      title: "Remera Transformers",
      category: "Remeras",
      img: "/public/assets/images/transformers.jpg",
      price: 7000,
      stock: 10,
      description: "Remera con estampado de los Transformers. Genial para los seguidores de los robots alienígenas."
    },
    {
      title: "Remera Tortugas Ninjas",
      category: "Remeras",
      img: "/public/assets/images/turtles.jpg",
      price: 7200,
      stock: 10,
      description: "Remera con diseño de las Tortugas Ninja. Ideal para los fanáticos de las TMNT."
    },
  ];
  
  export default productos;