'use client';

import { useMemo, useState } from 'react';
import type { ClientPayment, PaymentStatus, TariffCode } from '@/types/payment';
import {
  buildPaymentSummary,
  daysLeft,
  formatDate,
  formatMoney,
  getClientPaymentStatus,
  statusClass,
  statusLabel,
  tariffLabels,
} from '@/lib/payments/paymentUtils';

type FilterStatus = 'all' | PaymentStatus | 'unpaid';
type FilterTariff = 'all' | TariffCode;

type Props = {
  payments: ClientPayment[];
  dataSource?: 'demo' | 'supabase';
};

export default function PaymentsDashboard({ payments, dataSource = 'demo' }: Props) {
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
  const [tariffFilter, setTariffFilter] = useState<FilterTariff>('all');
  const [search, setSearch] = useState('');

  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return payments.filter((payment) => {
      const status = getClientPaymentStatus(payment);
      const matchesSearch =
        !query ||
        payment.clientName.toLowerCase().includes(query) ||
        payment.whatsapp?.toLowerCase().includes(query) ||
        payment.instagram?.toLowerCase().includes(query);
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'unpaid' ? !payment.paid : status === statusFilter);
      const matchesTariff = tariffFilter === 'all' || payment.tariff === tariffFilter;

      return matchesSearch && matchesStatus && matchesTariff;
    });
  }, [payments, search, statusFilter, tariffFilter]);

  const summary = useMemo(() => buildPaymentSummary(payments), [payments]);

  function copyClientStatus(payment: ClientPayment) {
    const status = getClientPaymentStatus(payment);
    const left = daysLeft(payment.endDate);
    const text = [
      `Клиент: ${payment.clientName}`,
      `Тариф: ${payment.tariffName}`,
      `Оплата: ${payment.paid ? 'оплачено' : 'не оплачено'}`,
      `Статус: ${statusLabel(status)}`,
      `Период: ${formatDate(payment.startDate)} - ${formatDate(payment.endDate)}`,
      `Осталось дней: ${left >= 0 ? left : 0}`,
      payment.notes ? `Комментарий: ${payment.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(text);
    alert('Статус клиента скопирован');
  }

  return (
    <div className="space-y-6">
      {dataSource === 'demo' && (
        <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          Сейчас показаны демо-данные. Архитектура подготовлена так, чтобы на следующем шаге подключить таблицу оплат в Supabase.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <SummaryCard label="Клиентов" value={summary.total} />
        <SummaryCard label="Оплатили" value={summary.paid} />
        <SummaryCard label="Активные" value={summary.active} accent="green" />
        <SummaryCard label="Просрочены" value={summary.expired} accent="red" />
        <SummaryCard label="Пауза" value={summary.pause} accent="yellow" />
        <SummaryCard label="Выручка" value={formatMoney(summary.revenue)} />
      </div>

      <div className="bg-bg-card border border-border-default rounded-xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-3 no-print">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Поиск: имя, WhatsApp, Instagram"
          className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 text-sm outline-none focus:border-accent-gold"
        />
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value as FilterStatus)}
          className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 text-sm outline-none focus:border-accent-gold"
        >
          <option value="all">Все статусы</option>
          <option value="active">Активен</option>
          <option value="expired">Просрочен</option>
          <option value="pause">Пауза</option>
          <option value="unpaid">Не оплатил</option>
        </select>
        <select
          value={tariffFilter}
          onChange={(event) => setTariffFilter(event.target.value as FilterTariff)}
          className="w-full rounded-lg bg-bg-secondary border border-border-default px-4 py-3 text-sm outline-none focus:border-accent-gold"
        >
          <option value="all">Все тарифы</option>
          {Object.entries(tariffLabels).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      <div className="bg-bg-card border border-border-default rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left text-sm">
            <thead className="bg-bg-secondary text-text-muted uppercase text-[11px]">
              <tr>
                <th className="p-4">Клиент</th>
                <th className="p-4">Оплата</th>
                <th className="p-4">Тариф</th>
                <th className="p-4">Начало</th>
                <th className="p-4">Окончание</th>
                <th className="p-4">Осталось</th>
                <th className="p-4">Статус</th>
                <th className="p-4">Контакт</th>
                <th className="p-4 no-print">Действие</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {filteredPayments.map((payment) => {
                const status = getClientPaymentStatus(payment);
                const left = daysLeft(payment.endDate);
                return (
                  <tr key={payment.id} className="hover:bg-bg-secondary/40">
                    <td className="p-4">
                      <div className="font-bold text-text-primary">{payment.clientName}</div>
                      {payment.notes && <div className="text-xs text-text-muted mt-1 max-w-xs">{payment.notes}</div>}
                    </td>
                    <td className="p-4">
                      <div className={payment.paid ? 'text-green-300 font-bold' : 'text-red-300 font-bold'}>
                        {payment.paid ? 'Оплатил' : 'Не оплатил'}
                      </div>
                      <div className="text-xs text-text-muted">{formatDate(payment.paymentDate)}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-bold">{payment.tariffName}</div>
                      <div className="text-xs text-accent-gold">{formatMoney(payment.amount)}</div>
                    </td>
                    <td className="p-4">{formatDate(payment.startDate)}</td>
                    <td className="p-4">{formatDate(payment.endDate)}</td>
                    <td className="p-4">
                      <span className={left <= 2 ? 'text-red-300 font-bold' : 'font-bold'}>{left >= 0 ? left : 0} дн.</span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${statusClass(status)}`}>
                        {statusLabel(status)}
                      </span>
                    </td>
                    <td className="p-4 text-xs">
                      {payment.whatsapp && <div>WA: {payment.whatsapp}</div>}
                      {payment.instagram && <div>IG: {payment.instagram}</div>}
                    </td>
                    <td className="p-4 no-print">
                      <button
                        onClick={() => copyClientStatus(payment)}
                        className="rounded-lg border border-accent-gold px-3 py-2 text-xs font-bold text-accent-gold hover:bg-accent-gold hover:text-white transition-colors"
                      >
                        Скопировать статус
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="p-8 text-center text-text-muted">По этим фильтрам клиентов нет.</div>
        )}
      </div>
    </div>
  );
}

function SummaryCard({ label, value, accent }: { label: string; value: string | number; accent?: 'green' | 'red' | 'yellow' }) {
  const accentClass = accent === 'green' ? 'text-green-300' : accent === 'red' ? 'text-red-300' : accent === 'yellow' ? 'text-yellow-300' : 'text-accent-gold';
  return (
    <div className="rounded-xl bg-bg-card border border-border-default p-4">
      <div className="text-[11px] uppercase text-text-muted">{label}</div>
      <div className={`mt-2 text-2xl font-display font-bold ${accentClass}`}>{value}</div>
    </div>
  );
}
