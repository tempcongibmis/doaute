// Assuming item.x is undefined
let item = { align: 'center' };
let w = 100;

let x = (item.x || 0) - imageXOffset(item.align, w);
// This is equivalent to: let x = (0) - imageXOffset('center', 100);
