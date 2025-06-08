import React from 'react';

async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all');
    if (!res.ok) {
      throw new Error('Failed to fetch countries');
    }
    const countries = await res.json();
    return countries;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return []; // Return empty array as fallback
  }
}

export default async function Countries() {
  const countries = await getCountries();

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Countries of the World</h2>
      <ul className="space-y-2">
        {Array.isArray(countries) && countries.slice(0, 10).map((country: any) => (
          <li key={country.cca3} className="text-gray-600">
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
} 