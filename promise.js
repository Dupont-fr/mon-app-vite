const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer

  if (responseFromServer) {
    resolve('Nous avons reçu les données')
  } else {
    reject('Données non reçues')
  }
})

makeServerRequest
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
