import { useReducer, useState } from "react";

export const UserInfowithUseReducer = () => {
  const initialState = {
    name: "",
    age: "",
    hobbies: []
  };
  const reducerFunction = (currentState, action) => {
    switch (action.type) {
      case "addName":
        return { ...currentState, name: action.payload };
      case "addAge":
        return { ...currentState, age: action.payload };
      case "addHobbies":
        return [ ...currentState, hobbies: [ ...currentState.hobbies,action.payload] ];
      default:
        return currentState;
    }
  };
  //    const [state,dispatch]= useReducer(function,value);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  console.log(state);
  const [user, setUser] = useState({ name: "", age: 0, hobbies: [] });
  console.log(user);
  return (
    <div>
      <h1>Form Using Use Reducer</h1>

      <input
        className={"border border-purple-300 m-30"}
        // onChange={(e) => setUser({ ...user, name: e.target.value })}
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />

      <br />
      <input
        className={"border border-purple-300 m-30"}
        // onChange={(e) => setUser({ ...user, age: e.target.value })}
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        type="text"
        name="age"
        id="age"
        placeholder="age"
      />
      <br />
      <input
        className={"border border-purple-300 m-30"}
        type="text"
        // onBlur={(e) =>
        //   setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        // }

        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <br />
      {/*  */}
    </div>
  );
};
