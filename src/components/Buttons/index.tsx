import * as React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button.attrs({
  type: "button"
})`
  background-color: ${(props: any) => (props.active ? "#FACD00" : "#26697e")};
  font-size: 1rem;
  border: 1px solid white;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

type handleChangeCallbackFunction = (num: number) => void;

interface IButtonsProps {
  count: number;
  handleChangeNumImg: handleChangeCallbackFunction;
}

const listNums = [10, 20, 30];

const handleChangeOnButtonClicked = (
  handleChangeNumImg: handleChangeCallbackFunction,
  count: number
) => {
  return () => handleChangeNumImg(count);
};

const Buttons: React.SFC<IButtonsProps> = ({
  count,
  handleChangeNumImg
}: {
  count: number;
  handleChangeNumImg: handleChangeCallbackFunction;
}) => {
  return (
    <ButtonWrapper>
      {listNums.map(num => (
        <Button
          onClick={handleChangeOnButtonClicked(handleChangeNumImg, num)}
          key={num}
          active={count === num}
        >
          {num}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

export default Buttons;
