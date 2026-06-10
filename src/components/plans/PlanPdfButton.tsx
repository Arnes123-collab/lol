'use client';

import { useState } from 'react';
import type { TrainingPlan } from '@/types/plan';

declare global {
  interface Window {
    html2canvas?: any;
    jspdf?: { jsPDF: any };
  }
}

function safeFileName(value: string) {
  return value.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-').replace(/^-|-$/g, '') || 'client';
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const exists = document.querySelector(`script[src="${src}"]`);
    if (exists) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Не удалось загрузить ${src}`));
    document.body.appendChild(script);
  });
}

export default function PlanPdfButton({ targetId, plan }: { targetId: string; plan: TrainingPlan }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const downloadPdf = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;
    setLoading(true);
    setError('');
    try {
      await loadScript('https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js');

      if (!window.html2canvas || !window.jspdf?.jsPDF) {
        throw new Error('PDF-библиотеки не загрузились. Проверьте интернет или используйте печать в PDF.');
      }

      const canvas = await window.html2canvas(element, { scale: 2, backgroundColor: '#ffffff', useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new window.jspdf.jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`plan-${safeFileName(plan.client.name)}.pdf`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось скачать PDF');
      window.print();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button onClick={downloadPdf} disabled={loading} className="rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold uppercase text-zinc-950 hover:bg-amber-400 disabled:opacity-60">
        {loading ? 'Готовлю PDF...' : 'Скачать PDF'}
      </button>
      {error && <span className="text-xs text-red-300">{error}</span>}
    </div>
  );
}
