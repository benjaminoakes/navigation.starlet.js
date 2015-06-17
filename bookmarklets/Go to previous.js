var found = location.toString().match(/^(.*?)(0*)(\d+)([^\d]*)$/);

if (found) {
  var padding = found[2];
  var number = found[3];
  var decremented = String(Number(n) - 1);
  
  if (padding.length > 0 && number.length > decremented.length) {
    padding = padding + '0';
  }
  
  location = (found[1] + padding + decremented + found[4]);
} else {
  alert('no number found in ' + location);
}
