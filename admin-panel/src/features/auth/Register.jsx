import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./authThunks";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, registeredUser } = useSelector((state) => state.auth);

  // ------------------ FORM STATE ------------------
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // ------------------ HANDLE INPUT ------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ------------------ HANDLE SUBMIT ------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!form.firstName || !form.email || !form.password || !form.username) {
      alert("Please fill all required fields!");
      return;
    }

    dispatch(registerUser(form));
  };

  // Redirect to login after successful registration
  useEffect(() => {
    if (registeredUser) {
      navigate("/");
    }
  }, [registeredUser]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">

        <h1 className="text-center text-2xl font-semibold mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Mobile with Country Code */}
          <div className="mt-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-300">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="flag"
                  className="w-5 h-4"
                />
                <span className="text-gray-700 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full py-3 px-4 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Username */}
          <div className="mt-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div className="mt-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-3 px-4 outline-none pr-12 focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Error Msg */}
          {error && (
            <p className="text-red-500 text-center mt-4 text-sm">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg mt-6 transition"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-5">
          go back to login{" "}
          <Link to="/" className="text-purple-500 underline cursor-pointer">
            login page
          </Link>
        </p>
      </div>
    </div>
  );
}
