
import './App.css';
import Layout from './components/Layout';
import PortfolioContextProvider from './context/PortfolioContext';


const App=()=> {
 
  return (
    <PortfolioContextProvider>
    <Layout/>
    </PortfolioContextProvider>
    
    
  );
}

export default App;
