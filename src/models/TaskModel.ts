import type { TaskStateModel } from './TaskStateModels';

export type TaskModel = {
  id: string;
  name: string;
  startDate: number; // Start date in milliseconds
  duration: number; // Duration in minutes
  completeDate: number | null; // Completion date in milliseconds or null
  interruptDate: number | null; // Whether the
  type: keyof TaskStateModel['config']; // Type of task (work, short break, long break)
};
