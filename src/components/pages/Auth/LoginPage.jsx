import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import AuthService from "../../../services/auth.service";
import Storage from "../../../utils/Storage";
import "../../../styles/auth.styles.css";


const LoginPage = () => {
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigation = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setError("");
      const { data: userData } = await AuthService.login(data);
      setUser(userData.user);
      Storage.setString("token", userData.token);
      navigation("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <label>Password</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={isLoading}
        >
          Login
        </button>
        {error && <div className="alert alert-danger mt-5">{error}</div>}
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Copyright Vivify Academy
        </p>
      </form>
    </main>
  );
};

export default LoginPage;