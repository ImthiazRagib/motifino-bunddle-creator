import React from 'react'
import OptionGroup from './OptionGroup'

const StrapOptions = ({
  fullGrainOptions,
  suedeOptions,
  veganOptions,
  fullGrainSelection,
  suedeSelection,
  veganSelection,
  onSelectFullGrain,
  onSelectSuede,
  onSelectVegan,
}) => {
  return (
    <div className="space-y-6">
      <OptionGroup
        title="Full grain leather"
        description="Rich colors with subtle texture."
        options={fullGrainOptions}
        value={fullGrainSelection.id}
        onChange={onSelectFullGrain}
      />

      <OptionGroup
        title="Suede leather"
        description="Soft-touch strap for a warmer look."
        options={suedeOptions}
        value={suedeSelection.id}
        onChange={onSelectSuede}
      />

      <OptionGroup
        title="100% vegan kaktus"
        description="Plant-based material with a premium feel."
        options={veganOptions}
        value={veganSelection.id}
        onChange={onSelectVegan}
      />
    </div>
  )
}

export default StrapOptions

