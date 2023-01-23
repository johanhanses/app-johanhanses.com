import { CvSkills } from '@/interface'

export const Skills = ({ data }: { data: CvSkills }) => (
  <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">Skills</h2>
      <div className="md:col-span-3">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Programming:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.programming}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Frontend:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.frontend}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Backend:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.backend}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Databases:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.db}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Tooling:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.tools}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Testing:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.test}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Server:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.server}</p>
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          Other:
        </h3>
        <p className="mt-1 mb-3 text-sm text-zinc-600 dark:text-zinc-400">{data.other}</p>
      </div>
    </div>
  </section>
)
