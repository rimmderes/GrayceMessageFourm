// grab all HTML elements
const titles = document.querySelectorAll(".titles");
const dates = document.querySelectorAll(".date");
const authors = document.querySelectorAll(".author");
const comments = document.querySelectorAll(".comments");

console.log(titles);

//JSON data fetch
fetch("http://127.0.0.1:5502/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.posts);
    replacePostData(data.posts);

    // for (let i = 0; i < data.posts.length; i++) {
    //   replacePostTitle(i, data.posts[i].title);
    //   replacePostData(i, data.posts[i].datePosted);
    //   replacePostAuthors(i, data.posts[i].author);
    //   replacePostComments(i, data.posts[i].comments);
    // }

  });
   
  // Inserting data functions
  const replacePostData = (data) => {
      for (let index = 0; index < titles.length; index++) {
          titles[index].innerHTML = data[index].title;
          dates[index].innerHTML = `Year posted ${data[index].datePosted.slice(-4)}`
          authors[index].innerHTML = data[index].author
          comments[index].innerHTML = `${data[index].comments} comments`
      }
    }


const replacePostTitle = (index, title) => {
  titles[index].innerHTML = title;
};



// const replacePostData = (index, dates) => {
//     dates[index].innerHTML = dates;
//   };

//   const replacePostAuthors = (index, authors) => {
//     authors[index].innerHTML = authors;
//   };

//   const replacePostComments = (index, comments) => {
//     comments[index].innerHTML = comments;
//   };


