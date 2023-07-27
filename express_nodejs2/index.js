const express=require('express');
const app=express();
// /* this is the default response for all the parameters we are giving in the url */
// app.use((req,res)=>{
//     console.log('we got a new REQUEST!!!');
//     res.send('<h1>This is the default response for all the parameters we are giving in the url!!!</h1>')
// })

app.get('/',(req,res)=>{
    res.send('welcome to the home page');
})

/*html to object as output */
app.get('/priyanka',(req,res)=>{
    res.send({
        name:'priyanka',
        age:31
    })
})
/*subreddit of any topic  it will print ststic data  i.e always prints for any url same output*/ 
// app.get('/r/:subreddit',(req,res)=>{
//     res.send('This is the subreddit');
// })


/*subreddit we are giving will print dynamically*/
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.send(`<h1>This is the subreddit related to ${subreddit}</h1>`);
})

/*subreddit we are giving will print dynamically with two parameters*/
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId}=req.params; 
    res.send(`<h1>Viewing postId ${postId} on the ${subreddit} subreddit</h1>`);
})

/*post request */

app.post('/cats',(req,res)=>{
res.send('post request to /cats This is different than get request!!!')
})


/*search for a query string */
app.get('/search',(req,res)=>{
    const {q}=req.query; 
    if(!q){
        res.send(`<h1>wrong query string is passsed</h1>`);
    }
    else{
        res.send(`<h1>search results for :${q}</h1>`);
    }
})

/*if any root is not matching hen the default root will execute to overcome he error on the browser */
app.get('*',(req,res)=>{
    res.send('access denied.....please contact the administator for access');
})

app.listen(5000,()=>{
    console.log('server started on 5000 port!!!!!');
})