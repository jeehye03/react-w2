import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { BiCut, BiEdit, BiCheck } from "react-icons/bi";
import { loadWordFB, checkWordFB, deleteWordFB, } from "./redux/modules/word";


const Main = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);
 


  return (
    <Card>
      <Wrap>
        {word_list.map((l, index) => {
          return (
            <Article completed={l.completed} key={l.id}>
              <Title>
                <h4>{l.word}</h4>
                <Icon>
                  <BiCheck
                    size="25"
                    id={l.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(checkWordFB(l.id));
                    }}
                  />
                  <BiEdit
                    size="20"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      history.push("/edit/" + index);
                    }}
                  />
                  <BiCut
                    size="20"
                    id={l.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deleteWordFB(l.id));
                    }}
                  />
                </Icon>
              </Title>
              <span>{l.pinyin}</span>
              <p>{l.mean}</p>
              <Blue>{l.example}</Blue>
              <Blue>{l.read}</Blue>
            </Article>
          );
        })}
      </Wrap>
    </Card>
  );
};
const Card = styled.div`
height: 100%;
position:relative;
`;
const Wrap = styled.div`
  display: flex;
  /* justify-content:space-evenly; */
  width:100%;
  padding: 20px 40px;
  flex-flow: wrap;
  box-sizing:border-box;

`;
const Article = styled.div`
  width: 350px;
  height: 180px;
  background-color: ${(props) => (props.completed ? "#E6E6FA" : "aliceblue")};
  border: 1px solid #ddd;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px 20px;
  margin: 5px 5px;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 5px #ddd;
  }

  & h4 {
    margin: 20px 0;
    font-size: 28px;
    line-height: 5px;
  }
  & span {
    font-size: 14px;
  }

  & p {
    margin: 8px 0;
  }
`;


const Title = styled.div`
width:100%;
display:flex;
justify-content: space-between;
`;

const Blue = styled.div`

    color: #6586fa;
    font-size: 14px;
    margin-bottom: 5px;

`;
const Icon = styled.div`

`;



export default Main;
