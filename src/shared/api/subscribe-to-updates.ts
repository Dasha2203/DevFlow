import { api } from './api';

export const subscribeToUpdates = async <T>(
  url: string,
  signal: AbortSignal,
  callback: (data: T) => void
): Promise<void> => {
  if (signal.aborted) return;

  try {
    const { data } = await api.get<T>(url, {
      timeout: 30000,
    });

    callback(data);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    subscribeToUpdates<T>(url, signal, callback);
  } catch (error) {
    console.error('Ошибка запроса:', error);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    subscribeToUpdates<T>(url, signal, callback);
  }
};
