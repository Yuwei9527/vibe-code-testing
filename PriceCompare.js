import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PriceCompare() {
  const [keyword, setKeyword] = useState("");
  const sites = [
    {
      name: "蝦皮",
      url: (k) => `https://shopee.tw/search?keyword=${encodeURIComponent(k)}`,
    },
    {
      name: "露天",
      url: (k) => `https://ec.rcmart.com/s?keyword=${encodeURIComponent(k)}`,
    },
    {
      name: "momo",
      url: (k) => `https://m.momoshop.com.tw/mosearch/${encodeURIComponent(k)}`,
    },
    {
      name: "PChome",
      url: (k) => `https://ecshweb.pchome.com.tw/search/v3.3/?q=${encodeURIComponent(k)}`,
    },
  ];

  const handleSearch = () => {
    if (!keyword.trim()) return;
    sites.forEach((site) => {
      window.open(site.url(keyword), "_blank");
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
      <h1 className="text-3xl font-bold">比價搜尋小精靈 🔍</h1>
      <input
        className="border p-2 rounded-xl w-80 text-black"
        placeholder="輸入商品關鍵字..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="px-6 py-2 text-lg rounded-2xl" onClick={handleSearch}>
        搜尋全部網站
      </Button>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {sites.map((s) => (
          <div key={s.name} className="p-4 border rounded-xl shadow text-center">
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
