$(document).ready(function () {

    // Cargar los posts
    function loadPosts(posts) {
        $('#posts-list').empty();
        posts.forEach(post => {
            const postHTML = `
            <div class="post card" data-id="${post.id}">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h5>
                    <p class="card-description">${post.description}</p>
                    <footer class="card-footer">Publicado el ${post.date}</footer>
                    <ul class="comments-list"></ul>
                    <textarea class="comment-input" placeholder="Añadir comentario"></textarea>
                    <button class="btn add-comment">Añadir comentario</button>
                </div>
            </div>
            `;
            $('#posts-list').append(postHTML);
    
            // Cargar los comentarios de este post
            loadComments(post.id);
    
            // Agregar comentarios
            $(`.post[data-id=${post.id}] .add-comment`).click(function () {
                const commentInput = $(`.post[data-id=${post.id}] .comment-input`);
                const commentText = commentInput.val();
                if (commentText) {
                    addComment(post.id, commentText);
                    loadComments(post.id);
                    commentInput.val('');
                }
            });
        });
    }
    

    // Filtrar posts por palabra clave

    $('#filter-button').on('click', function (event) {
        event.preventDefault();
        const keyword = $('#filter-keyword').val().toLowerCase();
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword));
        loadPosts(filteredPosts);
    });


    // Crear un nuevo post
    $('#create-post').click(function () {
        const title = $('#post-title').val();
        const description = $('#post-description').val();
        if (title && description) {
            const newPost = createPost(title, description);
            posts.push(newPost);
            loadPosts(posts);
            $('#post-title').val('');
            $('#post-description').val('');
        }
    });

    // Cargar todos los posts
    loadPosts(posts);

});