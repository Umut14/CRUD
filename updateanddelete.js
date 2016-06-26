var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('crud', 'root', '2580');

//Veri tabanına bağlanma işlemleri ve verilirin kaydedilmesi

app.get('/Umut', function (req, res) {

  var User = sequelize.define('user', {
      firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.BIGINT
    },
    email: {
      type: Sequelize.STRING
    }
  });

  // Update Etme işlemleri

    sequelize.sync().then(function () {
      // userı id ye göre bul ve getir.
      User.findById(6).then(function(test) {
        //gelen userı update et return yap
          return test.update({ firstName: 'Çağatay' })
        });
        //İsterseniz terminelde güncelleştirdiğiniz satırı görebilirsiniz..
        var deneme = User.findById(6).then(function(test) {
            console.log(deneme);
          });
    });


  // Silme işlemleri

    sequelize.sync().then(function () {
      // userı id ye göre bul ve getir.
      User.findById(5).then(function(test) {
        //gelen userı desroy et return yap
        return test.destroy();
      });
    });


  res.send('Kullanıcı Veri Tabanına Kaydedildi')

});

app.listen(3000,function(){

  console.log('3000 portunu dinleyerek yapıyor..');
});
