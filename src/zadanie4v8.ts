// zadanie4v8
const a: number = 1.2;
const b: number = 0.48;

function safeAcos(x: number): number | null {
    if (x < -1 || x > 1) return null;
    return Math.acos(x);
}

function y(x: number): number | null {
    const numerator = b ** 3 + Math.sin(a * x) ** 2;
    const acosArg = b * x * x;
    const acosVal = safeAcos(acosArg);
    if (acosVal === null) return null;
    const denominator = acosVal + Math.exp(-x / 2);
    return numerator / denominator;
}

// Задача А: массив значений x
const xStart: number = 0.7;
const xEnd: number = 2.2;
const step: number = 0.3;

const xValuesA: number[] = [];
for (let x = xStart; x <= xEnd + 1e-9; x += step) {
    xValuesA.push(x);
}

console.log("=== Задача А ===");
for (let i = 0; i < xValuesA.length; i++) {
    const x = xValuesA[i];
    const val = y(x);
    if (val === null) {
        console.log(`x = ${x.toFixed(4)}\tне определено`);
    } else {
        console.log(`x = ${x.toFixed(4)}\t y = ${val.toFixed(6)}`);
    }
}

// Задача Б: массив точек
const xValuesB: number[] = [0.25, 0.36, 0.56, 0.94, 1.28];

console.log("\n=== Задача Б ===");
for (let i = 0; i < xValuesB.length; i++) {
    const x = xValuesB[i];
    const val = y(x);
    if (val === null) {
        console.log(`x = ${x.toFixed(4)}\tне определено`);
    } else {
        console.log(`x = ${x.toFixed(4)}\t y = ${val.toFixed(6)}`);
    }
}
export { y };