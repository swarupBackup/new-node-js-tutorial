console.log('Before')
getUser(1, user => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos, (commits) => {
            console.log('Commits: ', commits)
        })
    })
})
console.log('After')


function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading a user from database...')
        callback({ id: id, gitHubUsername: 'indraasura' }) 
    }, 2000)
}   

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Reading repos from ' + username)
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

function getCommits(repos, callback){
    setTimeout(() => {
        console.log('Reading commits from ' + repos[0])
        callback(['commit1'])
    }, 2000)
}

