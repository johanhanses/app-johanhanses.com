import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { ComponentPropsWithoutRef, useState } from 'react'

export const Input = (
  props: ComponentPropsWithoutRef<'input'> & { toggleVisibility?: boolean }
) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <div className="relative">
      <label
        aria-label={props.name}
        aria-hidden="true"
        className="block"
      >
        <input
          type={props.toggleVisibility && !passwordVisible ? 'password' : 'text'}
          className="placeholder:text-zinc-40 w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          {...props}
        />
      </label>
      {props.toggleVisibility && (
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute top-2.5 right-3 transition-colors duration-200 hover:text-yellow"
        >
          {passwordVisible && <EyeSlashIcon className="h-4 w-4" />}
          {!passwordVisible && <EyeIcon className="h-4 w-4" />}
        </button>
      )}
    </div>
  )
}
