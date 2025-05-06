import { useContext } from "react";
import userContext from "../userContext/userContext";

function LoginForm() {
  const { state, dispatch } = useContext(userContext);

  const handleForm = (e) => {
    e.preventDefault();
    if (state.username == "" || state.password == "") {
      dispatch({
        type: "SHOWERROR",
        payload: "Username or password can not be empty.",
      });
      return;
    }
    if (state.username === "Harsh" && state.password === "1234") {
      dispatch({ type: "LOGINSUCCESS" });
    } else {
      dispatch({ type: "LOGINFAILED" });
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-6">
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="w-96 bg-zinc-900 p-4 rounded-xl space-y-4">
        <label className="text-base font-semibold" htmlFor="username">
          Username:
        </label>
        <input
          value={state.username}
          onChange={(e) => {
            dispatch({ type: "SETUSERNAME", payload: e.target.value });
          }}
          id="username"
          type="text"
          className="bg-zinc-700 text-white  outline-none border-none w-full px-2 rounded-lg py-1"
        />
        <label className="text-base font-semibold" htmlFor="password">
          Password:
        </label>
        <input
          value={state.password}
          onChange={(e) => {
            dispatch({ type: "SETPASSWORD", payload: e.target.value });
          }}
          id="password"
          type="password"
          className="bg-zinc-700 text-white  outline-none border-none w-full px-2 rounded-lg py-1"
        />
        <button
          onClick={(e) => {
            handleForm(e);
          }}
          type="submit"
          className="bg-teal-600 text-white text-base px-4 py-1 rounded-lg cursor-pointer"
        >
          Login
        </button>

        {state.error === "" ? null : (
          <p className="text-base text-red-600 font-semibold">{state.error}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
