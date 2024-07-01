""" author Givens Emmah Abraham <https://github.com/givforks> """

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
