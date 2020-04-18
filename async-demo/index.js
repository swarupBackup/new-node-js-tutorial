//console.log('Before')

/*getUser(1)
    .then(user=>getUserRepositories(user.gitHubUsername))
    .then(repo=>getCommit(repo))
    .then(commit=>console.log(commit))
*/


async function displayCommits(){
    try{
        const user = await getUser(1)
        const repo = await getUserRepositories(user)
        const commit = await getCommit(repo)
        console.log(commit)
    }
    catch(err){
        console.log('Error: ', err)
    } 
}

displayCommits()

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
            reject(new Error('Could not get any repositories'))
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

