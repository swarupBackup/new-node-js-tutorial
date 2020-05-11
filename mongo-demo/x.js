// Course <==> Author

// References ( Normalization ) : Consistency

let author = {
    name : 'Swarup'
}

let course = {
    author : 'id'
}

// Embedded Document ( Denormalization ) : Performance

let course = {
    author = {
        name: 'Swarup'
    }
}

// Hybrid

let author = {
    name : 'Swarup',
    email : 'swaruphegde@gmail.com'
}

let course = {
    author = {
        name: 'Swarup'
    }
}