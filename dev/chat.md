Okey chat, tengo un par de preguntas...

1. Que te parece la paleta de colores que estoy usando para el narvar para el body:
   Problema: noto que cuando se cambia de color a dark, hay una transision, pero cuando es viceversa, cambia bruscamente:

index.css

```
/* light mode */
:root {
  /* *Nav-bar* */
  --navbar-bg: #6a00f4;
  --navbar-bg-shadow: rgba(0, 0, 0, 0.5);
  --navbar-text: #e5e5e5;
  --navbar-text-hover: #fff;

  /* *Body* */
  --bg-body-color: #f8f9fa;
  --bg-body-gradient: linear-gradient(135deg, #ffffff, #e9ecef);
  --text-body-color: #212121;
}

.dark-mode {
  /* *Nav-bar* */
  --navbar-bg: #1f1f1f;
  --navbar-text: #e5e5e5;
  --navbar-text-hover: #fff;
  /* *Body* */
  --bg-body-color: #0d1117;
  --bg-body-gradient: linear-gradient(135deg, #0d1117, #161b22);
  --text-body-color: #8b949e;
}
```

Componente App

```
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
```

App.css

```
body {
  background-color: var(--bg-body-color);
  background-image: var(--bg-body-gradient);
  color: var(--text-body-color);
  /* transition: background-color 0.5s ease, color 0.5s ease; */
  transition: all 0.5s ease, color 0.5s ease;
}

.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 0.5s ease, color 0.5s ease; */
}

main {
  flex: 1;
}

.dark-mode {
  background-color: var(--bg-body-color);
  background-image: var(--bg--body-gradient);
  color: var(--text-body-color);
  /* transition: background-color 0.5s ease, color 0.5s ease; */
  transition: all 0.5s ease, color 0.5s ease;
}

```

Hay algun problema o es solo mi impresion ? Necesitas más informacion ?
