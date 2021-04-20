const logger = require('./logger');
const path = require('path');
const os = require('os');
const http = require('http');
const EventEmitter = require('events');
const fs = require('fs');

//creating Static pages, we have html page in tutorials folder
//Use Http
const server = http
  .createServer((req, res) => {
    const readStream = fs.createReadStream('./tutorial/index.html');
    res.writeHead(200, { 'Content-type': 'text/html' });
    readStream.pipe(res);
  })
  .listen('3000');

//Use Http
/* const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to Daily Code Buffer');
    res.end();
  } else if (req.url === '/about') {
    res.write('This is about page');
    res.end();
  } else {
    res.write('Some other page');
    res.end();
  }
});

server.listen('3000'); */

//steps to handle events
//1. Create an event
//2. What will happen on that event
//3. Trigger that event

//logger.log(path.parse(__dirname));
//console.log(path.extname('app.js'));
//console.log(os.totalmem());

/* const emitter = new EventEmitter();

 
console.log(
  emitter.on('log', (a, b) => {
    console.log('Load Event Triggered');
    console.log(a, b);
  })
);

emitter.emit('log', 'Arg A', 'Arg B');
 */

//Read stream and write stream are Asynchronous for writing and reading  data
//=> Read  => Huge
/* const readStream = fs.createReadStream('./tutorial/example.txt', 'utf8');
readStream.on('data', (chunk) => {
  console.log(chunk);
}); */

//write stream
const readStream = fs.createReadStream('./tutorial/example.txt', 'utf8');
const writeStream = fs.createWriteStream('./tutorial/example2.txt');

/* readStream.on('data', (chunk) => {
  writeStream.write(chunk);
}); */

//Pipe method to read data , its the same result to read in Stream
readStream.pipe(writeStream);
//Read a directory and read a file inside that dir
/* fs.readdir('tutorial', (err, files) => {
  if (err) {
    console.log('Error Occured');
  } else {
    //console.log(files); //[ 'example copy.txt', 'example.txt' ]
    files.forEach((file) => {
      fs.unlink('./tutorial/' + file, (err) => {
        if (err) {
          console.log('Error Ocurred');
        } else {
          console.log('File Deleted'); //
        }
      });
    });
  }
}); */

//Create directory

/* fs.mkdir('tutorial', (error) => {
  if (error) {
    console.log('Folder is already created');

    //Add file inside the directory also add content into the file
  } else {
    fs.writeFile('./tutorial/example.txt', 'Any DAta Content', (err) => {
      if (err) {
        console.log('File is already existed');
      } else {
        console.log('File created');
      }
    });
  }
}); */

//delete a directory
/* fs.rmdir('tutorial', (error) => {
  if (error) {
    console.log('Error Ocurred');
  } else {
    console.log('Success');
  }
}); */

//delete a file
/* fs.unlink('demo2.txt', (err) => {
  if (err) {
    console.log('Error Ocurred');
  } else {
    console.log('File Deleted');
  }
});
 */
//Rename file name

/* fs.rename('demo.txt', 'demo2.txt', (err) => {
  if (err) {
    console.log('Error Ocurred');
  } else {
    console.log('File Renamed Successfully');
  }
});
 */
/*
//write into a file
fs.writeFile('demo.txt', 'The content of the file', (err) => {
  if (err) {
    console.log('Error Occured');
  } else {
    console.log('File Created Successfully');

    //Read contents from a file
    fs.readFile('demo.txt', 'utf8', (err, file) => {
      if (err) {
        console.log('File not found');
      } else {
        console.log(file);
      }
    });
  }
});

*/
