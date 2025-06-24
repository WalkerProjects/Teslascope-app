import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("news");
  const [cash, setCash] = useState(10000);
  const [shares, setShares] = useState(0);
  const price = 250;

  const buyShares = () => {
    const num = Math.floor(cash / price);
    if (num > 0) {
      setCash(cash - num * price);
      setShares(shares + num);
    }
  };

  const sellShares = () => {
    if (shares > 0) {
      setCash(cash + shares * price);
      setShares(0);
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: 600, margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>TeslaScope</h1>
      <p>Investor dashboard and simulator</p>

      <input
        placeholder="Search Tesla topics"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginTop: "1rem" }}
      />

      <div style={{ marginTop: "1rem" }}>
        {["news", "sentiment", "alerts", "timeline", "simulator"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "0.5rem",
              marginRight: "0.5rem",
              background: tab === t ? "#000" : "#ccc",
              color: tab === t ? "#fff" : "#000",
              borderRadius: "5px",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "news" && (
        <ul style={{ marginTop: "1rem" }}>
          <li>🚗 Elon Musk confirms new Robotaxi timeline</li>
          <li>🔋 Giga Berlin hits new battery milestone</li>
          <li>📉 Analysts cautious about Q3 earnings</li>
        </ul>
      )}

      {tab === "sentiment" && (
        <div style={{ marginTop: "1rem" }}>
          <p>📈 Public sentiment: Bullish</p>
          <p>💬 Top sources: Twitter, Reddit</p>
          <p>📊 Last 24h change: +12%</p>
        </div>
      )}

      {tab === "alerts" && (
        <ul style={{ marginTop: "1rem" }}>
          <li>🛑 Breaking: Autopilot lawsuit filed</li>
          <li>⚠️ Reddit sentiment spike</li>
        </ul>
      )}

      {tab === "timeline" && (
        <div style={{ marginTop: "1rem" }}>
          <p>📅 Sentiment vs Stock Chart Placeholder</p>
        </div>
      )}

      {tab === "simulator" && (
        <div style={{ marginTop: "1rem" }}>
          <p>💰 Cash: ${cash.toFixed(2)}</p>
          <p>📦 Shares: {shares}</p>
          <p>📈 TSLA Price: ${price}</p>
          <button onClick={buyShares} style={{ marginRight: "1rem" }}>
            Buy
          </button>
          <button onClick={sellShares}>Sell</button>
          <p style={{ marginTop: "1rem" }}>
            📊 Portfolio: ${(cash + shares * price).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
