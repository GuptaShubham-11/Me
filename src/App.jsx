import './App.css'
import { Layout } from './components'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Apply the theme class to the <html> element
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <Layout>
      {/* Main content goes here */}
      <h1 className="text-center text-3xl">Welcome to My App</h1>
    </Layout>
  )
}

export default App
