import React from "react";
import styled from "@emotion/styled";
import InputSearch from "../InputSearch";
import Text from "../Text";
import Titles from "../Titles";
import BoxWhite from "../BoxWhite";

export interface SearchBoxProps {
  title: string;
  placeholderMobile?: string;
  text: string;
  placeholderDesktop?: string;
}

const LayoutMobile = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;

const LayoutInputSearch = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const LayoutDesktop = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    margin-bottom: 40px;
  }
`;

const SearchBox: React.FC<SearchBoxProps> = ({
  title,
  placeholderMobile,
  placeholderDesktop,
  text
}) => {
  return (
    <>
      <LayoutMobile>
        <Titles marginBottom="8px">{title}</Titles>
        <LayoutInputSearch>
          <InputSearch placeHolder={placeholderMobile} />
        </LayoutInputSearch>
      </LayoutMobile>
      <LayoutDesktop>
        <BoxWhite>
          <Titles marginBottom="16px">{title}</Titles>
          <Text marginBottom="24px">{text}</Text>
          <InputSearch placeHolder={placeholderDesktop} />
        </BoxWhite>
      </LayoutDesktop>
    </>
  );
};

export default SearchBox;
