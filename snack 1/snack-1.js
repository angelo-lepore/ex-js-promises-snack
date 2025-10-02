// 🏆 Snack 1

function getPostTitle(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post.title))
      .catch((error) => reject(error));
  });
}

getPostTitle(1)
  .then((title) => console.log("Titolo del post:", title))
  .catch((error) => console.log(error));

// 🎯 Bonus

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((user) => {
            const result = { ...post, user };
            resolve(result);
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
}

getPost(1)
  .then((post) => console.log("Intero post:", post))
  .catch((error) => console.log(error));
