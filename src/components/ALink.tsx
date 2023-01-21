import { ComponentPropsWithoutRef } from 'react'

export const ALink = (props: ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      className="text-teal-500 hover:text-teal-600 hover:underline dark:hover:text-teal-400"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {props.children}
    </a>
  )
}
