interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}

export default function SectionHeading({ eyebrow, title, description, tone = 'light' }: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={isDark ? 'eyebrow text-gold-300' : 'eyebrow'}>{eyebrow}</p>
      <h2
        className={`mt-5 font-display text-4xl font-light leading-[1.15] sm:text-5xl ${
          isDark ? 'text-cream-50' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${isDark ? 'text-cream-200/85' : 'text-ink-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
