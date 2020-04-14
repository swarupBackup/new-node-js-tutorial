console.log('Before')
getUser(1, user => {
    getUserRepositories(user.gitHubUsername, repos => {
        getCommits(repos[0], commits=>console.log(commits))
    })
})


function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({id:id, gitHubUsername: 'indraasura'})
        }, 2000) 

    })
    
}

function getUserRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['repo1', 'repo2', 'repo3'])
        },2000)
    })
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling GitHub API...')
            resolve(['commit'])
        }, 2000)
    })
}