export interface Client {
  id: string;
  name: string;
  age?: number | null;
  weight?: number | null;
  height?: number | null;
  goal: string;
  experience?: string | null;
  injuries?: string | null;
  training_place?: string | null;
  training_days?: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  status: 'new' | 'active' | 'paused' | 'finished';
  created_at: string;
}