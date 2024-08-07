/*
Portfolio Management System
In a portfolio management system, you might manage different types of assets 
such as stocks, bonds, and real estate properties. 
To handle these various asset types efficiently, you can use generics to create a flexible 
and reusable component for managing the portfolio. 
*/
export {}

interface Stock {
  ticker: string;
  shares: number;
  pricePerShare: number;
}

interface Bond {
  bondName: string;
  faceValue: number;
  interestRate: number;
}

interface RealEstate {
  propertyName: string;
  location: string;
  value: number;
}


// create a generic class to manage these assets
class Portfolio<T> {
  private assets: T[] = [];

  addAsset(asset: T): void {
    this.assets.push(asset);
  }

  getAssets(): T[] {
    return this.assets;
  }

  // Example method to calculate total value for assets with value property
  calculateTotalValue(valueSelector: (asset: T) => number): number {
    return this.assets.reduce((total, asset) => total + valueSelector(asset), 0);
  }
}

// create instances of the Portfolio class for different asset types
const stockPortfolio = new Portfolio<Stock>();
stockPortfolio.addAsset({ ticker: 'AAPL', shares: 10, pricePerShare: 150 });
stockPortfolio.addAsset({ ticker: 'GOOGL', shares: 5, pricePerShare: 2000 });

const bondPortfolio = new Portfolio<Bond>();
bondPortfolio.addAsset({ bondName: 'US Treasury', faceValue: 1000, interestRate: 1.5 });
bondPortfolio.addAsset({ bondName: 'Corporate Bond', faceValue: 5000, interestRate: 2.5 });

const realEstatePortfolio = new Portfolio<RealEstate>();
realEstatePortfolio.addAsset({ propertyName: 'Downtown Office', location: 'NYC', value: 1000000 });
realEstatePortfolio.addAsset({ propertyName: 'Beach House', location: 'LA', value: 2000000 });

// Use the calculateTotalValue method to calculate the total value of the assets in each portfolio
const totalStockValue = stockPortfolio.calculateTotalValue(stock => stock.shares * stock.pricePerShare);
console.log(`Total Stock Value: $${totalStockValue}`);

const totalBondValue = bondPortfolio.calculateTotalValue(bond => bond.faceValue);
console.log(`Total Bond Value: $${totalBondValue}`);

const totalRealEstateValue = realEstatePortfolio.calculateTotalValue(property => property.value);
console.log(`Total Real Estate Value: $${totalRealEstateValue}`);

/* Output:
Total Stock Value: $11500
Total Bond Value: $6000
Total Real Estate Value: $3000000
*/
