import BlueIce from "../assets/images/Auralume-Blue-Ice.jpg";
import Classy from "../assets/images/Auralume-Classy.jpg";
import Lumine from "../assets/images/Auralume-Lumine.jpg";
import Ocean from "../assets/images/Auralume-Ocean.jpg";
import Ursa from "../assets/images/Auralume-Ursa.jpg";

const products = [
  {
    id: 1,
    name: "Auralumè Blue Ice",
    description: "Floral oriental, lembut dan elegan.",
    notes: "Rose · Amber · Vanilla",
    image: BlueIce,
    price: "Rp 75.000",
  },
  {
    id: 2,
    name: "Auralumè Classy",
    description: "Woody spicy yang hangat dan maskulin.",
    notes: "Black Pepper · Cedar · Musk",
    image: Classy,
    price: "Rp 75.000",
  },
  {
    id: 3,
    name: "Auralumè Lumine",
    description: "Citrus aquatic yang segar dan bersih.",
    notes: "Lemon · Sea Salt · Driftwood",
    image: Ocean,
    price: "Rp 75.000",
  },
  {
    id: 4,
    name: "Auralumè Ocean",
    description: "Dark floral dengan kesan misterius.",
    notes: "Iris · Oud · Tonka Bean",
    image: Lumine,
    price: "Rp 75.000",
  },
  {
    id: 5,
    name: "Auralumè Ursa",
    description: "Clean musky untuk daily luxury.",
    notes: "White Musk · Aldehyde · Linen",
    image: Ursa,
    price: "Rp 75.000",
  },
];

export default function ProductSection() {
  return (
    <section id="produk" className="py-12 px-4 bg-stone">
      <div className="container mx-auto ">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-serif font-bold text-charcoal mb-4">
            Our Collection
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg">
            A curated selection of signature fragrances, crafted for every
            moment.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 gap-y-6">
          {products.map((product) => (
            <div key={product.id} className="text-center group">
              {/* Image */}
              <div className="overflow-hidden">
                <h3 className=" text-xl font-semibold text-charcoal mb-5">
                  {product.name}
                </h3>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-500 md:hover:scale-105 rounded-3xl md:rounded-none"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                {/* Price + Button */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-bold italic text-charcoal">
                    {product.price}
                  </h3>

                  <a
                    href={product.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 text-xs font-semibold rounded-full
                 border border-black text-black  hover:cursor-pointer transition hover:bg-gold "
                  >
                    Buy
                  </a>
                </div>

                <p className="text-sm md:text-xs text-gray-500 leading-relaxed md:mb-2">
                  {product.description}
                </p>

                <span className="text-xs md:text-[10px] uppercase tracking-widest text-gray-400">
                  {product.notes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
