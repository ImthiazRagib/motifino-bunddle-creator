import React from 'react'

const ImageSelectable = ({ image, label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-2 rounded-xl border bg-white px-3 py-3 text-xs shadow-sm transition ${
        selected
          ? 'border-slate-900 ring-2 ring-slate-900/60'
          : 'border-slate-200 hover:border-slate-400'
      }`}
    >
      <div className="flex h-16 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={label}
            className="h-full w-full object-contain"
          />
        ) : (
          <svg
            viewBox="0 0 160 40"
            className="h-8 w-full text-slate-300"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="8"
              width="152"
              height="24"
              rx="12"
              className="fill-current"
            />
          </svg>
        )}
      </div>
      {label && (
        <span
          className={`truncate ${
            selected ? 'font-semibold text-slate-900' : 'text-slate-600'
          }`}
        >
          {label}
        </span>
      )}
    </button>
  )
}

export default ImageSelectable

