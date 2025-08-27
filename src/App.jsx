import "./App.css";
import { Header } from "./features/components/Header";
import { useDarkMode } from "./features/hooks/useDarkMode";
import { Outlet } from "react-router-dom";
import { Footer } from "./features/components/Footer";
import { ScrollToTop } from "./features/components/ScrollToTop";
function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className="App">
      <ScrollToTop />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
