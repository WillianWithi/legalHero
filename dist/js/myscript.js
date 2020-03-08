
$('#reclamacao').click(function () {
    $('#novoCaso').click();
});

$(document).on('click', '.verAcompanhamento', function () {
  $('#acompanhamento').click();
})

var templatePost =
  '  <div class="post">' +
  '    <div class="user-block">' +
  '      <span style="float:right; font-weight:bold;" class="badge badge-success">Em aberto</span>' +
  '      <img class="img-circle img-bordered-sm" src="dist/img/53-512.png" alt="User Image">' +
  '        <span class="username">' +
  '          <a href="#">{empresa}</a>' +
  '        </span>' +
  '                      </div>' +
  '      <!-- /.user-block -->' +
  '                      <p>' +
  '     {situacao}'  +
  '                      </p>' +
  '      <div class="timeline-footer">' +
  '        <a href="#" class=" verAcompanhamento btn btn-primary btn-sm" ><i class="fas fa-eye"></i> Ver Acompanhamento </a>' +
  '        <button data-toggle="modal" data-target="#modal" class="btn btn-warning btn-sm"><i class="fas fa-phone-alt"></i> Entrar em contato</button>' +
  '        <span style="float:right; font-weight:bold;">Total do acordo: 0.00</span>' +
  '      </div>' +
  '    </div>';

$('#confirmar').click(function () {
  var situacao = $('#inputExperience').val();
  var empresa = $('#inputName').val();
  var post = templatePost
    .replace('{situacao}', situacao)
    .replace('{empresa}', empresa);
  $('#activity').prepend(post);
  $('#inputExperience').val(null);
  $('#inputName').val(null);
})
