import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authThunks";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

 const handleLogin = (e) => {
  e.preventDefault();

  const payload = {
    username: email, // API uses username
    password: password,
    expiresInMins: 30,
  };

  dispatch(loginUser(payload)).then((res) => {
    if (res.meta.requestStatus === "fulfilled") {
      // ✅ Store token in localStorage
      if (res.payload?.token) {
        localStorage.setItem("token", res.payload.token);
      }

      // Optional: store user data
      if (res.payload?.id) {
        localStorage.setItem("user", JSON.stringify(res.payload));
      }

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      alert("Login failed!");
    }
  });
};


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 md:p-10 border border-gray-100">
        <h1 className="text-center text-2xl font-semibold mb-6">
          Welcome - Login page
        </h1>

        {/* Email Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
          />
        </div>

        {/* Password Input */}
        <div className="mt-4 relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none pr-12 focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-center mt-2 text-sm">
            {error}
          </p>
        )}

        {/* Submit Button */}
        <button
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg mt-4 transition"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Continue with Email"}
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-5 leading-relaxed">
          <p className="mt-4">
            create new account{" "}
            <Link
              to="/register"
              className="text-purple-500 underline cursor-pointer"
            >
              sign up for free{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
