import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Logged in with", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-gray-800">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-navy text-center mb-6">
          Welcome Back!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Log in to access your account.
        </p>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-navy text-white py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-orange focus:outline-none"
          >
            Log In
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange font-medium hover:underline">
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot password?{" "}
            <a
              href="/forgot-password"
              className="text-orange font-medium hover:underline"
            >
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
