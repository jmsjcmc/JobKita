import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import { JOB_TYPES } from "../../../utils/data";
import SalaryRangeSlider from "../../../components/input/SalaryRangeSlider";

export default function FilterContent({
  toggleSection,
  clearAllFilters,
  expandedSections,
  filters,
  handleFilterChange,
}) {
  const FilterSection = ({ title, children, isExpanded, onToggle }) => (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors"
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isExpanded && children}
    </div>
  );
  return (
    <>
      <div className="">
        <button onClick={clearAllFilters} className="">
          Clear All
        </button>
      </div>
      <FilterSection
        title={"Job Type"}
        isExpanded={expandedSections?.jobType}
        onToggle={() => toggleSection("jobType")}
      >
        <div className="">
        {JOB_TYPES.map((type) => {
          <label key={type.value} className="">
            <input
              type="checkbox"
              className=""
              checked={filters?.type === type.value}
              onChange={(e) =>
                handleFilterChange("type", e.target.checked ? type.value : "")
              }
            />
            <span className="">{type.value}</span>
          </label>;
        })}
      </div>
      </FilterSection>
      
      <FilterSection 
      title={'Salary Range'}
      isExpanded={expandedSections.salary}
      onToggle={() => toggleSection('salary')}>
        <SalaryRangeSlider />
      </FilterSection>
    </>
  );
}
