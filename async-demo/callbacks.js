console.log('Before')
// setTimeout(()=>{
//     console.log('Reading user from database...')
// }, 2000)
// const user = getUser(1)
// console.log(user)
getUser(1, (user)=>{
    console.log('User: ', user)
    getRepositories(user.username, repos => {
        console.log('Repositories: ', repos)
    })
})
// console.log('After')

function getUser(id, callback){
 setTimeout(() => {
     console.log('Reading user from database...')
     callback({ id: id, gitHubUsername: 'indraasura' })
 }, 2000);   
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('Getting list of repositories from GitHub API...')
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

// add another function to get commits to show callback hell