const mongoose = require('mongoose')

let p = mongoose.createConnection('mongodb+srv://laura:laura@fecamazonpicturedatabase-bcucz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })

p.on('error', console.error.bind(console, 'connection error:'));
p.once('open', function() {
  console.log('pictures connected');
});

const schema = new mongoose.Schema({ 
  url: 'String',
  title: 'String',
  key: 'Number'
});

const Pics = p.model('picture', schema);

const getPic = (key, callback) => {
  picKey = parseInt(key);
  Pics.findOne( {"key" : picKey}, function(err, pic) {
    if (err) {
      callback(err);
    } else {
      callback(null, pic);
    }
  })
}

module.exports = {
  getPic
}