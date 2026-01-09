export default function About() {
  return (
    <section id="tentang" className="py-20 bg-stone">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-charcoal mb-4 text-center">
            Tentang Auralumè
          </h2>

          <div className="w-20 h-[2px] bg-gold mx-auto mb-8 rounded-full" />

          <div className="text-base md:text-lg text-gray-700 space-y-6 text-justify">
            <p>
              Didirikan pada 2020, AURUM lahir dari keyakinan bahwa setiap orang
              layak memiliki wewangian yang unik — bukan sekadar aroma, tapi
              cerminan kepribadian dan kenangan.
            </p>
            <p>
              Kami bekerja sama dengan perfumer berpengalaman dari Prancis dan
              Indonesia, menggunakan bahan alami berkualitas tinggi dan proses
              aging minimal 4 minggu untuk kedalaman aroma yang sempurna.
            </p>
            <p>
              <span className="font-semibold text-gold">
                "Parfum bukan tentang menutupi diri — tapi tentang memperkuat
                kehadiran."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
