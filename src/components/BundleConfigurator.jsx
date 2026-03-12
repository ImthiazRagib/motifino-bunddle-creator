import React, { useMemo, useState } from 'react'
import StrapPreview from './StrapPreview'
import PriceBar from './PriceBar'
import StrapOptions from './StrapOptions'
import ImageSelectable from './ImageSelectable'
import { bundleVisuals } from '../data/bundleVisuals'
import DropdownItem from './dropdown'

const FULL_GRAIN = [
    { id: 'black', label: 'Black', color: '#111827', subtitle: 'Buffalo' },
    { id: 'dark-brown', label: 'Dark Brown', color: '#4b2e18' },
    { id: 'chestnut', label: 'Chestnut', color: '#b45309' },
    { id: 'cognac', label: 'Cognac', color: '#d97757' },
    { id: 'tan', label: 'Tan', color: '#eab882' },
    { id: 'sand', label: 'Sand', color: '#e5d5b5' },
]

const SUEDE = [
    { id: 'suede-black', label: 'Charcoal', color: '#1f2933' },
    { id: 'suede-brown', label: 'Mocha', color: '#5d3b2e' },
]

const VEGAN = [
    { id: 'kaktus-green', label: 'Kaktus Green', color: '#167b5b', subtitle: 'Vegan' },
    { id: 'kaktus-sand', label: 'Kaktus Sand', color: '#d7c4a1', subtitle: 'Vegan' },
]

const BundleConfigurator = () => {
    const [fullGrainSelection, setFullGrainSelection] = useState(FULL_GRAIN[0])
    const [suedeSelection, setSuedeSelection] = useState(SUEDE[0])
    const [veganSelection, setVeganSelection] = useState(VEGAN[0])
    const [quantity, setQuantity] = useState(1)
    const [selectedBundleId, setSelectedBundleId] = useState(bundleVisuals[0]?.id)

    const primaryColor = fullGrainSelection.color
    const secondaryColor = useMemo(
        () => (suedeSelection ? suedeSelection.color : fullGrainSelection.color),
        [suedeSelection, fullGrainSelection],
    )

    const basePrice = 158
    const discountedPrice = useMemo(() => basePrice * 0.85 * quantity, [basePrice, quantity])

    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl bg-white/80 p-4 shadow-xl ring-1 ring-slate-200/80 backdrop-blur-sm sm:p-6 lg:flex-row lg:gap-8 lg:p-8">
                <section className="lg:w-1/2">
                    <div className="mb-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                        <span>1. Strap</span>
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                            Black Buffalo Leather
                        </span>
                    </div>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
                        <StrapPreview selectedId={selectedBundleId} />
                    </div>

                    <PriceBar
                        basePrice={basePrice}
                        discountedPrice={discountedPrice}
                        quantity={quantity}
                        onQuantityChange={setQuantity}
                    />
                </section>

                <section className="flex flex-col space-y-4 w-full">
                    <DropdownItem title="1. Strap" subtitle="choose strap" options={bundleVisuals} selectedId={selectedBundleId} setSelectedId={setSelectedBundleId} />
                </section>
            </div>
        </main>
    )
}

export default BundleConfigurator

