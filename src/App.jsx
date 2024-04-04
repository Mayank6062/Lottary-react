import './App.css'
import Lottery from './Lottery'
import {sum} from "./helper";

/*
function App() {
  let winCondition = (ticket) => { //ticket is an array
    return sum(ticket) === 15;
}
*/

/*
function App() {
  let winCondition = (ticket) => { //ticket is an array
    return ticket.every((num) => num === ticket[0]); //ticket ka every num equal h 
  }
  */

  function App() {
    let winCondition = (ticket) => { 
      return ticket[0] === 0;  
    }

  return (//herw ticke is an array 
    <div >
   <Lottery n={3} winCondition={winCondition}/>
    </div>
  )
}
export default App
