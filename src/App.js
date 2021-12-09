import { Provider } from 'react-redux';
import './App.css';
import Post from './components/Post';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Post/>
    </div>
    </Provider>

    
  );
}

export default App;
