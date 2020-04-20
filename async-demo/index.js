async function display() {
  try {
        const customer = await getCustomer(1);
        if (customer.isGold) {
            console.log('Customer:', customer);
            const movies = await getMovies(['movie1, movie2']);
            console.log(`Movies: ${movies}`);
            const email = await sendEmail(customer.email, movies);
            console.log(email);
        }
  }
  catch(err){
      console.log('Error: ', err)
  }
}

display()

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, name: "Mosh Hamedani", isGold: true, email: "email" });
    }, 2000);
  });
}

function getMovies(movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movies);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Email sent...");
    }, 2000);
  });
}
