export type TariffCode = 'free_lesson' | 'plan_month' | 'plan_12_weeks' | 'competition_16_weeks' | 'full_online_month';

export type PaymentStatus = 'active' | 'expired' | 'pause';

export type PaymentSource = 'kaspi' | 'cash' | 'bank_transfer' | 'other';

export type ClientPayment = {
  id: string;
  clientId: string;
  clientName: string;
  whatsapp?: string | null;
  instagram?: string | null;
  tariff: TariffCode;
  tariffName: string;
  amount: number;
  currency: 'KZT';
  paid: boolean;
  paymentDate?: string | null;
  startDate: string;
  endDate: string;
  pauseUntil?: string | null;
  source?: PaymentSource | null;
  notes?: string | null;
};

export type PaymentSummary = {
  total: number;
  paid: number;
  active: number;
  expired: number;
  pause: number;
  unpaid: number;
  revenue: number;
};
