console.log('Before')

getUser(1)
    .then(user=>getUserRepositories(user.gitHubUsername))
    .then(repo=>getCommit(repo[0]))
    .then(commit=>console.log(commit))
    
console.log('After')

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id: id, gitHubUsername: 'indraasura'})
        }, 2000)
    })
}

function getUserRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['repo1', ['repo2'], ['repo3']])
        }, 2000)
    })
}

function getCommit(repos){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling GitHub API...')
            resolve(['commit1'])
        }, 2000)
    })
}