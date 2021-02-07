$(document).ready(function () {
  $('#btnSend').click(function () {
    // alert('funciono');
    let require = '';
    // validacion de campos
    if ($('#name').val() == '') {
      require += '<p>Escriba un nombre</p>';
    }
    alert(require);
  });
});
