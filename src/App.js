
import { MainPage } from './pages/MainPage.tsx';

import './css/mainPage.css';
import AppContextProvider from './contexts/AppContext';


function App() {
  return (
    <AppContextProvider>
      <MainPage title="mainPage"></MainPage>
    </AppContextProvider>
  );
}

export default App;
