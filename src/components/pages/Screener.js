import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import Styled from 'styled-components';

const Layout = Styled.div`
padding-top:100px;
`

export default function App() {
  return (
    <div className="App" style={{ background: "rgba(0, 0, 0, 0.85)" }}>
      <Layout>
      <TradingViewEmbed
        widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
        widgetConfig={{
          colorTheme: "light",
          width: "100%",
          height: "800",
          defaultColumn: "overview",
          screener_type: "crypto_mkt",
          displayCurrency: "USD",
          locale: "es"
        }}
      />
      </Layout>
    </div>
  );
}
