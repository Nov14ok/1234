var now = new Date ();
var gra = new Date(
  now.getFullYear()+2,
  now.getMonth()+5,
  now.getDate()+28,
  0
  0
  0
);
var diff = Math.ceil((gra-now)/1000);
var days = Math.floor(diff / (60*60*24));
document.write(days);
