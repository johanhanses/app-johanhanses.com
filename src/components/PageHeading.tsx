import { ReactNode } from 'react'

export const PageHeading = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => <h1 className={`mb-8 text-3xl font-black md:text-5xl ${className}`}>{children}</h1>
