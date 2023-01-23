import { CvWork } from '@/interface'

export const Work = ({ data }: { data: CvWork[] }) => (
  <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Work experience</h2>
      <div className="md:col-span-3">
        <div className="space-y-16">
          {data.map((w, i) => (
            <article
              key={i}
              className="flex flex-col items-start"
            >
              <p className="relative mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                {w.date}
              </p>
              <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                {w.employee}
              </h3>
              <i className="mt-1 flex items-center text-sm font-medium text-teal-500">
                {w.position}
              </i>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{w.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)
