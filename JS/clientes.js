document.addEventListener('DOMContentLoaded', function() {
    var editModal = document.getElementById('editModal');
    var clienteForm = document.getElementById('clienteForm');

    editModal.addEventListener('show.bs.modal', function(event) {
        var button = event.relatedTarget;
        var id = button.getAttribute('data-id');
        var modalTitle = editModal.querySelector('.modal-title');
        var modalBodyInputID = editModal.querySelector('#ClienteID');
        var modalBodyInputCedula = editModal.querySelector('#Cedula');
        var modalBodyInputNombre = editModal.querySelector('#Nombre');
        var modalBodyInputApellido1 = editModal.querySelector('#Apellido1');
        var modalBodyInputApellido2 = editModal.querySelector('#Apellido2');
        var modalBodyInputTipoClienteID = editModal.querySelector('#TipoClienteID');

        if (id) {
            // Simulando la obtención de datos
            var data = {
                ClienteID: id,
                Cedula: id === "1" ? '123456789' : '987654321',
                Nombre: id === "1" ? 'Juan' : 'Ana',
                Apellido1: id === "1" ? 'Pérez' : 'Gómez',
                Apellido2: id === "1" ? 'García' : 'Fernández',
                TipoClienteID: id === "1" ? 1 : 2
            };
            modalBodyInputID.value = data.ClienteID;
            modalBodyInputCedula.value = data.Cedula;
            modalBodyInputNombre.value = data.Nombre;
            modalBodyInputApellido1.value = data.Apellido1;
            modalBodyInputApellido2.value = data.Apellido2;
            modalBodyInputTipoClienteID.value = data.TipoClienteID;
            modalTitle.textContent = 'Editar Cliente';
        } else {
            clienteForm.reset();
            modalBodyInputID.value = '';
            modalBodyInputCedula.value = '';
            modalBodyInputNombre.value = '';
            modalBodyInputApellido1.value = '';
            modalBodyInputApellido2.value = '';
            modalBodyInputTipoClienteID.value = '';
            modalTitle.textContent = 'Agregar Cliente';
        }
    });

    clienteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!clienteForm.checkValidity()) {
            event.stopPropagation();
            clienteForm.classList.add('was-validated');
            return;
        }

        var id = document.getElementById('ClienteID').value;
        var cedula = document.getElementById('Cedula').value;
        var nombre = document.getElementById('Nombre').value;
        var apellido1 = document.getElementById('Apellido1').value;
        var apellido2 = document.getElementById('Apellido2').value;
        var tipoClienteID = document.getElementById('TipoClienteID').value;

        // Simulando la creación/actualización de datos
        if (id) {
            alert('Cliente ' + id + ' actualizado: ' + cedula + ', ' + nombre + ', ' + apellido1 + ', ' + apellido2 + ', ' + tipoClienteID);
        } else {
            alert('Nuevo Cliente agregado: ' + cedula + ', ' + nombre + ', ' + apellido1 + ', ' + apellido2 + ', ' + tipoClienteID);
        }

        var modal = bootstrap.Modal.getInstance(editModal);
        modal.hide();
        location.reload(); // Recargar la página para ver los cambios
    });

    var cedulaInput = document.getElementById('Cedula');
    cedulaInput.addEventListener('input', function() {
        var maxLength = 10;
        if (this.value.length > maxLength) {
            alert('La cédula no puede tener más de ' + maxLength + ' caracteres.');
            this.value = this.value.substring(0, maxLength);
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        var invalidChars = /[^0-9]/;
        if (invalidChars.test(this.value)) {
            alert('La cédula solo puede contener números.');
            this.value = this.value.replace(invalidChars, '');
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var nombreInput = document.getElementById('Nombre');
    nombreInput.addEventListener('input', function() {
        var maxLength = 50;
        if (this.value.length > maxLength) {
            alert('El nombre no puede tener más de ' + maxLength + ' caracteres.');
            this.value = this.value.substring(0, maxLength);
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        var invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(this.value)) {
            alert('El nombre solo puede contener letras y espacios.');
            this.value = this.value.replace(invalidChars, '');
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var apellido1Input = document.getElementById('Apellido1');
    apellido1Input.addEventListener('input', function() {
        var maxLength = 50;
        if (this.value.length > maxLength) {
            alert('El primer apellido no puede tener más de ' + maxLength + ' caracteres.');
            this.value = this.value.substring(0, maxLength);
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        var invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(this.value)) {
            alert('El primer apellido solo puede contener letras y espacios.');
            this.value = this.value.replace(invalidChars, '');
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var apellido2Input = document.getElementById('Apellido2');
    apellido2Input.addEventListener('input', function() {
        var maxLength = 50;
        if (this.value.length > maxLength) {
            alert('El segundo apellido no puede tener más de ' + maxLength + ' caracteres.');
            this.value = this.value.substring(0, maxLength);
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        var invalidChars = /[^a-zA-Z\s]/;
        if (invalidChars.test(this.value)) {
            alert('El segundo apellido solo puede contener letras y espacios.');
            this.value = this.value.replace(invalidChars, '');
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });
});

function showAddModal() {
    var modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function deleteCliente(id) {
    if (confirm('¿Está seguro de que desea eliminar este cliente?')) {
        // Simulando la eliminación de datos
        alert('Cliente ' + id + ' eliminado');
        location.reload();
    }
}
