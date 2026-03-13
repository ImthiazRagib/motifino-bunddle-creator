import React from 'react'
import StrapPreviewRow from './StrapPreviewRow'
import { bundleVisuals } from '../data/bundleVisuals'

const StrapPreview = ({ firstSelectedId, secondSelectedId }) => {
  const firstBundle = bundleVisuals.find((b) => b.id === firstSelectedId) ?? bundleVisuals[0]
  const secondBundle = bundleVisuals.find((b) => b.id === secondSelectedId) ?? bundleVisuals[1]


  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-6 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 px-6 py-8">
      <StrapPreviewRow strapImage={firstBundle.strapImage} />
      <StrapPreviewRow strapImage={secondBundle.strapImage} />
    </div>
  )
}

export default StrapPreview

