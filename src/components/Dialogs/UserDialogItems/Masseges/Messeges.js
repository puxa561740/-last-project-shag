import styled from "styled-components";

const Messeges = (props)=>{
  return <S.Wrapper>
    <span>{props.messeg}</span>
    </S.Wrapper>
};

const S = {
  Wrapper: styled.div`
  text-align: left;
  font-size: large;
  margin: 10px;
  @media screen and (max-width: 600px) {
          font-size: 12px;
          margin: 3px;
        }
  `
}
export default Messeges;