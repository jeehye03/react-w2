import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Main from "./Main";
import Add from "./Add";
import Edit from "./Edit";
// import Spinner from "./Spinner";

function App() {
  const dispatch = useDispatch();
  // const is_loaded = useSelector(state => state.word.is_loaded);

  const history = useHistory();
React.useEffect(() => {
  dispatch(loadWordFB());
}, []);

  return (
    <div className="App">
      <Title>
        <h1>내 중국어 단어장</h1>
      </Title>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route exact path="/edit/:index" component={Edit} />
      <Route exact path="/add" component={Add} />
      <AddBtn
        onClick={() => {
          history.push("/add");
        }}
      >
        <IoMdAdd size="50" color="white" />
      </AddBtn>
    </div>
  );
}

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "GangwonEduSaeeum_OTFMediumA";
  font-size:30px;
`;

const AddBtn = styled.div`
  border: none;
  width: 50px;
  height: 50px;
  background-color: #E6E6FA;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 50px;
  bottom:50px;
  
  `
export default App;

