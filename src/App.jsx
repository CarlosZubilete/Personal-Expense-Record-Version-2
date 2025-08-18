import "./App.css";
import { Header } from "./features/components/Header";
import { useDarkMode } from "./features/hooks/useDarkMode";
import { Outlet } from "react-router-dom";
function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
