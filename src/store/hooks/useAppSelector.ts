import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '@store/index';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
