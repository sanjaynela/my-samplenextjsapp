import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const countries = await res.json();
    return NextResponse.json(countries);
  } catch (error) {
    console.error('API route error:', error);
    // Return fallback data
    return NextResponse.json([
      { cca3: 'USA', name: { common: 'United States' } },
      { cca3: 'GBR', name: { common: 'United Kingdom' } },
      { cca3: 'CAN', name: { common: 'Canada' } },
      { cca3: 'AUS', name: { common: 'Australia' } },
      { cca3: 'DEU', name: { common: 'Germany' } }
    ]);
  }
} 