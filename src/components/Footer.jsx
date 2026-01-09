export default function Footer() {
  const waUrl = "https://wa.me/6281234567890";
  const shopeeUrl = "https://shopee.co.id/aurum_perfume";
  const tiktokUrl = "https://tiktok.com/@aurum_perfume";
  const igUrl = "https://instagram.com/aurum_perfume";

  return (
    <footer id="kontak" className="bg-charcoal text-stone py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold text-gold">
              Auralumè
            </h3>
            <p className="mt-2 text-sm opacity-80">
              Parfum Premium • Made in Indonesia
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { name: "WhatsApp", url: waUrl, icon: "📱" },
              { name: "Shopee", url: shopeeUrl, icon: "🛒" },
              { name: "TikTok", url: tiktokUrl, icon: "🎵" },
              { name: "Instagram", url: igUrl, icon: "📸" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gold transition"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm opacity-70">
          &copy; {new Date().getFullYear()} Auralumè Parfum. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
