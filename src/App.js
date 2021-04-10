import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task'
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (  
    <Provider store={store}>
      <div className="container">
      <Task/>
      </div>
   </Provider>
  );
}

export default App;
