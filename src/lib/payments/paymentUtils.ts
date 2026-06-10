import type { ClientPayment, PaymentStatus, PaymentSummary, TariffCode } from '@/types/payment';

export const tariffLabels: Record<TariffCode, string> = {
  free_lesson: 'Бесплатное занятие',
  plan_month: 'План на месяц',
  plan_12_weeks: 'План на 12 недель',
  competition_16_weeks: 'План на 16 недель',
  full_online_month: 'Полное онлайн ведение',
};

export const tariffPrices: Record<TariffCode, number> = {
  free_lesson: 0,
  plan_month: 6000,
  plan_12_weeks: 15000,
  competition_16_weeks: 18000,
  full_online_month: 40000,
};

export function daysLeft(endDate: string, now: Date = new Date()): number {
  const end = new Date(`${endDate}T23:59:59`);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffMs = end.getTime() - startOfToday.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function getClientPaymentStatus(payment: ClientPayment, now: Date = new Date()): PaymentStatus {
  if (payment.pauseUntil) {
    const pauseUntil = new Date(`${payment.pauseUntil}T23:59:59`);
    if (pauseUntil.getTime() >= now.getTime()) return 'pause';
  }

  if (!payment.paid) return 'expired';
  return daysLeft(payment.endDate, now) >= 0 ? 'active' : 'expired';
}

export function statusLabel(status: PaymentStatus): string {
  if (status === 'active') return 'Активен';
  if (status === 'pause') return 'Пауза';
  return 'Просрочен';
}

export function statusClass(status: PaymentStatus): string {
  if (status === 'active') return 'bg-green-50 text-[#2E7D32] border-[#2E7D32]/30';
  if (status === 'pause') return 'bg-yellow-50 text-[#8A6D00] border-[#F9A825]/40';
  return 'bg-red-50 text-[#C62828] border-[#C62828]/30';
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value) + ' тг';
}

export function formatDate(value?: string | null): string {
  if (!value) return '—';
  return new Date(`${value}T00:00:00`).toLocaleDateString('ru-RU');
}

export function buildPaymentSummary(payments: ClientPayment[]): PaymentSummary {
  return payments.reduce<PaymentSummary>(
    (acc, payment) => {
      const status = getClientPaymentStatus(payment);
      acc.total += 1;
      if (payment.paid) acc.paid += 1;
      if (!payment.paid) acc.unpaid += 1;
      if (status === 'active') acc.active += 1;
      if (status === 'expired') acc.expired += 1;
      if (status === 'pause') acc.pause += 1;
      if (payment.paid) acc.revenue += payment.amount;
      return acc;
    },
    { total: 0, paid: 0, active: 0, expired: 0, pause: 0, unpaid: 0, revenue: 0 }
  );
}
