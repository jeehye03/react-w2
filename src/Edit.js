import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const Edit = (props) => {
  const params = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const word_index=[params.index]
 const word_list = useSelector((state) => state.word.list);
 
  console.log(word_list[word_index])
  const input_word = React.useRef();
  const input_pinyin = React.useRef();
  const input_mean = React.useRef();
  const input_example = React.useRef();
  const input_read = React.useRef();


  const [input, setInput] = React.useState({
    word: input_word,
    pinyin: input_pinyin,
    mean: input_mean,
    example: input_example,
    read: input_read
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  
  

  
  return (
    <AddCard>
      <div>
        <label>
          단어
          <input
            type="text"
            name="word"
            ref={input_word}
            value={input.word}
            onChange={onChange}
          />
        </label>
      </div>

      <div>
        <label>
          병음
          <input
            type="text"
            name="pinyin"
            ref={input_pinyin}
            value={input.pinyin}
            onChange={onChange}
          />
        </label>
      </div>

      <div>
        <label>
          뜻
          <input
            type="text"
            name="mean"
            ref={input_mean}
            value={input.mean}
            onChange={onChange}
          />
        </label>
      </div>
      <div>
        <label>
          예문
          <input
            type="text"
            name="example"
            ref={input_example}
            value={input.example}
            onChange={onChange}
          />
        </label>
      </div>

      <div>
        <label>
          해석
          <input
            type="text"
            name="read"
            ref={input_read}
            value={input.read}
            onChange={onChange}
          />
        </label>
      </div>

      <button>등록하기</button>
    </AddCard>
  );
};

const AddCard = styled.div`
  margin: auto;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "GangwonEduSaeeum_OTFMediumA";
  font-size: 25px;

  & div {
    width: 400px;
    display: flex;
    margin-bottom: 20px;
  }

  & label {
    margin-bottom: 5px;
    width: 400px;
    text-align: start;
  }
  & input {
    font-size: 16px;
    width: 400px;
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 5px 0;
  }

  & input:focus {
    outline: none;
    border-bottom: 2px solid #dadafc;
    transition: border-color 0.4s ease-in-out;
  }

  & button {
    border: none;
    border-radius: 7px;
    background-color: aliceblue;
    width: 200px;
    height: 40px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 25px;
    padding: 1px 6px;
    cursor: pointer;
  }
`;


export default Edit;
