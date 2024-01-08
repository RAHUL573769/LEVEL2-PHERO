import { useState } from "react";
import { CounterWithClass } from "./Componenets/CounterComponents";
import CounterWithFunctional from "./Componenets/CounterWithFunctional";
// import { UserInfowithUseState } from "./Componenets/UserInfo";
import { UserInfowithUseState } from "./Componenets/UserInfo";
import { UserInfowithUseReducer } from "./Componenets/userinfousinguseReducer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React App</h1>
      <CounterWithClass></CounterWithClass>
      <UserInfowithUseState></UserInfowithUseState>
      <UserInfowithUseReducer></UserInfowithUseReducer>
      {/* <CounterWithFunctional
        count={count}
        setCount={setCount}
      ></CounterWithFunctional> */}
    </div>
  );
}

export default App;
