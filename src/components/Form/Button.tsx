import { ComponentPropsWithoutRef } from 'react'

export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className="flex w-full items-center justify-center rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
      {...props}
    />
  )
}
