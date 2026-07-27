export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  category: 'health' | 'study' | 'work' | 'personal';
  updatedAt?: string;
  completedAt?: string;
}
