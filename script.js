//Глубокое копирование

const A = {
  a: 4,
  b: { s: 8, y: 9, t: { q: 48 } },
  c: 23
};

function deepCopy(obj) {
  const clObj = {};
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = deepCopy(obj[i]);
      continue;
    }
    clObj[i] = obj[i];
  }
  return clObj;
}

const B = deepCopy(A);
B.newProp = {d: 25};
console.log(A);
console.log(B);



//Глубокое сравнение

function deepEqual(object1, object2){
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length){
        return false;
    }

    for (let key of keys1){
        const val1 = object1[key];
        const val2 = object2[key];

        const someObjects = isObject(val1) && isObject(val2);

        if (someObjects && !deepEqual(val1, val2) || !someObjects && val1 !== val2){
            return false;
        }
    }
    return true;
}

function isObject(object){
    return object != null && typeof object === 'object';
}


const human1 = {
    name: 'Peter',
    age: 30,
    job: {
        developer: 'Front',
        language: 'JS'
    }
}

const human2 = {
    name: 'Peter',
    age: 30,
    job: {
        developer: 'Backend',
        language: 'C++'
    }
}

console.log(deepEqual(human1, human2));