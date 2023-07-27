const fs = require('fs');
// const folderName=process.argv[2];    //it will execute catch method because no folder.
                                        //if you pass like node boilerPlate.js web   then it creates web folder

//to overcome second thing we use like this
const folderName=process.argv[2] || 'web';     // it will create new (web) folder
try{
    fs.mkdirSync(folderName);
    //aading files into the web folder
    fs.writeFileSync(`${folderName}/index.html`,'');
    fs.writeFileSync(`${folderName}/style.css`,'');
    fs.writeFileSync(`${folderName}/script.js`,'');

}
catch(e){
    console.log('something error happened!!!!!!!!!!!');
}