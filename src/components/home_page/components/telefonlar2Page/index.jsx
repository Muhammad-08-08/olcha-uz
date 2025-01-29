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
    return <p className="text-center text-xl">Ma'lumot yuklanmoqda...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      {tel && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            {tel.name_oz || tel.name_uz}
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
              <img
                src={tel.main_image}
                alt={tel.name_oz || tel.name_uz}
                className="w-full h-auto transform transition-all duration-500 hover:scale-105"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="mb-4">
                <p className="text-2xl font-semibold text-gray-700">
                  <span className="mr-2">Narxi:</span>
                  <span className="text-green-600">{tel.total_price} so'm</span>
                </p>
                {tel.discount_price > 0 && (
                  <p className="text-red-500">
                    <strong>Chegirma:</strong> {tel.discount_price} so'm
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Asosiy ma'lumotlar:
                </h3>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-600">Olcham:</strong>{" "}
                    {tel.size || "Noma'lum"}
                  </li>
                  <li>
                    <strong className="text-gray-600">Og'irlik:</strong>{" "}
                    {tel.weight || "Noma'lum"} gram
                  </li>
                  <li>
                    <strong className="text-gray-600">Brend:</strong>{" "}
                    {tel.brand?.name || "Noma'lum"}
                  </li>
                  <li>
                    <strong className="text-gray-600">Kafolat:</strong>{" "}
                    {tel.warranty_month || "Noma'lum"} oy
                  </li>
                  <li>
                    <strong className="text-gray-600">Ommaviy savdolar:</strong>{" "}
                    {tel.popular ? "Ha" : "Yo'q"}
                  </li>
                  <li>
                    <strong className="text-gray-600">Stock:</strong>{" "}
                    {tel.in_stock ? "Bor" : "Yo'q"}
                  </li>
                  <li>
                    <strong className="text-gray-600">To'lov rejasida:</strong>{" "}
                    {tel.has_installment ? "Mavjud" : "Yo'q"}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {tel.description_oz && (
            <div className="mt-8">
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
