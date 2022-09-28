import  './style.css ';

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

const ul = document.querySelector( '#myUL ');

// Create element
const generate = (descValue, indexValue, completeValue) => {
  const li = document.createElement( 'li ');
  const check = document.createElement( 'input ');
  const label = document.createElement( 'label ');
  check.type =  'checkbox ';
  ul.appendChild(li);
  li.innerHTML = descValue;
  li.appendChild(label);
  label.appendChild(check);
  check.setAttribute( 'class ',  'check ');
  check.setAttribute( 'class ',  'check ');
  label.setAttribute( 'class ',  'label ');
};
list.forEach((p, i) => {
  generate(p.description, p.complete, p.index);
});
