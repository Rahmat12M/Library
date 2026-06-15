import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext/AuthContext";
import styles from "./Login.module.css";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [theme] = useLocalStorage<{theme: string}>("theme", {theme: "light"});
  
  useEffect(() => {
    const body = document.getElementById("body");
    body?.classList.remove("light");
    body?.classList.remove("dark");
    body?.classList.add(theme.theme);
  }, [theme]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("Incorrect username or password");
    }
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p className={styles.subtitle}>Sign in to access your reading lists.</p>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.fieldGroup}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            placeholder="e.g. admin"
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Sign in
        </button>

        <p className={styles.hint}>Demo: admin / 1234</p>
      </form>
    </section>
  );
}

export default Login;