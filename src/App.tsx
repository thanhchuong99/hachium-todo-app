import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Todos from './modules/Todos';

function App() {
  return (
    <Layout>
      <Header />
      <Todos />
    </Layout>
  );
}

export default App;
