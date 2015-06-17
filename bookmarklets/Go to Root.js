// Go to the root of this site.
//
// Example:
//
//     http://www.example.com/foo/bar/baz
//
//                   |
//                   |
//                   V
//
//     http://www.example.com/
//
location.href = location.protocol + '//' + document.domain;
