export type Client = {
  id: string;
  name: string;
  age?: number | null;
  weight?: number | null;
  goal?: string | null;
  limitations?: string | null;
};

export type Exercise = {
  name: string;
  sets: number | string;
  reps: string;
  weight?: string | number | null;
  percent?: string | number | null;
  rest?: string | null;
  notes?: string | null;
  imageUrl?: string | null;
};

export type TrainingDay = {
  dayName: string;
  focus?: string | null;
  exercises: Exercise[];
};

export type TrainingWeek = {
  weekNumber: number;
  days: TrainingDay[];
};

export type TrainingPlan = {
  id: string;
  title: string;
  client: Client;
  startDate?: string | null;
  endDate?: string | null;
  coachNotes?: string | null;
  weeks: TrainingWeek[];
};
