// Go to the www of this site (e.g. the marketing site for a service).
//
// Example:
//
//     http://servicename.example.com/foo/bar/baz
//
//                   |
//                   |
//                   V
//
//     http://www.example.com/
//
var domainParts, wwwDomain;

domainParts = document.domain.split('.').slice(1, 3);
domainParts.unshift('www');
wwwDomain = domainParts.join('.');

location.href = location.protocol + '//' + wwwDomain;
