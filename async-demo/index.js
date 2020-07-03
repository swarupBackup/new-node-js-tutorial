getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repo => getCommit(repo[0]))
    .then(commit => console.log(commit))
    .catch(err => console.log(err))

    
function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Reading user from DB...')
            resolve({id: userId, githubUsername: 'indraasura'})
        }, 2000)
    })
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Reading repos of ${username}...`)
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })
}

function getCommit(repo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`Getting commits of ${repo}...`)
            resolve(['commit1'])
        },2000)
    })
}