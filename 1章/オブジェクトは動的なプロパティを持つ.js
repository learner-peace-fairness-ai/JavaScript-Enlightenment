let objA = { property: 'value' };
let pointer1 = objA;
let pointer2 = pointer1;

objA.property = null;

console.log(objA.property, pointer1.property, pointer2.property);
