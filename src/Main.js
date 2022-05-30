import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled, {keyframes} from "styled-components";
import { useDispatch } from "react-redux";
import { BiCut, BiEdit, BiCheck } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { db } from "./firebase";
import { loadWordFB, checkWordFB, deleteWordFB, } from "./redux/modules/word";


const Main = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);
 

  // React.useEffect(() => {
  //   dispatch(loadWordFB());
  // }, []);

  return (
    <Card>
      <Wrap>
        {word_list.map((l, index) => {
          return (
            <Article completed={l.completed}>
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
      <AddBtn
        onClick={() => {
          history.push("/add");
        }}
      >
 
          <IoMdAdd size="50" color="white" />
     
      </AddBtn>
    </Card>
  );
};
const Card = styled.div`
height: 100vh;
width: 100vw;
position:relative;
`;
const Wrap = styled.div`
  display: flex;
  justify-content:space-around;
  padding: 20px 40px;
  flex-flow: wrap;

`;
const Article = styled.div`
  width: 400px;
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

const boxFade = keyframes`
0%{
  transform: 0
}
100%{
  transform:scale(10px)
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
  /* width: 100%;
  text-align: right; */
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
  
`;



export default Main;

// const query = await getDocs(collection(db, "word"));
// console.log(query);
// query.forEach((doc) => {
//     console.log(doc.id, doc.data());

// }); // 데이터 가져오기

// addDoc(collection(db, "word"), {
//   word: "真棒",
//   mean: "매우 훌륭하다",
//   pinyin: "zhēnbàng",
//   example: "字写得真棒",
//   read: "글씨를 정말 잘 썼다",
// }); // 데이터 추가하기
