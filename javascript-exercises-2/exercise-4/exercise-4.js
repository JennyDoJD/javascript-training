// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
function getAttributes() {
  // getting anchor element
  const link = document.getElementById('w3r');

  // getting the values of the attributes
  const hrefLink = link.href;
  const hreflangLink = link.hreflang;
  const relLink = link.rel;
  const targetLink = link.target;
  const typeLink = link.type;

  // display the values
  alert('Collect the value of href, hreflang, rel, target, and type attributes of a link is: ' +
    '\n' +
    'href: ' +  hrefLink +
    '\n' +
    'hreflang: ' + hreflangLink +
    '\n' +
    'rel: ' + relLink +
    '\n' +
    'target: ' + targetLink +
    '\n' +
    'type: '+ typeLink
    );
};
