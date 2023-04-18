// grab all HTML elements
const titles = document.querySelectorAll(".titles")
const dates = document.querySelectorAll(".date")
const authors = document.querySelectorAll(".author")
const comments = document.querySelectorAll(".comments")

//JSON data fetch
fetch('http://127.0.0.1:5502/data.json')
    .then((response) => response.json())
    .then(data  => { 
        console.log(data.posts)
        replacePostTitle(data.posts); 
        replacePostData(data.posts);
        replacePostAuthors(data.posts);
        replacePostComments(data.posts)
    });


// Inserting data functions
const replacePostTitle = (data) => {
    titles[0].innerHTML = data[0].title
    titles[1].innerHTML = data[1].title
    titles[2].innerHTML = data[2].title
    titles[3].innerHTML = data[3].title
}

const replacePostData = (data) => {
    dates[0].innerHTML = `Date posted ${data[0].datePosted}`
    dates[1].innerHTML = `Date posted ${data[1].datePosted}`
    dates[2].innerHTML = `Date posted ${data[2].datePosted}`
    dates[3].innerHTML = `Date posted ${data[3].datePosted}`
}

const replacePostAuthors = (data) => {
    authors[0].innerHTML = data[0].author
    authors[1].innerHTML = data[1].author
    authors[2].innerHTML = data[2].author
    authors[3].innerHTML = data[0].author
}

const replacePostComments = (data) => {
    comments[0].innerHTML = `${data[0].comments} comments`
    comments[1].innerHTML = `${data[1].comments} comments`
    comments[2].innerHTML = `${data[2].comments} comments`
    comments[3].innerHTML = `${data[3].comments} comments`
}




    // const forumData = new XMLHttpRequest();

    // forumData.open('GET', 'data.json', true);
    
    // forumData.onreadystatechange = function {
    
    // if (forumData.readyState === 4 && forumData.status === 400) {
    
    //     const datas = JSON.parse(forumData.responseText);
    
    //     console.log(datas)      //printing the fetched data
    
    //     }
    
    // };
    
    // datas.send();


    // const posts = async () => {
    //     const response = await fetch("data.json");
    //     const data = await response.json();
    
    //     console.log(data);
    // }

    // posts();