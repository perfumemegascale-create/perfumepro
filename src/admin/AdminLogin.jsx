import React, { useState, useEffect } from "react";
import { Lock, User, Eye, EyeOff, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

const handleLogin = async () => {
  setError("");
  setIsLoading(true);

  try {
    const response = await fetch(`${API_BASE_URL}/Admin_login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: username, // use email input as username
        password: password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      console.log("Login successful!");
      localStorage.setItem("isAdminAuthenticated", "true");
      localStorage.setItem("adminUser", data.admin.name);
      navigate("/admin/dashboard");
    } else {
      setError(data.message || "Invalid email or password");
    }
  } catch (error) {
    setError("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};



  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#5B3A29] overflow-hidden">
      {/* Unique geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#7C5740] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8A6A50] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#9B7A60] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#A77C63] rounded-2xl rotate-12 opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#B48A70] rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/4 right-20 w-20 h-20 bg-[#C39C85] rounded-3xl -rotate-12 opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex items-center justify-center gap-12">

        {/* Left side - Decorative */}
        <div className="hidden lg:flex flex-col items-center justify-center w-1/2">
          <div className="relative">
            <div className="w-80 h-80 bg-[#7C5740] rounded-full opacity-20 blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/60 shadow-2xl">
              <Sparkles className="w-32 h-32 text-[#7C5740] mb-6 mx-auto" strokeWidth={1.5} />
              <h3 className="text-4xl font-bold text-gray-800 text-center mb-4">Welcome Back!</h3>
              <p className="text-gray-600 text-center text-lg">Manage your platform with powerful admin tools</p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 p-10 relative overflow-hidden">

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A6A50] opacity-10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#9B7A60] opacity-10 rounded-tr-full"></div>

            {/* Header */}
            <div className="text-center mb-8 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#B48A70] rounded-3xl mb-4 shadow-xl transform hover:rotate-6 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#7C5740] via-[#8A6A50] to-[#9B7A60] bg-clip-text text-transparent mb-2">
                Admin Portal
              </h2>
              <p className="text-gray-600 text-sm font-medium">
                Secure access to your dashboard
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg text-red-700 text-sm font-medium shadow-sm">
                {error}
              </div>
            )}

            {/* Login form */}
            <div className="space-y-6">
              {/* Username field */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                  Username
                </label>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#7C5740] to-[#8A6A50] rounded-2xl transition-all duration-300 ${focusedField === 'username' ? 'opacity-100 blur-sm' : 'opacity-0'}`}></div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-hover:text-[#7C5740]" />
                    <input
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocusedField('username')}
                      onBlur={() => setFocusedField('')}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#7C5740] transition-all shadow-sm hover:shadow-md relative"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password field */}
              <div className="relative">
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#8A6A50] to-[#9B7A60] rounded-2xl transition-all duration-300 ${focusedField === 'password' ? 'opacity-100 blur-sm' : 'opacity-0'}`}></div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-hover:text-[#8A6A50]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 pl-12 pr-12 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8A6A50] transition-all shadow-sm hover:shadow-md relative"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#8A6A50] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                onClick={handleLogin}
                disabled={isLoading}
                className="relative w-full bg-gradient-to-r from-[#7C5740] via-[#8A6A50] to-[#9B7A60] text-white font-bold py-4 rounded-2xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#7C5740] transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B7A60] via-[#8A6A50] to-[#7C5740] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Demo credentials */}
            <div className="mt-8 p-5 bg-[#8A6A50]/20 border-2 border-[#7C5740] rounded-2xl shadow-inner">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#7C5740]" />
                <p className="text-xs font-bold text-[#7C5740]">DEMO CREDENTIALS</p>
              </div>
              <p className="text-sm text-gray-700 text-center">
                Username: <span className="font-mono font-bold text-[#7C5740] bg-white px-2 py-1 rounded">admin</span>
                <br />
                Password: <span className="font-mono font-bold text-[#8A6A50] bg-white px-2 py-1 rounded">admin123</span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-200 text-xs mt-6 font-medium">
            🔒 Protected by end-to-end encryption
          </p>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
