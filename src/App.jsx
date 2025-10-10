import { Layout } from './components';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main.jsx';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    </>
  );
}

export default App;
