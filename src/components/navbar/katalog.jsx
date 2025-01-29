import { useState } from "react";

const LessThanIcon = (props) => (
  <svg
    className="rotate-90"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"currentColor"}
    fill={"none"}
    {...props}
  >
    <path
      d="M17 4L8.66943 10.0405C6.44352 11.6545 6.44353 12.3455 8.66943 13.9595L17 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Katalog({ setModal }) {
  const [olchaMarket, setOlchaMarket] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => {
          setModal(false);
        }}
        className="w-full h-full fixed top-0 left-0 z-10 bottom-0"
      ></div>
      <div className="bg-white container mx-auto px-13 flex z-20 fixed shadow-lg shadow-gray-800">
        <div className="flex flex-col gap-4">
          <div
            onClick={() => {
              setOlchaMarket(olchaMarket ? false : true);
            }}
            className="px-5 py-2 border border-red-500 w-max rounded-2xl flex flex-col gap-4"
          >
            <div className="flex gap-4 font-medium text-xl text-red-600 items-center">
              <img
                src="https://olcha.uz/eco-products/eco-products-logo.svg"
                alt="olcha market"
              />
              <p>Olcha Market</p>
              {olchaMarket ? (
                <LessThanIcon className="rotate-268" />
              ) : (
                <LessThanIcon className="rotate-90" />
              )}
            </div>
            {olchaMarket ? (
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://olcha.uz/eco-products/nasiya-logo.svg"
                    alt="olcha nasiya"
                  />
                  <p>Olcha Nasiya</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    src="https://olcha.uz/eco-products/pay-logo.svg"
                    alt="olcha ERP"
                  />
                  <p>Olcha ERP</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img
                    className="w-20"
                    src="https://olcha.uz/eco-products/b2b-logo.svg"
                    alt="olcha B2B"
                  />
                  <p>Olcha B2B</p>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`w-[300px] overflow-auto ${
              olchaMarket ? "h-[190px]" : " h-[350px]"
            }`}
          >
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Televizor, foto, video va audio
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Noutbook, printer, kompyuterlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Smartfon, telefon, gadjet, aksessuarlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Maishiy texnika
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Barchasi oshxona uchun
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Sport anjomlari
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Go'zallik va salomatlik
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Chet eldan tovarlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Avto jihozlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Barchasi ofis, uy va bog' uchun
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Bolalar uchun o'yinchoq va mahsulotlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Kiyim va poyabzallar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Kitoblar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Mebel
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Geymerlar uchun
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Barchasi tamirlash va qurilish uchun
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Kantselyariya tovarlari
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Elektrotransport
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Sovg'alar va suvenirlar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Aqilli uy
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Qulay takliflar
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Oziq-ovqat mahsulotlari
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Olcha qo'ldan
            </p>
            <p className="w-full py-2.5 px-4 hover:bg-gray-200 rounded-md text-gray-500">
              Avtomobillar
            </p>
          </div>
        </div>
        <div className="w-full h-[430px] overflow-auto py-6 px-10 flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">
                Yirik oshxona texnikasi
              </h4>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
              <p className="text-gray-500">Muzlatgichlar</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">
                Mikroto'lqinli pechlar
              </h4>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
              <p className="text-gray-500">Bosch</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">
                Mayda oshxona texnikasi
              </h4>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
              <p className="text-gray-500">Blenderlar</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">
                Qahva tayyorlash uchun
              </h4>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
              <p className="text-gray-500">elektr qahva maydalagichlar</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">Mini pechlar</h4>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
              <p className="text-gray-500">Laretto</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">Oshxona butyumlari</h4>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">Kastryulkalar va qozon</p>
              <p className="text-gray-500">podnoslar</p>
              <p className="text-gray-500">podnoslar</p>
              <p className="text-gray-500">podnoslar</p>
              <p className="text-gray-500">podnoslar</p>
              <p className="text-gray-500">podnoslar</p>
              <p className="text-gray-500">podnoslar</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">Oshxona anjomlari</h4>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
              <p className="text-gray-500">Saryog' idishlari</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-medium mb-3">Stoll toplami</h4>
              <p className="text-gray-500">Queen</p>
              <p className="text-gray-500">Luminarc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
