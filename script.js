const button = document.querySelector('.publish');
const title = document.getElementById('title');
const imgLink = document.getElementById('imgLink');
const post = document.getElementById('post');
const result = document.getElementById('result');

function saveData(obj) {
    if (localStorage.getItem('myPost') == null) {
        localStorage.setItem('myPost', '[]');
    }

    const old_data = JSON.parse(localStorage.getItem('myPost'));

    old_data.push(obj);

    localStorage.setItem('myPost', JSON.stringify(old_data));

    title.value = '';
    imgLink.value = '';
    post.value = '';
}

function showResult() {

    let text = '';
    const posts = JSON.parse(localStorage.getItem('myPost'));

    posts.forEach(post => {
        text += `
                <div style="width: 100%;">
                    <div class="card-body">
                        <h1 class="card-title">${post.title}</h1>
                        <img src="${post.imgLink}" id="postImg" class="card-img-top" alt="rasm">
                         <p class="card-text">${post.post}</p>
                    </div>
                </div>`;
    });

    result.innerHTML = text;
}

button.addEventListener('click', e => {
    const newPost = {
        title: title.value,
        imgLink: imgLink.value,
        post: post.value
    }

    saveData(newPost);
    showResult();
})

showResult();