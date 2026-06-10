import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "agashka.powerlifting - Силовая подготовка в Казахстане",
  description:
    "Персональные тренировки по жиму лёжа, пауэрлифтингу и оздоровительной силовой подготовке. Для мужчин и женщин 40+. Здоровье плеч, коленей и поясницы.",
  keywords:
    "пауэрлифтинг, силовая подготовка, жим лёжа, тренер Казахстан, здоровье суставов, тренировки 40+",
  openGraph: {
    title: "agashka.powerlifting",
    description: "Силовая подготовка. Казахстан.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">{children}</body>
    </html>
  );
}
