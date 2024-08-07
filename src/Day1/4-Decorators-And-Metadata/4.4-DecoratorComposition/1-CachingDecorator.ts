export {};
// Dubgging Example - 1
// Logging Decorator
function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Method "${propertyKey}" was called with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method "${propertyKey}" returned:`, result);
    return result;
  };

  return descriptor;
}

// Caching Decorator
function cacheResult(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  const cache = new Map();
  console.log(`${propertyKey} cache: ${cache}`);
  descriptor.value = function(...args: any[]) {
    const cacheKey = `${propertyKey}(${args.join(',')})`;
    if (cache.has(cacheKey)) {
      console.log(`Returning cached result for "${cacheKey}"`);
      return cache.get(cacheKey);
    }

    const result = originalMethod.apply(this, args);
    cache.set(cacheKey, result);
    console.log('cache', cache);
    return result;
  };

  console.log('cache', cache);
  return descriptor;
}

// Example Class
class Calculator {
  @logMethod
  @cacheResult
  sum(x: number, y: number): number {
    return x + y;
  }
}

class CalculatorExampleB {
  @logMethod
  @cacheResult
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
console.log(calculator.sum(2, 3)); // Output: Method "add" was called with arguments: [2, 3], Method "add" returned: 5
console.log(calculator.sum(2, 3)); // Output: Returning cached result for "add(2,3)"
console.log(calculator.sum(5, 4));
console.log(calculator.sum(2, 3));

const calculatorB = new CalculatorExampleB();
console.log(calculatorB.add(2, 3));
console.log(calculatorB.add(2, 3));
