import { UserContextProvider } from './src/screens/Login/UserContext';
import { MainContextProvider } from './src/screens/Main/MainContext';
import Navigation from './src/screens/Navigation/Navigation';


export default function App() {
  return (
    <UserContextProvider>
      <MainContextProvider>
        <Navigation/>
      </MainContextProvider>
    </UserContextProvider>
  );

  
}



