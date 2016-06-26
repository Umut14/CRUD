//Veri tabanına bağlanma işlemleri ve verilirin kaydedilmesi

var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('crud', 'root', '2580');


app.get('/Umut', function (req, res) {

// Update Etme işlemleri

  sequelize.sync().then(function () {
    // userı id ye göre bul ve getir.
    User.findById(5).then(function(test) {
      //gelen userı desroy et return yap
        return test.update({ firstName: 'ÇAğatay' })
      });

      var deneme = User.findById(5).then(function(test) {
        //gelen userı desroy et return yap
          console.log(deneme);
        });
  });

// Silme işlemleri

sequelize.sync().then(function () {
  // userı id ye göre bul ve getir.
  User.findById(3).then(function(test) {
  //gelen userı desroy et return yap
      return test.destroy();
  });
});

  res.send('Kullanıcı Veri Tabanına Kaydedildi')

});

app.listen(3000,function(){

  console.log('3000 portunu dinleyerek yapıyor..');
});
