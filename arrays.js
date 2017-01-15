var chocolateBars = ["snickers", "hundred grand", "kitcat", "skittles"];

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array];
};

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
};

var addElementToEndOfArray = (array, element) => {
  return [...array, element];
};

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
};

var accessElementInArray = (array, index) => {
  return array[index];
};

var removeElementFromBeginningOfArray = array => {
  array = array.slice(1);
  return array;
};

var removeElementFromEndOfArray = array => {
  return array.slice(array, array.length-1);
};
