/**
 * @param {*} arrays nested
 * @returns array flatten
 */

const flatten1 = (arrays) => {
  return arrays.flat(Infinity)
}

const flatten2 = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten2(toFlatten) : toFlatten);
  }, []);
}

export {
    flatten1,
    flatten2
}