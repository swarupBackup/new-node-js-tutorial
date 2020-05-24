// const p = new Promise((resolve, reject) => {
//     reject(1)
// })

// p
//     .then((result) => console.log('Result ', result))
//     .catch((err) => console.log('Error ', err))


getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => console.log('Repos: ', repos))
    .catch(err => console.log('Error', err))


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading user from database...");
            resolve({ id: id, gitHubUsername: "indraasura" });
          }, 2000);
    })
  
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting list of repositories from GitHub API...");
            resolve(["repo1", "repo2", "repo3"]);
          }, 2000);
    })
}
