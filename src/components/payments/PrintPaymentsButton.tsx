'use client';

export default function PrintPaymentsButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-lg bg-accent-gold px-5 py-3 text-sm font-bold uppercase text-white hover:bg-accent-gold-light"
    >
      Печатный отчёт
    </button>
  );
}
