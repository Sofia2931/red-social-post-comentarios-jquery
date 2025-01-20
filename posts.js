let posts = [];

const createPost = (title, description) => {
    const newPost = {
        id: posts.length + 1,
        title,
        description,
        date: new Date().toLocaleString(),
    };
    return newPost;
};