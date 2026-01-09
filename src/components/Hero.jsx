import HeroImage from "../assets/images/Auralume-All-Product.jpg";

export default function Hero() {
  const waUrl =
    "https://wa.me/6281234567890?text=Halo%20AURUM,%20saya%20tertarik%20dengan%20parfum%20Anda.";

  return (
    <section id="home" className="py-20 bg-stone">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center space-y-6">
        {/* Text */}
        <div>
          <div className="px-1 md:px-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
              Wewangian yang Menceritakan{" "}
              <span className="text-gold">Kisahmu</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Parfum premium dengan komposisi eksklusif, diracik untuk
              keanggunan yang abadi.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white font-semibold px-4 py-1.5 md:px-8 md:py-4 rounded-full hover:bg-opacity-90 transition shadow-lg"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Auralume Perfume Collection"
            className="rounded-3xl shadow-2xl max-h-[560px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
