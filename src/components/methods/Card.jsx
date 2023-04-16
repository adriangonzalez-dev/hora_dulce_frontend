import React from 'react'

export const Card = ({title, description, icon}) => {
  return (
      <div
          className="relative block rounded-sm border-t-4 border-primary-100 w-full md:w-1/3 p-4 shadow-xl sm:p-3 lg:p-4"
      >
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined">
                {icon}
            </span>

              <h3 className="text-xl font-bold">{title}</h3>
          </div>

          <p className="mt-2 font-medium text-gray-500">
              {description}
          </p>
      </div>

  
  )
}
