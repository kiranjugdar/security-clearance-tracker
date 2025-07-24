// src/components/HeaderBar.tsx
import React from 'react';

export const HeaderBar: React.FC = () => (
  <header className="bg-white border-b border-gray-200 shadow-sm">
    <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-semibold text-gray-900">
        Security Clearance Tracker
      </h1>
      <div className="space-x-2">
        {/* example selectors in top‐right */}
        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">
          Top Secret
        </button>
        <button className="px-3 py-1 rounded-md text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100">
          Initiated
        </button>
      </div>
    </div>
  </header>
);
