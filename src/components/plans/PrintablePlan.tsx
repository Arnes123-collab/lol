'use client';

export default function PrintablePlan() {
  return (
    <button onClick={() => window.print()} className="rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-sm font-bold uppercase text-white hover:bg-zinc-800">
      Печатный вид
    </button>
  );
}
