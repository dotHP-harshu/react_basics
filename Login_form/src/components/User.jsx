import React, { useContext } from "react";
import userContext from "../userContext/userContext";

function User() {
  const { state, dispatch } = useContext(userContext);

  return (
    <div className="flex flex-col gap-1 items-start justify-center">
      <h2> Hello {state.username}</h2>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
        className="bg-red-600 text-white text-base px-4 py-1 rounded-lg cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
}

export default User;
