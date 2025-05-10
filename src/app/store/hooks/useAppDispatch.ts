import { useDispatch } from 'react-redux';
import { AppDispatch } from '../configure-store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
