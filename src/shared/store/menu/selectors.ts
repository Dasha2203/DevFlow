import { AppState } from '@src/app/store/configure-store';

export const selectMenuIsOpen = (state: AppState) => state.menu.isOpen;
