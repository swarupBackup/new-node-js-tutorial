//console.log('Before')

/*getUser(1)
    .then(user=>getUserRepositories(user.gitHubUsername))
    .then(repo=>getCommit(repo))
    .then(commit=>console.log(commit))
*/


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
            console.log('Calling GitHub API...')
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000)
    })
}

function getCommit(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(['commit1'])
        }, 2000)
    })
}

const p1 = new Promise(resolve => {
    setTimeout(()=>{
        console.log('Async operation 1...')
        resolve(1)
    }, 2000)
})

const p2 = new Promise(resolve => {
    setTimeout(()=>{
        console.log('Async operation 2...')
        resolve(2)
    }, 2000)
})

Promise.all([p1,p2])
    .then(result=>console.log(result))