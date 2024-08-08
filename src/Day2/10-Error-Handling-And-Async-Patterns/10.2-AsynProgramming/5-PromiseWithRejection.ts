// Function to simulate book delivery
function deliverBook(isDelivered: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isDelivered) {
        // Book delivered successfully
        resolve('Book delivered. Amount debited from credit card.');
      } else {
        // Book not delivered
        reject('Book not delivered. No charge made.');
      }
    }, Math.random() * 2000 + 1); // Maxiumum delay of 2 seconds
  });
}

/* // set to true, to resolve the promise
let isBookDelivered = true; 
deliverBook(isBookDelivered)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Changed to false, to test rejection
isBookDelivered = false;
deliverBook(isBookDelivered)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  }); */


// Using async/await to handle a Promise
async function orderAndDeliverBook(isDelivered: boolean) {
  try {
    console.log(`Ordering a book with... ${isDelivered}`);
    const result = await deliverBook(isDelivered);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// the below code not synchronized
// orderAndDeliverBook(true); // This should resolve and print success message
// orderAndDeliverBook(false); // This should reject and print error message

async function syncOrder() {
  await orderAndDeliverBook(true); // This should resolve and print success message
  await orderAndDeliverBook(false); // This should reject and print error message
}

// this is synchronized call
syncOrder()

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
sleep(2000);

export { };
