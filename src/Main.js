import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { BiCut, BiEdit, BiCheck } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { loadWordFB, checkWordFB, deleteWordFB } from "./redux/modules/word";

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);

  return (
    <div>
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
                        dispatch(checkWordFB(l.id,l));
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
      <AddBtn
        onClick={() => {
          history.push("/add");
        }}
      >
        <IoMdAdd size="50" color="white" />
      </AddBtn>
    </div>
  );
};
const Card = styled.div`
  position: relative;
  display: block;
  margin: 10px 0;
`;
const Wrap = styled.div`
  display: flex;
  width: 1300px;
  flex-flow: wrap;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  margin: auto;
 
`;

const Article = styled.div`
  width: 360px;
  height: 180px;
  background-color: ${(props) => (props.completed ? "#E6E6FA" : "")};
  border: 1px solid #ddd;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 20px;
  margin: 5px 5px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.35s;

  /* @media screen and (min-width: 1024px) {
    width: calc((100% - 199px) / 3);
  } */

  &:hover {
    box-shadow: 2px 1px 5px #ddd;
    transform: scale(1.1);
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
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Blue = styled.div`
  color: #6586fa;
  font-size: 14px;
  margin-bottom: 5px;
`;
const Icon = styled.div``;

const boxFade = keyframes`

from{
  transform:0
}
to{
  transform:rotate(90deg)
}
`;

const AddBtn = styled.div`
  border: none;
  width: 50px;
  height: 50px;
  background-color: #e6e6fa;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 1px 5px #ddd;
  position: fixed;
  bottom: 50px;
  right: 30px;

  &:hover {
    animation: ${boxFade} 1s ease-in-out ;
  }
`;

export default Main;
