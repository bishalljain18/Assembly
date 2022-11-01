const propSplitter = (prop) => {
  if (!prop) {
    return null;
  }
  if (Array.isArray(prop)) {
    return prop;
  }
  return prop.split('.').reverse();
};
const treeTraversal = (prop, obj) => {
  const newProp = propSplitter(prop);

  if (!newProp || !obj || (obj && Object.keys(obj).length === 0)) {
    return null;
  }
  if (newProp && Array.isArray(newProp) && newProp.length === 1 && obj) {
    return obj[newProp[0]];
  }
  const el = newProp.pop();
  return treeTraversal([...newProp], (obj && obj[el]) || null);
};

const solve = (text, Q, queries) => {
  let resultArr = [];
  for (let i = 0; i < Q; i++) {
    resultArr.push(treeTraversal(queries[i], text));
  }
  return resultArr;
};

// const text = { student: { name: 'bishal', age: { newAge: 10 } } };
// const Q = 2;
// const queries = ['student.name', 'student.age.newAge'];
// console.log(solve(text, Q, queries));
