import React from "react";
import styled from "@emotion/styled";

interface ParcelsImportant {
  imgUrl: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleClick: () => void;
  backgroundColor?: string;
  imageWidth?: string;
}

const BoxContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  width: 229px;
  border-radius: 20px;
  height: 141px;
  background: ${({ backgroundColor }) => backgroundColor};
  margin-right: 28px;
`;

const RowImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img<{ imageWidth?: string }>`
  width: ${({ imageWidth }) => imageWidth};
`;

const BoxImage: React.FC<ParcelsImportant> = ({
  imgUrl,
  handleClick,
  backgroundColor,
  imageWidth
}) => {
  return (
    <BoxContainer backgroundColor={backgroundColor} onClick={handleClick}>
      <RowImage>
        <Image src={imgUrl} imageWidth={imageWidth} />{" "}
      </RowImage>
    </BoxContainer>
  );
};

export default BoxImage;
