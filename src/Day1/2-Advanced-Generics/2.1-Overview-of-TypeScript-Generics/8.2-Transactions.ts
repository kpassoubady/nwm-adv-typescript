/*
Financial Example: Generic Transaction Processor
In a financial application, you might need to process different types of transactions, 
such as deposits, withdrawals, and transfers
*/

// Define a generic interface for transactions
interface Transaction<T> {
  amount: number;
  date: Date;
  details: T;
}

// Define specific transaction details
interface DepositDetails {
  accountNumber: string;
  depositMethod: string;
}

interface WithdrawalDetails {
  accountNumber: string;
  withdrawalMethod: string;
}

// Generic transaction processor function
function processTransaction<T>(transaction: Transaction<T>): void {
  console.log(`Processing transaction of amount: ${transaction.amount}`);
  console.log(`Transaction date: ${transaction.date}`);
  console.log(`Transaction details:`, transaction.details);
}

// Create specific transactions
const depositTransaction: Transaction<DepositDetails> = {
  amount: 1000,
  date: new Date(),
  details: {
      accountNumber: '123456',
      depositMethod: 'Online Transfer'
  }
};

const withdrawalTransaction: Transaction<WithdrawalDetails> = {
  amount: 500,
  date: new Date(),
  details: {
      accountNumber: '123456',
      withdrawalMethod: 'ATM'
  }
};

// Process transactions
processTransaction(depositTransaction);
processTransaction(withdrawalTransaction);

/* Output:
Processing transaction of amount: 1000
Transaction date: Wed Aug 07 2024 09:29:53 GMT-0400 (Eastern Daylight Time)
Transaction details: { accountNumber: '123456', depositMethod: 'Online Transfer' }
Processing transaction of amount: 500
Transaction date: Wed Aug 07 2024 09:29:53 GMT-0400 (Eastern Daylight Time)
Transaction details: { accountNumber: '123456', withdrawalMethod: 'ATM' }
*/