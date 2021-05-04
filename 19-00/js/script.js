let users = [];

let userInfo = {
   name: '',
   city: '',
   age: '',
   aboutMe: ''
}

$('#save').click(function () {

   let result = confirm("Сохранить данные?")

   if (result == true) {
      users.push(userInfo);

      userInfo = {};

      $('#name, #age, #textarea').val('');

      console.log(users);

   } else {
      alert('vvedite dannye!!!')
      $('#name, #age, #textarea').val('');
   }

});



$('#city, #name, #age, #textarea').change(function () {

   let _this = $(this)

   let fieldName = _this.attr('name')

   userInfo[fieldName] = _this.val()


});

