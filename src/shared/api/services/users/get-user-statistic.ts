import { api } from '@api/api';
import { Response, UserStatisticResponse } from '@api/types';

export const getUserStatistic = async (
  id: string | number
): Promise<UserStatisticResponse> => {
  try {
    const { data } = await api.get<Response<UserStatisticResponse>>(
      `/users/${id}/statistic`
    );
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
