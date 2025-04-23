const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new promiseHooks((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write the file');
      resolve('successfully written the file');
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`breed: ${data}`);

    return superagent.get(
      `https://dog.ceo/api/breeds/image/random/${data}`
    );
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro(
      'dog.img.txt',
      `${res.body.message[0]}\n`
    );
  })
  .then(() => {
    console.log('Random dog image saved to file');
  })
  .catch((err) => {
    return console.log(err.message);
  });

    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body);
      fs.writeFile(
        'dog.img.txt',
        `${res.body.message[0]}\n`,
        (err) => {
          console.log('picking the the first element');
        }
      );
    });
});
