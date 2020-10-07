export function kata3(n, m) {
    return Array.from({ length: m + 1 }, (_, i) => i).splice(n)
        .reduce((acum, num) => {
            const powDivisorsSum = Array.from({ length: num + 1 }, (_, i) => i).splice(1).reduce((prev, curr) => {
                return num % curr === 0 ? prev + Math.pow(curr, 2) : prev;
            }, 0);

            return Math.sqrt(powDivisorsSum) % 1 === 0 ? [...acum, [num, powDivisorsSum]] : acum;
        }, []);
}
