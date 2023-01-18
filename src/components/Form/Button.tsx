import { ComponentPropsWithoutRef } from 'react'

export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className="inline-flex w-full items-center justify-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-base font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
      {...props}
    />
  )
}
