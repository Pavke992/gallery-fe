import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import AuthService from "../../../services/auth.service";
import "../../../styles/auth.styles.css";
import Storage from "../../../utils/Storage";


const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigation = useNavigate();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isTermsAccepted) {
      setError("You must accept the Terms and Conditions.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      const { data: userData } = await AuthService.register(data);
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
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>

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
            type="text"
            className="form-control"
            placeholder="Username"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label>Username</label>
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
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            required
            value={data.password_confirmation}
            onChange={(e) =>
              setData({ ...data, password_confirmation: e.target.value })
            }
          />
          <label>Confirm Password</label>
        </div>


        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I accept the Terms and Conditions
          </label>
        </div>


        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          disabled={isLoading}
        >
          Register
        </button>
        {error && <div className="alert alert-danger mt-5">{error}</div>}
        <p className="mt-5 mb-3 text-body-secondary">
          &copy; Copyright Pavke
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;