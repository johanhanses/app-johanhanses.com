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
          className="my-0 mb-2 block h-9 w-full rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
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
