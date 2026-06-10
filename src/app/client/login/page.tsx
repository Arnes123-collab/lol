import ClientLoginForm from '@/components/client-portal/ClientLoginForm';

export default function ClientLoginPage() {
  return (
    <main className="min-h-screen bg-bg-primary p-6 text-text-primary md:p-10">
      <div className="mx-auto max-w-xl rounded-3xl border border-border-default bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-accent-red">Кабинет клиента</p>
        <h1 className="mt-3 text-3xl font-extrabold">Вход по телефону и коду</h1>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">Введите телефон и код доступа, который выдал тренер. В локальной демоверсии можно использовать демо-клиента: телефон +7 700 000 00 01, код 1111.</p>
        <ClientLoginForm />
      </div>
    </main>
  );
}
