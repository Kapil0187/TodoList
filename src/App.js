import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <MainContainer/>
    </Provider>
  );
}

export default App;
