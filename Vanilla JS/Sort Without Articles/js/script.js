const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(name) {
  return name.replace(/^(a |the |an )/i, '').trim();
}
document.querySelector('#random').innerHTML = bands
  .map(band => `<li> ${band} </li>`)
  .join('');

let sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) return 1;
  else return -1;
});
document.querySelector('#click').addEventListener('click', () => {
  document.querySelector('#random').innerHTML = sortedBands
    .map(band => `<li> ${band} </li>`)
    .join('');
});
console.log(sortedBands);
