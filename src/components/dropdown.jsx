import React from 'react'
import ImageSelectable from './ImageSelectable'


function Dropdown({ title, options, selectedId, setSelectedId }) {
    return (
        <>
            <div className='flex flex-col space-y-4 w-full border border-slate-200 rounded-lg p-8'>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                            {title}
                        </p>
                        <h2 className="mt-1 text-sm font-medium text-slate-900">
                            Select a visual style
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {options?.map((bundle) => (
                        <ImageSelectable
                            key={bundle.id}
                            image={bundle.strapImage}
                            label={bundle.id.replace('bundle-', 'Strap ')}
                            selected={bundle.id === selectedId}
                            onClick={() => setSelectedId(bundle.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


function DropdownItem({ title, subtitle, options, selectedId, setSelectedId }) {

    const [isOpen, setIsOpen] = React.useState(false)


    return (
        <>
            <div className='border border-slate-200 rounded-lg p-4 hover:border-slate-400 transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
                <div className='uppercase flex flex-col space-y-1'>
                    <div className='text-xs font-semibold tracking-[0.22em] text-slate-500'>{title}</div>
                    <div className='text-sm font-medium text-slate-900'>{subtitle}</div>
                </div>
            </div>

            {isOpen && (
                <Dropdown title={title} options={options} selectedId={selectedId} setSelectedId={setSelectedId} />
            )}
        </>
    )
}
export default DropdownItem