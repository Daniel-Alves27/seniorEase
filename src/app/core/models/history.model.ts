export type HistoryType =
  | 'create'
  | 'update'
  | 'delete'
  | 'complete'
  | 'profile';

export interface History {
  id: string;
  type: HistoryType;
  title: string;
  createdAt: string;
}
