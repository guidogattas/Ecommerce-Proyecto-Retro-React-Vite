const Hero = () => {
  return (
    <section className="container mx-auto flex justify-between bg-dark-sea-green px-4">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 gap-8 lg:grid-cols-12 lg:py-16 xl:gap-0">
        <div className="lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-midnight md:text-5xl xl:text-6xl">
            Vintage Clothes
          </h1>
          <p className="mb-6 max-w-2xl font-light text-midnight md:text-lg lg:mb-8 lg:text-xl">
            ¡Bienvenidos a nuestra tienda en línea de remeras y buzos retro!
            Sumérgete en un mundo de estilo y nostalgia mientras exploras nuestra seleccionada colección de prendas de tu infancia. Ya sea que estés buscando ese look único y auténtico de décadas pasadas o simplemente quieras añadir un toque retro a tu armario, aquí encontrarás una amplia variedad de remeras y buzos que capturan la esencia de épocas pasadas. Navega por nuestras categorías y descubre una amplia gama de estampados retro.
          </p>
        </div>
        <div className="hidden lg:col-span-3 lg:flex max-h-[480px]">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2OgyxQARkhPHrrpHqbv2Gk4-dPVt84WLnJNbD-A17J-opM2kMpRF3bAu0U4lb7wO67r5GTwbeqFgoZjLZ8rcp1q3BZeleXAZg1uwhDCvlcwW_PP-vYJa2L2LJQSf-4pwlyZbalxiQQ6L-XHwH1PBJykjv4yyXd9Q2uLf5sNN_qnYnkLzUwoNDMT2MeA/s2532/C4JOYSTICK.jpg"
            alt="persona jugando en una consola retro"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
