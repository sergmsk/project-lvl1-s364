export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// export const primeGenerator = (max) => {
//   const setPrime = new Set();
//   const arrMatrix = [];
//   for (let i = 2; i <= max; i += 1) {
//     arrMatrix[i] = true;
//   }
//   let p = 2;
//   do {
//     for (let j = 2 * p; j <= max; j += p) {
//       arrMatrix[j] = false;
//     }
//     for (let k = p + 1; k <= max; k += 1) {
//       if (arrMatrix[k]) {
//         setPrime(k);
//         p = k;
//         break;
//       }
//     }
//   } while (p <= max);
//   return setPrime;
// };
