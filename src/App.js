import '@assets/commonStyles/App.css';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from '@store/selectors';

function App() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  console.log(isAuthenticated);
  return <div className="App">Test</div>;
}

export default App;
