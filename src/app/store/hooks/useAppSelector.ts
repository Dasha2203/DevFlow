import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '../configure-store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
