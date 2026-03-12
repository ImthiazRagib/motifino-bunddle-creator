import React from 'react'

const StrapPreviewRow = ({ strapImage, muted = false }) => {
  return (
    <div className={`flex items-center gap-4 ${muted ? 'opacity-60' : ''}`}>
      <div className="relative flex-1 overflow-hidden rounded-xl bg-white shadow-sm py-4">
        <img
          src={strapImage}
          alt="Strap"
          className="w-full max-h-24 object-cover"
        />
      </div>
    </div>
  )
}

export default StrapPreviewRow

