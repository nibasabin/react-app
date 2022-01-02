
import { MainPage } from './pages/MainPage.tsx';

import './css/pages/mainPage.css';
import AppContextProvider from './contexts/AppContext';


function App() {
  return (
    <AppContextProvider>
      <MainPage title="mainPage"></MainPage>
    </AppContextProvider>
  );
}

export default App;
