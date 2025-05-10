import Routing from './routes/routing';
import { StoreProvider } from './store';

const App = () => {
  return (
    <StoreProvider>
      <Routing />
    </StoreProvider>
  );
};

export default App;
