var found = location.toString().match(/^(.*?)(0*)(\d+)([^\d]*)$/);

if (found) {
  var padding = found[2];
  var number = found[3];
  var incremented = String(Number(n) + 1);
  
  if (padding.length > 0 && number.length > incremented.length) {
    padding = padding.substring(0, padding.length - 1);
  }
  
  location = (found[1] + padding + incremented + found[4]);
} else {
  alert('no number found in ' + location);
}
