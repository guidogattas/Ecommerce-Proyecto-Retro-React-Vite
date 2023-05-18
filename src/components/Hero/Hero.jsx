const Hero = () => {
  return (
<section className="flex container mx-auto px-4 items-center bg-dark-sea-green ">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-midnight">Vintage Clothes</h1>
            <p className="max-w-2xl mb-6 font-light text-midnight lg:mb-8 md:text-lg lg:text-xl ">¡Bienvenidos a nuestra tienda en línea de remeras y buzos vintage! Sumérgete en un mundo de estilo y nostalgia mientras exploras nuestra seleccionada colección de prendas retro. Ya sea que estés buscando ese look único y auténtico de décadas pasadas o simplemente quieras añadir un toque vintage a tu armario, aquí encontrarás una amplia variedad de remeras y buzos que capturan la esencia de épocas pasadas.Navega por nuestras categorías y descubre una amplia gama de estampados retro.</p>

        </div>
        <div className="hidden lg:mt-0 align-middle lg:col-span-3 lg:flex">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2OgyxQARkhPHrrpHqbv2Gk4-dPVt84WLnJNbD-A17J-opM2kMpRF3bAu0U4lb7wO67r5GTwbeqFgoZjLZ8rcp1q3BZeleXAZg1uwhDCvlcwW_PP-vYJa2L2LJQSf-4pwlyZbalxiQQ6L-XHwH1PBJykjv4yyXd9Q2uLf5sNN_qnYnkLzUwoNDMT2MeA/s2532/C4JOYSTICK.jpg" alt="da"/>
        </div>                
    </div>
</section>
  )
}

export default Hero