import { ReactNode } from 'react'

export const TextBlock = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <div
    className={`mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg ${className}`}
  >
    {children}
  </div>
)
