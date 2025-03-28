import { createRoot } from 'react-dom/client';
import { Routing, StoreProvider } from './app';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <Routing />
  </StoreProvider>
);
