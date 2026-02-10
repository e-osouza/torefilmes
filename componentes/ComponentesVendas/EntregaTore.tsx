'use client'

const EntregaTore = () => {
  return (
    <>
      <a href="#form">

        <section className="relative w-full overflow-hidden">

          {/* MOBILE */}
          <img
            src="/10-TORE-BANNER-LP-MOBILE.png"
            alt="Banner Toré"
            className="block md:hidden w-full h-auto object-contain"
            draggable={false}
          />

          {/* DESKTOP */}
          <div
            className="
          hidden md:block
          w-full
          h-[70vh] lg:h-screen
          bg-no-repeat bg-center bg-contain
          px-6 py-16
          "
            style={{ backgroundImage: "url('/10-TORE-BANNER-LP.png')" }}
          />
        </section>
      </a>
    </>
  )
}

export default EntregaTore
