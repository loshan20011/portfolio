"use client"
import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b-2 border-white" : "text-gray-500";

  return (
    <button onClick={selectTab}>
        <div className={`px-4 py-2 ${buttonClasses}`}>{children}</div>
    </button>
  )
}

export default TabButton
