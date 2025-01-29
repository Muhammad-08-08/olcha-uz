import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Olcha.uz</h3>
            <p className="text-gray-400 mb-4">
              Olcha.uz — O'zbekistonning eng katta onlayn savdo do'koni. Biz
              turli tovarlarni, jumladan, telefonlar, kompyuterlar,
              kiyim-kechaklar va boshqalarni sotamiz.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Foydali havolalar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Aloqa
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Maxfiylik siyosati
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Foydalanish shartlari
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Aloqa</h3>
            <p className="text-gray-400 mb-2">Tel: +998 90 123 45 67</p>
            <p className="text-gray-400 mb-2">Email: support@olcha.uz</p>
            <p className="text-gray-400">Manzil: Tashkent, Uzbekistan</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-center py-4 mt-8">
        <p className="text-sm text-gray-300">
          © 2025 Olcha.uz | Barcha huquqlar himoyalangan
        </p>
      </div>
    </footer>
  );
}

export default Footer;
