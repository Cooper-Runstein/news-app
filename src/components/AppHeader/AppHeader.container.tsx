import { useAppContext } from "../../state/app.context";
import { AppHeader } from "./AppHeader";

export const AppHeaderContainer: React.FC = () => {
  const { country, view, setCountry, setView } = useAppContext();
  return (
    <AppHeader
      country={country}
      onChangeCountry={setCountry}
      onChangeView={setView}
      view={view}
    />
  );
};
