import { useStateContext } from '../src/store/Context';

import Header from './Components/Master/Header';
import Planet from './Components/Planet';

function App() {
  const { planet } = useStateContext();

  return (
    <div className={`planet-facts min-h-screen overflow-hidden theme-` + planet}>
      <Header />
      <Planet />
    </div>
  );
}

export default App;
