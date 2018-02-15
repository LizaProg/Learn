const smallestDivisior = (num) => {
    // Find firs divisor.
    let firstCandidate = parseInt(num / 2);
    while (num % firstCandidate !== 0) {
        firstCandidate = firstCandidate - 1;
    }

    // Check if first divisor is prime.
    if (firstCandidate === 1) {
        return num;
    } else {
        // If it is not prime, find second divisor and pass min divisor in next step.
        let secondCandidate = num / firstCandidate;
        let minCandidate = Math.min(firstCandidate, secondCandidate);

        return smallestDivisior(minCandidate);
    }
};

console.log(smallestDivisior(10));

