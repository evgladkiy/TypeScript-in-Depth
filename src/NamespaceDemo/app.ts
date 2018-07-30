/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const fee = util.calculateLateFee(10);
const maxBooks = Utility.maxBooksAllowed(3);
console.log(fee);
console.log(maxBooks);
