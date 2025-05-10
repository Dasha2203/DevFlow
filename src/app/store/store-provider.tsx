import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './configure-store';

type StoreProviderProps = {
  children: ReactNode | ReactNode[];
};

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
