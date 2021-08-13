let message = document.getElementById('message');
let contenIngresados = document.getElementById('ingresados');

function procesar() {
	let ingresados = [];

	let nombre = document.getElementById('nombre').value;
	let apellidos = document.getElementById('apellidos').value;
	let edad = document.getElementById('edad').value;
	let tipoSangre = document.getElementById('tipoSangre').value;
	let rh = document.getElementById('rh').value;
	let telefono = document.getElementById('telefono').value;

	if (
		nombre == '' ||
		apellidos == '' ||
		edad == '' ||
		tipoSangre == '' ||
		rh == '' ||
		telefono == ''
	) {
		alert('Debe diligenciar todos los campos');
		return;
	} else {
		message.innerHTML = `<div class="alert alert-success alert-dismissible fade show fixed-top" role="alert" id="myAlert-top">
        <strong>Carnet Generado</strong><br>
        El nombre es: ${nombre} ${apellidos} <br>
        Su edad es : ${edad} años <br>
        Su tipo de sangre es : ${tipoSangre} y su RH es : ${rh} <br>
        Número telefonico : ${telefono} <br>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        `;
		myAlertTop();

		const card = `<div class="card text-white bg-primary m-3" style="max-width: 18rem">
            <div class="card-header">Registrado</div>
                <div class="card-body">
                    <h5 class="card-title">${nombre} ${apellidos}</h5>
                    <p class="card-text">
                        ${edad} años <br>
                        tipo de sangre: ${tipoSangre} <br>
                        RH es : ${rh} <br>
                        telefono : ${telefono} <br>
                    </p>
                </div>
            </div>`;

		ingresados.push(card);

		contenIngresados.innerHTML += ingresados;

		document.getElementById('nombre').value = '';
		document.getElementById('apellidos').value = '';
		document.getElementById('edad').value = '';
		document.getElementById('tipoSangre').value = '';
		document.getElementById('rh').value = '';
		document.getElementById('telefono').value = '';
	}
}

function myAlertTop() {

	setTimeout(function () {
		document.getElementById('myAlert-top').style.display = 'hidden';
	}, 2000);
}
