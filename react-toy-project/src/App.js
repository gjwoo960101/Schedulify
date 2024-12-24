import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './store/store';
import {Body, Header} from './pages/Board';

function App() {
  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header></Header>
        <Body></Body>
      </div>
    </Provider>
    
  );
}

export default App;
