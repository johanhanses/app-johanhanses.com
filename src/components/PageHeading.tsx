import { ReactNode } from 'react'

export const PageHeading = ({ children }: { children: ReactNode }) => (
  <h1 className="mb-8 text-3xl font-black md:text-5xl">{children}</h1>
)
