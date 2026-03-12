import React from 'react'

const PriceBar = ({ basePrice, discountedPrice, quantity, onQuantityChange }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 mt-6 border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-sm sm:px-6">
      <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Total
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-slate-400 line-through">
              €{basePrice.toFixed(2)}
            </span>
            <span className="text-xl font-semibold text-slate-900">
              €{discountedPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm">
            <button
              type="button"
              className="h-6 w-6 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            >
              –
            </button>
            <span className="mx-2 w-6 text-center text-xs font-medium text-slate-900">
              {quantity}
            </span>
            <button
              type="button"
              className="h-6 w-6 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-900"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-slate-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceBar

