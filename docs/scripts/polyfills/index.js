// fuck IE
if (typeof NodeList.prototype.forEach !== typeof alert) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
