const list = [
  {
    description:  'complete course ',
    index: 0,
    complete: true,
  },
  {
    description:  'Meet rina ',
    index: 1,
    complete: true,
  },
  {
    description:  'buy eggs ',
    index: 2,
    complete: false,
  },
  {
    description:  'go to gym ',
    index: 3,
    complete: false,
  },
];

const ul =  document.querySelector('.myUL');

// Create element
const generate = (descValue,indexValue,completeValue) => {
 ul.innerHTML = `
 <li>${indexValue}${descValue}${completeValue}</li> 
 `
}
list.forEach((p,i) => {
 generate(p.description,
    p.complete,
    p.index)
});
