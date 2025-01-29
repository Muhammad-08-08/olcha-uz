import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Telefonlar2Page() {
  const [tel, setTel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { alias } = useParams();

  useEffect(() => {
    axios
      .get(`https://mobile.olcha.uz/api/v2/products/view?alias=${alias}`)
      .then((response) => {
        setTel(response.data.data.product);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ma'lumotni yuklashda xatolik yuz berdi.");
        setLoading(false);
        console.error("Xatolik:", error);
      });
  }, [alias]);

  if (loading) {
    return (
      <p className="text-center text-xl text-gray-600">
        Ma'lumot yuklanmoqda...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 font-medium">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      {tel && (
        <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            {tel.name_oz || tel.name_uz}
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <img
                src={tel.main_image}
                alt={tel.name_oz || tel.name_uz}
                className="w-full h-auto rounded-2xl transform transition-all duration-500 hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="mb-4 border-b pb-4">
                <p className="text-2xl font-semibold text-gray-700">
                  <span className="mr-2">Narxi:</span>
                  <span className="text-green-600">{tel.total_price} so'm</span>
                </p>
                {tel.discount_price > 0 && (
                  <p className="text-red-500 font-medium">
                    <strong>Chegirma:</strong> {tel.discount_price} so'm
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Asosiy ma'lumotlar:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between border-b border-gray-300 pb-2 border-dashed">
                    <strong>Olcham:</strong> {tel.size || "Noma'lum"}
                  </li>
                  <li className="flex justify-between border-b border-gray-300 pb-2 border-dashed">
                    <strong>Og'irlik:</strong> {tel.weight || "Noma'lum"} gram
                  </li>
                  <li className="flex justify-between border-b border-gray-300 pb-2 border-dashed">
                    <strong>Brend:</strong> {tel.brand?.name || "Noma'lum"}
                  </li>
                  <li className="flex justify-between border-b border-gray-300 pb-2 border-dashed">
                    <strong>Kafolat:</strong> {tel.warranty_month || "Noma'lum"}{" "}
                    oy
                  </li>
                  <li className="flex justify-between border-b border-gray-300 pb-2 border-dashed">
                    <strong>Stock:</strong> {tel.in_stock ? "Bor" : "Yo'q"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {tel.description_oz && (
            <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Tavsifi:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {tel.description_oz}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Telefonlar2Page;
