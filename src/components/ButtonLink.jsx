import React from 'react'

export const ButtonLink = ({content}) => {
  return (
    <a
      className="w-fit inline-block rounded border border-primary-100 bg-primary-100 px-6 py-2 md:px-12 md:py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary-100 focus:outline-none focus:ring active:text-primary-100"
      href="/download"
    >
      {content}
    </a>
  )
}
