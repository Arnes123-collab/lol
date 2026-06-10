export type TrainingReportStatus = 'completed' | 'not_completed' | 'partial';

export type PainZone = 'none' | 'shoulder' | 'elbow' | 'wrist' | 'lower_back' | 'knee' | 'hip' | 'other';

export type WorkingSetReport = {
  id: string;
  exerciseName: string;
  weight: string;
  sets: string;
  reps: string;
  rpe?: string;
};

export type ClientTrainingReport = {
  id: string;
  clientName: string;
  whatsapp?: string;
  trainingDate: string;
  planTitle?: string;
  trainingDay?: string;
  status: TrainingReportStatus;
  bodyweight?: string;
  mood: number;
  energy: number;
  painLevel: number;
  painZone: PainZone;
  workingSets: WorkingSetReport[];
  coachQuestion?: string;
  clientComment?: string;
  videoUrl?: string;
  createdAt: string;
};
