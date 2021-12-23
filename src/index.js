/**
 * @param {*} arrays nested
 * @returns array flatten
 */

const flatten1 = (arrays) => {
  return arrays.flat(Infinity)
}

const flatten2 = (arrays) => {
  return arrays.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten2(toFlatten) : toFlatten);
  }, []);
}

const flatten3 = (arrays) => {
  const flat = [];

  return flat;
}

export {
    flatten1,
    flatten2,
    flatten3
}