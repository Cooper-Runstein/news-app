import styled from "@emotion/styled";
import { useState } from "react";
import { fetchFromNewsApi } from "./api/service";
import { AppHeaderContainer } from "./components/AppHeader/AppHeader.container";
import { AppRouter } from "./components/AppRouter";
import { AppContextWrapper } from "./state/app.context";

const St = {
  App: styled.div`
    width: 100%;
  `,
};

function App() {
  fetchFromNewsApi({ country: "US" });

  return (
    <St.App>
      <AppContextWrapper>
        <AppHeaderContainer />
        <AppRouter />
      </AppContextWrapper>
    </St.App>
  );
}

export default App;
