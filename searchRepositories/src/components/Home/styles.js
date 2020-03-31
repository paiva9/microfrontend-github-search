import styled from "styled-components";

export const Header = styled.div`
  margin-top: 50px;
`;
export const Container = styled.div`
  margin-left: 50px;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  color: ${props => (props.color ? props.color : "#F1F1F1")};
  font-size: 32px;
`;

export const Input = styled.input`
  width: 95%;
  height: 30px;
  background: transparent;
  border: 1px solid #212027;
  padding: 15px;
  font-size: 14px;
  color: #f1f1f1;
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  height: 40px;
  margin-left: -80px;
  color: #f1f1f1;

  &:hover {
    cursor: pointer;
    color: #a3a3a3;
  }
`;

export const Box = styled.div`
  margin-top: 10px;
  width: 90%;
  font-size: 22px;
  background: #212027;
  border-radius: 5px;
  color: #f1f1f1;
  margin-bottom: ${props => (props.mb ? `${props.mb}px` : "")};
`;

export const Card = styled.div`
  padding: 20px;
  display: flex;
`;

export const CardTitle = styled.a`
  color: #f1f1f1;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #f1f1f1;
  }
`;

export const CardDescription = styled.div`
  color: #a3a3a3;
  margin-top: 10px;
  font-size: 12px;
`;

export const CardLeftSide = styled.div`
  width: 85%;
`;
export const CardRightSide = styled.div`
  /* width: 30%; */
  display: flex;
  font-size: 12px;
  align-self: center;
`;

export const CardDetails = styled.div`
  margin-left: 10px;
`;

export const ShowLabelResult = styled.div`
  width: 90%;
  text-align: center;
  color: #f1f1f1;
`;
