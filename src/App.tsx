import './App.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import useAuthWatcher from './hooks/useAuthWatcher';
import useAuthLocalStorage from './hooks/useAuthLocalStorage';
function App() {

  useAuthWatcher();

  useAuthLocalStorage();
  
  
  return (
    <div className="App">
         <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
