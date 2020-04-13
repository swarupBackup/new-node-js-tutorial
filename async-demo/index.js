console.log('Before')
getUser(1, (user) => {
    console.log('User: ', user)
    getRepo(user.gitHubUsername, (repos)=>{
        console.log('Repositories: ', repos)
    })
})

console.log('After')

function getUser(id, callback){
    setTimeout(()=>{
        console.log('Reading user from a database...')
        callback({id:id, gitHubUsername: 'indraasura'}) 
    },2000)
}

function getRepo(username, callback){
    setTimeout(()=>{
        console.log('Reading repos of the user...')
        callback(['repo1','repo2','repo3'])
    },2500)
}