import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react'

export default function FilterContent({
    toggleSection,
    clearAllFilters,
    expandedSections,
    filters,
    handleFilterChange
}) {
    const FilterSection = ({
        title, children, isExpanded, onToggle
    }) => (
        <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
            <button onClick={onToggle} className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {title}
                {isExpanded ? (
                    <ChevronUp className='w-4 h-4'/>
                ) : (
                    <ChevronDown className='w-4 h-4'/>
                )}
            </button>
            {isExpanded && children}
        </div>
    );
  return (
    <div>FilterContent</div>
  )
}
