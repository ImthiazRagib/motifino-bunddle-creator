import React from 'react'

const OptionSwatch = ({ label, color, selected, onClick, subtitle }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium transition ${
        selected
          ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
          : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400'
      }`}
    >
      <span
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/5 shadow-inner"
        style={{ backgroundColor: color }}
      />
      <span className="leading-tight">{label}</span>
      {subtitle && (
        <span
          className={`text-[10px] ${
            selected ? 'text-slate-200' : 'text-slate-500'
          }`}
        >
          {subtitle}
        </span>
      )}
    </button>
  )
}

export default OptionSwatch

