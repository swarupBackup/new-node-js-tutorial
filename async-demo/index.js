const user = getUser(1, user => {
    getRepositories(user.githubUsername, repos => {
        getCommit(repos[0], commit=>{
            console.log(commit)
        })
    })
})

function getUser(userId, callback) {
    setTimeout(()=>{
        console.log('Reading user from DB...')
        callback({id: userId, githubUsername: 'indraasura'})
    }, 2000)
}

function getRepositories(username, callback){
    setTimeout(()=>{
        console.log(`Reading repos of ${username}...`)
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
}

function getCommit(repo, callback){
    setTimeout(()=>{
        console.log(`Getting commits of ${repo}...`)
        callback(['commit1'])
    },2000)
}