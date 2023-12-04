import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
