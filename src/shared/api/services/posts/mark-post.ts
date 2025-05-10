import { api } from '@api/api';
import { MarkEnum, Response } from '@api/types';

export const markPost = async ({
  postId,
  mark,
}: {
  postId: string;
  mark: MarkEnum;
}): Promise<{ mark: MarkEnum }> => {
  try {
    const { data } = await api.post<Response<{ mark: MarkEnum }>>(
      `/snippets/${postId}/mark`,
      { mark }
    );

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
