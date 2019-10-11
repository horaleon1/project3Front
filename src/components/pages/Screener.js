import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import Styled from 'styled-components';

const Layout = Styled.div`
padding-top:100px;
margin-left:10%;
`

export default function App() {
  return (
    <div className="App" >
      <Layout>
      <TradingViewEmbed
        widgetType={widgetType.SCREENER_CRYPTOCURRENCY}
        widgetConfig={{
          colorTheme: "light",
          width: "95%",
          height: "900",
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
