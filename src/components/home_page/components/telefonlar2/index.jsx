import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../card";

function Telefonlar2() {
  const [telefonlar, setTelefonlar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/products?is_sale=true")
      .then((response) => {
        setTelefonlar(response.data.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Ma'lumotni yuklashda xatolik yuz berdi.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Ma'lumot yuklanmoqda...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto px-13">
      <h1 className="text-3xl font-bold mb-5">Chegirmadagi Telefonlar</h1>
      <div className="flex flex-wrap justify-between gap-6">
        {telefonlar.map((telefon) => (
          <Link to={`/telefonPage2/${telefon.alias}`} key={telefon.id}>
            <Card
              img_url={telefon.main_image}
              img_name={telefon.name_oz}
              nomi={telefon.name_oz}
              narxi={telefon.total_price}
              bolib_tolash={telefon.total_price / 12}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Telefonlar2;
