import React from "react";
import { Article, Country, View } from "./app.types";

type AppContextState = {
  article: Article | null;
  country: Country;
  view: View;
};
type AppContextMethods = {
  setArticle: (article: Article | null) => void;
  setCountry: (country: Country) => void;
  setView: (view: View) => void;
};

const AppContext = React.createContext<AppContextState & AppContextMethods>(
  {} as any
);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState<AppContextState>({
    article: null,
    country: "US",
    view: "top",
  });

  const setArticle = React.useCallback(
    (article: Article | null) => setState((prev) => ({ ...prev, article })),
    []
  );

  const setCountry = React.useCallback(
    (country: Country) => setState((prev) => ({ ...prev, country })),
    []
  );

  const setView = React.useCallback(
    (view: View) => setState((prev) => ({ ...prev, view })),
    []
  );

  const value = React.useMemo(
    () => ({ ...state, setCountry, setArticle, setView }),
    [state, setArticle, setCountry, setView]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
