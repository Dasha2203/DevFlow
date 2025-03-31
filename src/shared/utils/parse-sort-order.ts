import { SortOrder, SortParam } from '@api/types';

export const parseSortParam = (sortString: string): SortParam | undefined => {
  const [field, order] = sortString.split(':') as [string, string];

  if (order in SortOrder) {
    return [field, order as SortOrder];
  }

  return undefined;
};
