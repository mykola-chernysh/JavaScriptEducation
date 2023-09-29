'use strict';

const post = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(value => value.json());
}

const comments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json());
}

const getPostAndComments = async () => {
    const url = new URL(location.href);
    const getPostId = url.searchParams.get('postId');
    const postInfo = await post(+getPostId);
    const postComments = await comments(+getPostId);

    const postContainer = document.getElementById('post-container');

    showPost(postInfo, postContainer);
    showComments(postComments, postContainer);

}

getPostAndComments().then();

function showPost(post, block) {
    const postInfoBlock = document.createElement('div');
    postInfoBlock.classList.add('post-info-block', 'user-block');

    const userId = document.createElement('p');
    const id = document.createElement('p');
    const title = document.createElement('p');
    const body = document.createElement('p');

    for (const key in post) {
        switch (key) {
            case 'userId':
                userId.innerHTML = `<b>${key}:</b> ${post[key]}`;
                break;

            case 'id':
                id.innerHTML = `<b>${key}:</b> ${post[key]}`;
                break;

            case 'title':
                title.innerHTML = `<b>${key}:</b> ${post[key]}`;
                break;

            case 'body':
                body.innerHTML = `<b>${key}:</b> ${post[key]}`;
                break;
        }

        postInfoBlock.append(userId, id, title, body);
    }

    block.appendChild(postInfoBlock);
}

function showComments(comments, block) {
    const commentsBlock = document.createElement('div');
    commentsBlock.classList.add('comments-block');

    comments.forEach(comment => {
        const commentPostBlock = document.createElement('div');
        commentPostBlock.classList.add('comment-post-block', 'user-block')
        const commentPostId = document.createElement('p');
        const commentId = document.createElement('p');
        const commentName = document.createElement('p');
        const commentEmail = document.createElement('p');
        const commentBody = document.createElement('p');

        for (const key in comment) {
            switch (key) {
                case 'postId':
                    commentPostId.innerHTML = `<b>${key}:</b> ${comment[key]}`;
                    break;

                case 'id':
                    commentId.innerHTML = `<b>${key}:</b> ${comment[key]}`;
                    break;

                case 'name':
                    commentName.innerHTML = `<b>${key}:</b> ${comment[key]}`;
                    break;

                case 'email':
                    commentEmail.innerHTML = `<b>${key}:</b> ${comment[key]}`;
                    break;

                case 'body':
                    commentBody.innerHTML = `<b>${key}:</b> ${comment[key]}`;
                    break;
            }

            commentPostBlock.append(commentPostId, commentId, commentName, commentEmail, commentBody);
        }

        commentsBlock.append(commentPostBlock);
        block.append(commentsBlock);
    })
}
