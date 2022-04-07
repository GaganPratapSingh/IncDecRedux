
import { useSelector,useDispatch} from 'react-redux';
import './App.css';
import {incNumber,decNumber} from "./Actions/index"

function App() {

  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <h3>Increment/Decrement Counter</h3>
      <button onClick={()=>dispatch(incNumber())} >Inc</button>
      <span>{myState}</span>
      <button onClick={()=>dispatch(decNumber())}>Dec</button>
    </>
  );
}

export default App;
