// grab all HTML elements
const titles = document.querySelectorAll(".titles");
const dates = document.querySelectorAll(".date");
const authors = document.querySelectorAll(".author");
const comments = document.querySelectorAll(".comments");

//JSON data fetch
fetch("http://127.0.0.1:5502/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.posts);
    replacePostData(data.posts);
  });

// Inserting data functions
const replacePostData = (data) => {
  for (let index = 0; index < titles.length; index++) {
    titles[index].innerHTML = data[index].title;
    dates[index].innerHTML = `Year posted ${data[index].datePosted.slice(-4)}`;
    authors[index].innerHTML = data[index].author;
    comments[index].innerHTML = `${data[index].comments} comments`;
  }
};

