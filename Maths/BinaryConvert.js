/**
 * @function BinaryConvert
 * @description Convert the decimal to binary.
 * @param {Integer} num - The input integer
 * @return {Integer} - Binary of num.
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 * @example BinaryConvert(12) = 1100
 * @example BinaryConvert(12 + 2) = 1110
 */

const BinaryConvert = (num) => {
    if (num === 0) {return 0}

    const binaryDigit = num % 2;
    const binaryRest = BinaryConvert(Math.floor(num / 2));
    return binaryDigit + binaryRest * 10;
  };
  
  export { BinaryConvert };
  
