import GlobalStyle from "./GlobalStyle";
import MainScreen from "./components/MainScreen"
import {useState} from "react"
import InitialScreen from "./components/InitialScreen";

export default function App() {
  const [initialScreenDisable,setInitialScreenDisable] = useState(false);
  return (
    <>
      <GlobalStyle />
      
      <InitialScreen initialScreenDisable={initialScreenDisable} setInitialScreenDisable={setInitialScreenDisable} />
      
      <MainScreen initialScreenDisable={initialScreenDisable} />
    </>
  );
}