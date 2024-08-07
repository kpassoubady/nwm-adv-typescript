/*
Real Estate Example: Generic Property Listing
In a real estate application, you might deal with various types of properties 
such as houses, apartments, and commercial spaces. 
You can use generics to handle different property listings uniformly.
*/
export {}

// Define a generic interface for property listings
interface PropertyListing<T> {
  price: number;
  location: string;
  details: T;
}

// Define specific property details
interface HouseDetails {
  numberOfBedrooms: number;
  hasGarden: boolean;
}

interface ApartmentDetails {
  floorNumber: number;
  hasBalcony: boolean;
}

// Generic property listing function
function displayPropertyListing<T>(listing: PropertyListing<T>): void {
  console.log(`Property Price: ${listing.price}`);
  console.log(`Property Location: ${listing.location}`);
  console.log(`Property Details:`, listing.details);
}

// Create specific property listings
const houseListing: PropertyListing<HouseDetails> = {
  price: 300000,
  location: '123 Main St, Springfield',
  details: {
      numberOfBedrooms: 4,
      hasGarden: true
  }
};

const apartmentListing: PropertyListing<ApartmentDetails> = {
  price: 200000,
  location: '456 Elm St, Springfield',
  details: {
      floorNumber: 3,
      hasBalcony: true
  }
};

// Display property listings
displayPropertyListing(houseListing);
displayPropertyListing(apartmentListing);

/* Output:
Property Price: 300000
Property Location: 123 Main St, Springfield
Property Details: { numberOfBedrooms: 4, hasGarden: true }
Property Price: 200000
Property Location: 456 Elm St, Springfield
Property Details: { floorNumber: 3, hasBalcony: true }
*/