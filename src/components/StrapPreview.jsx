import React from 'react'
import StrapPreviewRow from './StrapPreviewRow'
import { bundleVisuals } from '../data/bundleVisuals'

const StrapPreview = ({ selectedId }) => {
  const activeBundle = bundleVisuals.find((b) => b.id === selectedId) ?? bundleVisuals[0]
  const secondaryBundle =
    bundleVisuals.find((b) => b.id !== activeBundle.id) ?? activeBundle

  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-6 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 px-6 py-8">
      <StrapPreviewRow strapImage={activeBundle.strapImage} />
      <StrapPreviewRow strapImage={secondaryBundle.strapImage} muted />
    </div>
  )
}

export default StrapPreview

