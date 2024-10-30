import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Reset errors
    setUsernameError(false);
    setPasswordError(false);

    // Check if username or password is missing
    if (username === "") {
      setUsernameError(true);
      hasError = true;
    }
    if (password === "") {
      setPasswordError(true);
      hasError = true;
    }

    // Only call onLogin if there are no errors
    if (!hasError) {
      onLogin(username, password);
    }
  };

  return (
    <div className="animate-fadeInFast bg-white p-16 rounded-lg shadow-lg w-full max-w-md">
      <form
        action=""
        className="space-y-6"
      >
        <h1 className="text-3xl font-semibold text-center text-black">
          Welcome!
        </h1>
        <div className="bg-black w-10 h-1 justify-self-center"></div>

        <div id="input-box">
          {usernameError && (
            <p className="text-red-500 text-sm mb-1">Missing username</p>
          )}
          <input
            className={`w-full p-3 border-2 rounded-sm bg-white focus:outline-none ${
              usernameError
                ? "border-red-500"
                : "border-gray-300 focus:border-violet-500"
            }`}
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div id="input-box">
          {passwordError && (
            <p className="text-red-500 text-sm mb-1">Missing password</p>
          )}
          <input
            className={`w-full p-3 border-2 rounded-sm bg-white focus:outline-none ${
              passwordError
                ? "border-red-500"
                : "border-gray-300 focus:border-violet-500"
            }`}
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full p-3 bg-violet-500 text-white rounded-sm font-semibold transition ease-in-out hover:-translate-y-1 hover:border-transparent hover:bg-violet-600"
          onClick={handleSubmit}
        >
          Login
        </button>

        <hr />

        <div className="flex w-full">
          <p className="text-sm text-start text-slate-500 mx-1">
            Don't have an account?
          </p>
          <a
            className="text-sm text-violet-500 mx-1 hover:text-violet-600 hover:underline"
            href="/sign-up"
          >
            Sign up!
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
