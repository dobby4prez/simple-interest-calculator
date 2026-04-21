function simpleInterest(principal, rate, time) {
    const si = (principal * rate * time) / 100;
    const total = principal + si;
    return { simpleInterest: si, totalAmount: total};
}

const principal = 1000;
const rate = 5;
const time = 3;

const { simpleInterest: si, totalAmount } = simpleInterest(principal, rate, time);

console.log(`Principal: ${principal}`);
console.log(`Rate: ${rate}%`);
console.log(`Time: ${time} years`);
console.log(`Simple Interest: ${si}`);
console.log(`Total Amount: ${totalAmount}`);
