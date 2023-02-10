import styled from "@emotion/styled";
import React from "react";
import { countries, Country, View, views } from "../../state/app.types";
import { colors } from "../../styles";

const viewStringMap: Record<View, string> = {
  top: "Top News",
  search: "Search",
};

const St = {
  Header: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: ${colors.navy};
  `,
  SelectorSectionLeft: styled.div`
    display: flex;
  `,
  SelectorSectionRight: styled.div`
    display: flex;
  `,
  SelectorItem: styled.div<{ isActive: boolean; borderSide: "left" | "right" }>`
    background-color: ${({ isActive }) =>
      isActive ? colors.yellow : colors.navy};
    color: ${({ isActive }) => (isActive ? colors.navy : colors.yellow)};
    padding: 16px;
    cursor: pointer;

    ${({ borderSide }) =>
      borderSide === "right"
        ? `&:not(:last-child){
            border-right: 1px solid ${colors.yellow};
        }`
        : `&:not(:first-child){
            border-left: 1px solid ${colors.yellow};
        }`}
  `,
};

export const AppHeader: React.FC<{
  country: Country;
  view: View;
  onChangeView: (view: View) => void;
  onChangeCountry: (country: Country) => void;
}> = ({ country, onChangeView, onChangeCountry, view }) => {
  const getIsView = (sectionView: View) => view === sectionView;
  const getIsCountry = (sectionCountry: Country) => country === sectionCountry;

  return (
    <St.Header>
      <St.SelectorSectionLeft>
        {views.map((viewKey) => (
          <St.SelectorItem
            borderSide={"left"}
            isActive={getIsView(viewKey)}
            key={viewKey}
            onClick={() => onChangeView(viewKey)}
          >
            {viewStringMap[viewKey]}
          </St.SelectorItem>
        ))}
      </St.SelectorSectionLeft>

      <St.SelectorSectionRight>
        {countries.map((countryKey) => (
          <St.SelectorItem
            borderSide={"right"}
            isActive={getIsCountry(countryKey)}
            key={countryKey}
            onClick={() => onChangeCountry(countryKey)}
          >
            {countryKey.toUpperCase()}
          </St.SelectorItem>
        ))}
      </St.SelectorSectionRight>
    </St.Header>
  );
};
