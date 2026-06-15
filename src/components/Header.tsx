import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext, useEffect } from "react";
import { ReadListContext } from "../context/readListContext/ReadListContext";
import { BuyListContext } from "../context/buyListContext/BuyListContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AuthContext } from "../context/authContext/AuthContext";

function Header() {
  const { readList } = useContext(ReadListContext);
  const { buyList } = useContext(BuyListContext);
  const { logout } = useContext(AuthContext);

  const [theme, setTheme] = useLocalStorage<{theme: string}>("theme", {theme: "light"});

  useEffect(() => {
    const body = document.getElementById("body");
    body?.classList.remove("light");
    body?.classList.remove("dark");
    body?.classList.add(theme.theme);
  }, [theme]);

  function handleTheme() {
    if (theme.theme === "light") setTheme({theme: "dark"});
    else setTheme({theme: "light"});
  }

  return (
    <>
      <nav className={`${styles["nav"]}`}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? styles.activ : ""} ${styles.navLink}`
          }
        >
          Book list
        </NavLink>
        <NavLink
          to={"/readlist"}
          className={({ isActive }) =>
            `${isActive ? styles.activ : ""} ${styles.navLink}`
          }
        >
          Next to read ({readList.length})
        </NavLink>
        <NavLink
          to={"/buylist"}
          className={({ isActive }) =>
            `${isActive ? styles.activ : ""} ${styles.navLink}`
          }
        >
          Next to buy ({buyList.length})
        </NavLink>
        <NavLink
          to={"/aboutus"}
          className={({ isActive }) =>
            `${isActive ? styles.activ : ""} ${styles.navLink}`
          }
        >
          About US 
        </NavLink>
        <button
          id="btn-toggle"
          type="button"
          className={styles.button}
          onClick={handleTheme}
        >
          {theme.theme === 'light' ? "Light Mode" : "Dark Mode"}
        </button>
        <button className={styles.button} onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  );
}

export default Header;
