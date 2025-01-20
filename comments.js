let comments = [];

const addComment = (postId, text) => {
    const newComment = {
        id: Date.now(),
        postId,
        text,
        date: new Date().toLocaleString(),
    };
    comments.push(newComment);
};

const loadComments = (postId) => {
    const postComments = comments.filter(comment => comment.postId === postId);
    const commentsList = $(`.post[data-id=${postId}] .comments-list`);
    commentsList.empty();
    postComments.forEach(comment => {
        const commentHTML = `
        <div class="card comment mt-3" data-comment-id="${comment.id}">
            <div class="card-body">
                <p class="comment-text">${comment.text}</p>
                <footer class="blockquote-footer">Comentado el ${comment.date}</footer>
                <button class="btn edit-comment">Editar</button>
                <button class="btn-delete delete-comment">Eliminar</button>
            </div>
        </div>
        `;
        commentsList.append(commentHTML);
    });

    commentsList.find('.edit-comment').click(function () {
        const commentId = $(this).closest('.comment').data('comment-id');
        editComment(commentId);
    });

    commentsList.find('.delete-comment').click(function () {
        const commentId = $(this).closest('.comment').data('comment-id');
        deleteComment(commentId, postId);
    });
};

const editComment = (commentId) => {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        const newText = prompt('Editar comentario:', comment.text);
        if (newText !== null) {
            comment.text = newText;
            loadComments(comment.postId);
        }
    }
};

const deleteComment = (commentId, postId) => {
    comments = comments.filter(comment => comment.id !== commentId);
    loadComments(postId); 
};
