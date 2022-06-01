import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";

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


export default App;

