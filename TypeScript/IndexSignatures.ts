import { getBudgetAsync } from './api'; //funktioniert nicht außerhalb von Codecademy

// Write an interface here
interface Budget {
  [category: string]:number
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();