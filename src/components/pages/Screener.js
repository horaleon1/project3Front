import React, { useEffect } from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

export default function App() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  });
  return (
    <div className="scrennerContainer">
      <TradingViewEmbed
        widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
        widgetConfig={{
          colorTheme: "light",
          width: "90%",
          height: "600",
          defaultColumn: "overview",
          screener_type: "crypto_mkt",
          displayCurrency: "USD",
          locale: "es"
        }}
      />
    </div>
  );
}
