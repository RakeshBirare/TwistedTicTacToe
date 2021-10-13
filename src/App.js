import React, {useState} from 'react';
import Icon from "./componants/icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray = new Array(9).fill("Empty")

const App = () => {

  const [isCross,setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")
  const [winner, setWinner] = useState("")

  const reloadGame = () => {
      setIsCross(false);
      setWinMessage("");
      setWinner("");
      itemArray.fill("Empty", 0,9)
  }

  const checkWinner =() => {
    if (
      itemArray[0] !== "Empty" && 
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    
    ) {
      setWinMessage(`${itemArray[0]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[3] !== "Empty" && 
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[6] !== "Empty" && 
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[0] !== "Empty" && 
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[1] !== "Empty" && 
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[2] !== "Empty" && 
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[0] !== "Empty" && 
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
    else if (
      itemArray[2] !== "Empty" && 
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} wins`)
      setWinner("Player Playing For Win WINS !")
    }
  }

  const checkDrow = () =>{
    if (
      (itemArray[0] !== "Empty" && itemArray[1] !== "Empty" && itemArray[2] !== "Empty" && itemArray[3] !== "Empty" && itemArray[4] !== "Empty" && itemArray[5] !== "Empty" && itemArray[6] !== "Empty" && itemArray[7] !== "Empty" && itemArray[8] !== "Empty" && itemArray[9] !== "Empty" && winMessage !== null)) {
      setWinMessage("MatchDrow")
      setWinner("Player Playing For Drow WINS !")
    }
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type: "success"})
    }
    if (itemArray[itemNumber] === "Empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }else{
      return toast("Already Filled", {type: "error"})
    }
    checkDrow();
    checkWinner();


  }

  return (
    <Container>
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h3 className="text-primary text-uppercase text-center">
                {winMessage}
              </h3>
              <h1 className="text-warning text-center">
                {winner}
              </h1>

              <Button color="success" block onClick={reloadGame}>Reload</Button>
              <div className="container"></div>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "cross" : "circle"}
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="info" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}

          </div>
        </Col>
        <Col md={6} className="offset-md-3 mt-2">
          <h3 className="text-light"><b>Rules</b> : 
            <h4><u>Play For Win : </u></h4><h5> If Any One Wins(The Game Result Is Win) Then You Wins The Game</h5><br />
            <h4><u>Play For Drow : </u></h4><h5>If Match Is Drow (The Game Result Is Drow) Then You Wins The Game</h5>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
