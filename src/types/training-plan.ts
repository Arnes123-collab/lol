import { Client } from './client';
import { Exercise } from './exercise';

export interface TrainingPlan {
  id: string;
  client_id: string;
  title: string;
  goal: string | null;
  start_date: string | null;
  end_date: string | null;
  status: 'draft' | 'active' | 'completed' | 'archived';
  created_at: string;
}

export interface TrainingPlanItem {
  id: string;
  training_plan_id: string;
  exercise_id: string | null;
  exercise?: Exercise | null;
  training_day: string;
  exercise_order: number;
  sets: number | null;
  reps: string | null;
  weight: number | null;
  percent: number | null;
  rest_time: string | null;
  tempo: string | null;
  comment: string | null;
  created_at: string;
}

export interface TrainingPlanWithItems extends TrainingPlan {
  client: Client;
  items: TrainingPlanItem[];
}
