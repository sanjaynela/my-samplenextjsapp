import React from 'react';

// Add cache: 'no-store' to prevent caching and ensure fresh data
async function getCountries() {
  try {
    // Use only revalidate for caching strategy
    const res = await fetch('https://restcountries.com/v3.1/all', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const countries = await res.json();
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Return fallback data
    return [
      { cca3: 'USA', name: { common: 'United States' } },
      { cca3: 'GBR', name: { common: 'United Kingdom' } },
      { cca3: 'CAN', name: { common: 'Canada' } },
      { cca3: 'AUS', name: { common: 'Australia' } },
      { cca3: 'DEU', name: { common: 'Germany' } }
    ];
  }
}

export default async function Countries() {
  const countries = await getCountries();
  console.log('Countries in component:', countries.length); // Debug log

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Countries of the World</h2>
      {countries.length === 0 ? (
        <div>
          <p className="text-gray-600">Loading countries...</p>
          <p className="text-sm text-gray-500 mt-2">If this message persists, there might be an issue with the API.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {countries.slice(0, 10).map((country: any) => (
            <li key={country.cca3} className="text-gray-600">
              {country.name.common}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 