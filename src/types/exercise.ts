export type ExerciseType = 'Базовое' | 'Подсобное' | 'Реабилитация' | 'Кардио';
export type DifficultyLevel = 'Новичок' | 'Средний' | 'Продвинутый' | 'Элитный';

export interface ExerciseCategory {
  id: string;
  name: string;
  sortOrder: number;
}

export interface ExerciseSubcategory {
  id: string;
  categoryId: string;
  name: string;
}

export interface ExerciseCmsItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  exerciseType: ExerciseType;
  primaryMuscle: string;
  secondaryMuscles: string[];
  equipment: string[];
  difficultyLevel: DifficultyLevel;
  sportTags: string[];
  imageUrl: string;
  gifUrl: string;
  videoUrl: string;
  description: string;
  commonMistakes: string;
  coachTip: string;
  replacementExerciseIds: string[];
  isActive: boolean;
  defaultSets: string;
  defaultReps: string;
  defaultRest: string;
}

export interface Exercise {
  id: string;
  name: string;
  category?: string | null;
  description?: string | null;
  created_at?: string | null;
}
