const myMap = new Map([]);


fetch("http://127.0.0.1:5502/data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    myMap.set(data.posts);

})

console.log(myMap);