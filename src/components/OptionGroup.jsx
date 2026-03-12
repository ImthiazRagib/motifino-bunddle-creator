import React from 'react'
import OptionSwatch from './OptionSwatch'

const OptionGroup = ({ title, description, options, value, onChange }) => {
  return (
    <section className="flex flex-col gap-3">
      <header className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-xs text-slate-500">{description}</p>
          )}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {options.map((opt) => (
          <OptionSwatch
            key={opt.id}
            label={opt.label}
            color={opt.color}
            subtitle={opt.subtitle}
            selected={value === opt.id}
            onClick={() => onChange(opt)}
          />
        ))}
      </div>
    </section>
  )
}

export default OptionGroup

