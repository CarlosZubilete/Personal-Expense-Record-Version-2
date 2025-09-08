import "./App.css";
import { Header } from "./features/header/components/Header";
import { useDarkMode } from "./features/hooks/useDarkMode";
import { Outlet } from "react-router-dom";
import { Footer } from "./features/footer/components/Footer";
import { ScrollToTop } from "./features/components/ScrollToTop";
import AuthProvider from "./features/account/context/AuthProvider";

function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <div className="App">
      <ScrollToTop />
      <AuthProvider>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
