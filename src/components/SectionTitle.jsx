export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}