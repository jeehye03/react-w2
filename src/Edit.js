import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const Edit = (props) => {
  const params = useParams();
  const word_index = params.index;
  const word_list = useSelector((state) => state.word.list);

  // console.log(word_list)
  // console.log(params)
  console.log(word_list[word_index]);

  return (
    <Wrap>
      <Article>
        <h4>{word_list[word_index].word}</h4>
        <span>{word_list[word_index].mean}</span>
        <p>{word_list[word_index].pinyin}</p>
        <Blue>{word_list[word_index].example}</Blue>
        <Blue>{word_list[word_index].read}</Blue>
      </Article>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 20px 40px;
  justify-content: center;
`;
const Article = styled.div`
  width: 500px;
  height: 320px;
  background-color: ${(props) => (props.completed ? "#E6E6FA" : "aliceblue")};
  border: 1px solid #ddd;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  margin: 5px 5px;
  line-height: 30px;

  & h4 {
    margin: 20px 0;
    font-size: 45px;
    line-height: 15px;
  }
  & span {
    font-size: 25px;
  }

  & p {
    margin: 8px 0;
    font-size: 25px;
  }
`;

const Blue = styled.div`
  color: #6586fa;
  font-size: 25px;
  margin-bottom: 5px;
`;
export default Edit;
