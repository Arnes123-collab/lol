"use client";

import { useState } from "react";
import { useSiteContent } from "@/lib/site-content/useSiteContent";

type FormData = {
  name: string;
  age: string;
  weight: string;
  height: string;
  goal: string;
  experience: string;
  injuries: string;
  location: string;
  frequency: string;
  whatsapp: string;
  instagram: string;
};

const initialForm: FormData = {
  name: "",
  age: "",
  weight: "",
  height: "",
  goal: "",
  experience: "",
  injuries: "",
  location: "",
  frequency: "",
  whatsapp: "",
  instagram: "",
};

const locationOptions = [
  { value: "gym", label: "Тренажёрный зал" },
  { value: "home", label: "Дом" },
  { value: "both", label: "Зал и дома" },
];

const frequencyOptions = [
  { value: "2", label: "2 раза в неделю" },
  { value: "3", label: "3 раза в неделю" },
  { value: "4", label: "4 раза в неделю" },
  { value: "5+", label: "5+ раз в неделю" },
];

const inputClass =
  "w-full bg-[#FFFFFF] border border-[#E5DED3] text-[#222222] font-body text-sm px-4 py-3 placeholder-[#D8D0C4] focus:outline-none focus:border-[#C62828] transition-colors duration-200";

const labelClass =
  "block font-display text-[#666666] text-xs tracking-[0.2em] uppercase mb-2";

export default function ApplicationForm() {
  const { content } = useSiteContent();
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Ошибка отправки");

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Что-то пошло не так. Напишите нам в WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <section id="form" className="section-padding bg-[#F8F4EC]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 border-2 border-[#C62828] flex items-center justify-center mx-auto mb-6">
            <svg className="text-[#C62828]" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="font-display text-[#222222] text-3xl uppercase mb-4">
            Заявка отправлена!
          </h2>
          <p className="font-body text-[#666] mb-8">
            Я свяжусь с тобой в течение 24 часов по WhatsApp.
            Если хочешь — можешь написать сам прямо сейчас.
          </p>
          <a
            href={content.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-sm tracking-[0.15em] uppercase px-8 py-4 bg-[#C62828] text-white hover:bg-[#E53935] transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="section-padding bg-[#F8F4EC]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C62828]" />
            <span className="font-display text-[#C62828] text-xs tracking-[0.3em] uppercase">
              Записаться
            </span>
          </div>
          <h2
            className="font-display text-[#222222] uppercase"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Оставь заявку —
            <br />
            <span className="text-[#C62828]">начнём вместе</span>
          </h2>
          <p className="font-body text-[#666666] mt-4">
            {content.freeLessonText}. Заполни форму — я свяжусь в течение 24 часов.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name + Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Имя *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Как тебя зовут?"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Возраст *</label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                required
                placeholder="Полных лет"
                min={16}
                max={80}
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2: Weight + Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Вес (кг) *</label>
              <input
                type="number"
                name="weight"
                value={form.weight}
                onChange={handleChange}
                required
                placeholder="Ваш вес"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Рост (см) *</label>
              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                required
                placeholder="Ваш рост"
                className={inputClass}
              />
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className={labelClass}>Цель тренировок *</label>
            <textarea
              name="goal"
              value={form.goal}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Что хочешь достичь? (пример: жать 100 кг, убрать боль в спине, похудеть)"
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Experience */}
          <div>
            <label className={labelClass}>Опыт тренировок</label>
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleChange}
              rows={2}
              placeholder="Сколько тренируешься? Какие упражнения делаешь?"
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Injuries */}
          <div>
            <label className={labelClass}>Боли / травмы</label>
            <textarea
              name="injuries"
              value={form.injuries}
              onChange={handleChange}
              rows={2}
              placeholder="Есть боли в суставах, травмы или операции? Если нет — напиши 'нет'"
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Location */}
          <div>
            <label className={labelClass}>Где тренируешься *</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className={inputClass + " cursor-pointer"}
            >
              <option value="" disabled>Выбери вариант</option>
              {locationOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Frequency */}
          <div>
            <label className={labelClass}>Сколько раз в неделю готов тренироваться *</label>
            <select
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              required
              className={inputClass + " cursor-pointer"}
            >
              <option value="" disabled>Выбери вариант</option>
              {frequencyOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>WhatsApp *</label>
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
                placeholder="+7 777 000 00 00"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Instagram</label>
              <input
                type="text"
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                placeholder="@username (необязательно)"
                className={inputClass}
              />
            </div>
          </div>

          {/* Error */}
          {status === "error" && (
            <p className="font-body text-[#CC2200] text-sm">{errorMsg}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full font-display text-sm tracking-[0.2em] uppercase px-8 py-4 bg-[#C62828] text-white hover:bg-[#E53935] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
          >
            {status === "loading" ? "Отправляю..." : "Отправить заявку →"}
          </button>

          <p className="text-center font-body text-[#D8D0C4] text-xs">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
            <br />
            Данные используются только для связи с тренером.
          </p>
        </form>
      </div>
    </section>
  );
}
