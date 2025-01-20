import React, { useState } from "react";

const CoinSelector = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  const coins = [
    { id: 1, name: "Bitcoin", color: "#F7931A", icon: <BitcoinIcon /> },
    { id: 2, name: "Tether (USDT)", color: "#50AF95", icon: <TetherIcon /> },
    { id: 3, name: "Doge", color: "#C2A633", icon: <DogeIcon /> },
    { id: 4, name: "Ethereum", color: "#343434", icon: <EthereumIcon /> },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-[28rem] rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Choose coin to top up</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-6 grid grid-cols-3 gap-4">
          {coins.map((coin) => (
            <div
              key={coin.id}
              onClick={() => setSelectedCoin(coin.id)}
              className={`relative flex flex-col items-center rounded-lg border p-4 cursor-pointer ${
                selectedCoin === coin.id ? "border-green-500 bg-green-100" : ""
              }`}
            >
              {coin.icon}
              <span className="text-sm font-medium text-gray-700">{coin.name}</span>
              {selectedCoin === coin.id && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-2 right-2"
                >
                  <path
                    d="M5.25003 10.5C5.24945 10.5 5.24887 10.5 5.2477 10.5C5.09195 10.4994 4.98314 10.4607 4.88258 10.3665L1.13258 6.86654C1.0469 6.78594 1 6.67257 1 6.54315C1 6.28906 1.21055 6.07852 1.46465 6.07852C1.59545 6.07852 1.70679 6.1372 1.7808 6.21074L5.24494 9.32795L11.7803 3.14035C11.8629 3.06157 11.9516 3 12.1148 3C12.353 3 12.5729 3.20929 12.5729 3.47484C12.5729 3.59935 12.5094 3.69929 12.4444 3.76439L5.61227 10.3636C5.51356 10.4618 5.40896 10.5 5.25003 10.5Z"
                    fill="#50AF95"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="mb-6">
          <label htmlFor="topup-amount" className="mb-2 block text-sm font-medium text-gray-700">
            Top up amount
          </label>
          <div className="flex items-center rounded-md border px-4 py-2">
            <input
              id="topup-amount"
              type="number"
              placeholder="0.00"
              className="flex-1 border-r border-[#E1E1E1] outline-none"
            />
            <span className="ml-2 text-sm text-gray-700">
              {coins.find((coin) => coin.id === selectedCoin)?.name || "Tether (USDT)"}
            </span>
          </div>
        </div>
        <button className="w-full rounded-md bg-green-500 py-2 font-medium text-white hover:bg-green-600">Continue</button>
      </div>
    </div>
  );
};

// Placeholder components for missing icons
const BitcoinIcon = () => (
  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." fill="#F7931A" />
  </svg>
);

const TetherIcon = () => (
  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="29.5" cy="29.5" r="29.5" fill="#50AF95" />
    <path
      d="M38 20H21V24H27V30.5H22V34H37V30.5H32V24H38V20ZM28 28.5V24H31V28.5H28Z"
      fill="white"
    />
  </svg>
);

const DogeIcon = () => (
  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="29.5" cy="29.5" r="29.5" fill="#C2A633" />
    <text x="18" y="35" fontFamily="Arial" fontSize="16" fill="white">
      DOGE
    </text>
  </svg>
);

const EthereumIcon = () => (
  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="29.5" cy="29.5" r="29.5" fill="#343434" />
    <path
      d="M30 20L35 30L30 26L25 30L30 20Z"
      fill="white"
    />
  </svg>
);

export default CoinSelector;
