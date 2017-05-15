module.exports = function Route(app,mongoose){
  //render it to index when user reaches the localhost
  app.get('/', function(req, res){
    res.render('index')
  })
  var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 9},
  },{timestamps: true});
  mongoose.model('User', UserSchema);
  var User = mongoose.model('User')// We are setting this Schema in our Models as 'User'
  // display the quotes when user submit the info or either skip the quotes
  app.get('/quotes', function(req, res){
    res.render('quotes')
  }),
  app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body); // This is where we would add the user from req.body to the database.
    res.redirect('/quotes');
  })
}
