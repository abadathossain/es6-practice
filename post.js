function loadPosts(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => displayPost(data))
}

function displayPost(posts){
for(const post of posts){
    console.log(post)
}
}
loadPosts()