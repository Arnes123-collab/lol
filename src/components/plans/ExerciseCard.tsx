import Image from 'next/image';
import type { Exercise } from '@/types/plan';

export default function ExerciseCard({ exercise, index }: { exercise: Exercise; index: number }) {
  const imageUrl = exercise.imageUrl || '/exercises/default.jpg';

  return (
    <div className="exercise-card grid grid-cols-1 gap-4 rounded-xl border border-zinc-200 bg-white p-4 text-zinc-900 md:grid-cols-[140px_1fr]">
      <div className="relative h-36 overflow-hidden rounded-lg bg-zinc-100 md:h-full">
        <Image src={imageUrl} alt={exercise.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 140px" />
      </div>
      <div>
        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <h4 className="text-lg font-bold text-zinc-950">{index + 1}. {exercise.name}</h4>
          {exercise.percent ? <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-white">{exercise.percent}</span> : null}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
          <div className="rounded-lg bg-zinc-100 p-2"><span className="block text-xs text-zinc-500">Подходы</span><b>{exercise.sets}</b></div>
          <div className="rounded-lg bg-zinc-100 p-2"><span className="block text-xs text-zinc-500">Повторы</span><b>{exercise.reps}</b></div>
          <div className="rounded-lg bg-zinc-100 p-2"><span className="block text-xs text-zinc-500">Вес</span><b>{exercise.weight || '-'}</b></div>
          <div className="rounded-lg bg-zinc-100 p-2"><span className="block text-xs text-zinc-500">Отдых</span><b>{exercise.rest || '-'}</b></div>
        </div>
        {exercise.notes ? <p className="mt-3 text-sm text-zinc-600"><b>Комментарий тренера:</b> {exercise.notes}</p> : null}
      </div>
    </div>
  );
}
