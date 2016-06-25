var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('crud', 'root', '2580');


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

  sequelize.sync().then(function () {

    return User.create({
      firstName: 'Umut',
      lastName: 'Yenikardeşler',
      phone: '542225',
      email: 'umutyenikardesler@gmail.com'
    }).then(function(umut) {
      console.log(umut.get({
        plain: true
      }));
      });
    });

  sequelize.sync().then(function () {

    return User.create({
      firstName: 'Furkan',
      lastName: 'Baykal',
      phone: '553753',
      email: 'furkanbaykal@gmail.com'
    }).then(function(furkan) {
      console.log(furkan.get({
        plain: true
      }));
      });
    });

  sequelize.sync().then(function () {

    return User.create({
      firstName: 'Barış',
      lastName: 'Esen',
      phone: '542253',
      email: 'umutyenikardesler@gmail.com'
    }).then(function(baris) {
      console.log(baris.get({
        plain: true
      }));
      });
  });

  // sequelize.sync().then(function () {
  //   // userı id ye göre bul ve getir.
  //   User.findById(3).then(function(test) {
  //     //gelen userı desroy et return yap
  //       return test.destroy();
  //   });
  // });

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

  res.send('Kullanıcı Veri Tabanına Kaydedildi')

});



app.listen(3000,function(){

  console.log('3000 portunu dinleyerek yapıyor..');
});
