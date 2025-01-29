import Button from "./button";

function Header() {
  return (
    <div className="w-full bg-red-600">
      <div className="container mx-auto px-12 flex justify-between">
        <div className="flex items-center py-3 gap-13">
          <div className="flex gap-4">
            <Button>0% Muddatli to'lov</Button>
            <button className="py-1 px-2 border font-medium text-white transition duration-[1s] cursor-pointer border-white rounded-md hover:bg-white hover:text-red-600">
              Chegirmalar
            </button>
            <Button>Yutuqli o'yinlar</Button>
          </div>
          <p className="text-lg text-white cursor-pointer hover:opacity-80 transition duration-1000">
            sayt xaritasi
          </p>
        </div>
        <div className="flex gap-7">
          <div className="flex gap-8 items-center py-3">
            <h4 className="text-xl font-bold text-white hover:opacity-80 cursor-pointer">
              +998 (71) 202 20 21
            </h4>
            <button className="py-2 px-3 rounded-xl border border-white font-mono text-white hover:bg-white hover:text-red-600 cursor-pointer transition duration-1000">
              olchada soting
            </button>
          </div>
          <div className="flex gap-3 items-center px-7 border-x-2 border-x-white/40">
            <p className="cursor-pointer text-white opacity-80 hover:opacity-100 hover:font-medium">
              Ўзб
            </p>
            <p className="cursor-pointer text-white opacity-80 hover:opacity-100 hover:font-medium">
              O'z
            </p>
            <p className="cursor-pointer text-white opacity-80 hover:opacity-100 hover:font-medium">
              Рус
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
