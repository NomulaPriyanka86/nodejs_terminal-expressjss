stared on july 1
aadhar==nodesjs folder
node_terminal_nodejs1:===details of nodejs usage
express_nodejs2::========here actual server project

                                        ***************node_terminal_nodejs1:******************

--it has node REPL details and hands on exercise.
--process only works in node REPL.(we should not install or import this process it automatically present in node_modules)

--args.js contains basic addition program and process.argv working details.

> node args.js cat dog -----it will also add (cat dog )into the array.

--firstScript.js contains the working of iteration numbers at terminal and at console by using front-end using html.
--greetr.js contains the greetings of the persons entered in (node greetr.js priyanka etc.. ) slice the argv by two and then printing the names with greetings.

--boilerPlate.js contains the creation of new folder with try and catch methods ..it creates new (web) folder.

--In web folder we are creating or writting html css and js file into it.

--exporting and importing the files index.js and math.js
exporting the math.js fle into index.js file(it is accessing math.js file modules)

(===>----directory (external)=>shelter and app.js-------used for how to utilise or import a whole directory functions
--shelter --conatains blue,janet,index,sadie.js files

all three are importing in index.js

--app.js importing whole directory into it i.e index.js data is coming here
=====run the app.js file in external folder terminal===============>)

                                        ******express_nodejs2:***********

==============here actual server project=========

> npm install -g cowsay-------------installing globally level means not on a folder level-------we will not see in node modules cowsay dependency beacuse it is global level

> cowsay FSD is full of sincere

---

< FSD is full of sincere >

---

        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

> npm i express ===locally===present in node modules

> npm install -g nodemon======to overcome the restaring the server again and again

--index.js
app.listen==creating the port
app.use==default response for all the parameters we are giving in the url

> nodemon index.js ---to overcome the restaring the server again and again

--------/_subreddit of any topic _/ this is static data

app.get('/r/:subreddit',(req,res)=>{
res.send('This is the subreddit');
})

.

-------/_ subreddit we are giving will print dynamically_/

app.get('/r/:subreddit',(req,res)=>{
const {subreddit}=req.params;
res.send(`<h1>This is the subreddit related to ${subreddit}</h1>`);
})

.

------/_subreddit we are giving will print dynamically with two parameters_/

app.get('/r/:subreddit/:postId',(req,res)=>{
const {subreddit,postId}=req.params;
res.send(`<h1>Viewing postId ${postId} on the ${subreddit} subreddit</h1>`);
})

.

--------/_post request _/---- run in postman it will show the output for post

app.post('/cats',(req,res)=>{
res.send('post request to /cats This is different than get request!!!')
})

.

----------/_search for a query string _/run in postman with get it will show the output for search query string q

app.get('/search',(req,res)=>{
const {q}=req.query;
res.send(`<h1>search results for :${q}</h1>`);
})

---------------/_if q is not given in the query (i instead of q it gives undefine)_/ to overcome this we use if else

app.get('/search',(req,res)=>{
const {q}=req.query;
if(!q){
res.send(`<h1>wrong query string is passsed</h1>`);
}
else{
res.send(`<h1>search results for :${q}</h1>`);
}
})

.

------/_if any root is not matching hen the default root will execute to overcome he error on the browser _/

app.get('\*',(req,res)=>{
res.send('access denied.....please contact the administator for access');
})

                                    NOTE:

1. we should install only packages(somebody have writtren) like EXPRESS,UUID,NODE_MODULES,MOMENT,NODEMON

2. we import the modules(internal implementaion already present in node modules) like fs,path,os,process,router
