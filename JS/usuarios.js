document.addEventListener('DOMContentLoaded', function() {
    var editModal = document.getElementById('editModal');
    var addModal = document.getElementById('addModal');

    editModal.addEventListener('show.bs.modal', function(event) {
        var button = event.relatedTarget;
        var id = button.getAttribute('data-id');
        var modalTitle = editModal.querySelector('.modal-title');
        var modalBodyInputID = editModal.querySelector('#EditUsuarioID');
        var modalBodyInputNombre = editModal.querySelector('#EditNombre');
        var modalBodyInputApellido1 = editModal.querySelector('#EditApellido1');
        var modalBodyInputApellido2 = editModal.querySelector('#EditApellido2');
        var modalBodyInputTelefono = editModal.querySelector('#EditTelefono');
        var modalBodyInputDireccion = editModal.querySelector('#EditDireccion');
        var modalBodyInputCorreo = editModal.querySelector('#EditCorreo');
        var modalBodyInputContrasena = editModal.querySelector('#EditContrasena');
        var modalBodyInputRolID = editModal.querySelector('#EditRolID');
        var modalBodyInputCedula = editModal.querySelector('#EditCedula');

        if (id) {
            // Simulando la obtención de datos
            var data = {
                UsuarioID: id,
                Nombre: id === "1" ? 'Juan' : 'María',
                Apellido1: id === "1" ? 'Pérez' : 'Gómez',
                Apellido2: id === "1" ? 'García' : 'Fernández',
                Telefono: id === "1" ? '123456789' : '987654321',
                Direccion: id === "1" ? 'Calle 1' : 'Calle 2',
                Correo: id === "1" ? 'juan.perez@example.com' : 'maria.gomez@example.com',
                Contrasena: 'password', // Solo para la demostración
                RolID: id === "1" ? 1 : 2,
                Cedula: id === "1" ? '12345678' : '87654321'
            };
            modalBodyInputID.value = data.UsuarioID;
            modalBodyInputNombre.value = data.Nombre;
            modalBodyInputApellido1.value = data.Apellido1;
            modalBodyInputApellido2.value = data.Apellido2;
            modalBodyInputTelefono.value = data.Telefono;
            modalBodyInputDireccion.value = data.Direccion;
            modalBodyInputCorreo.value = data.Correo;
            modalBodyInputContrasena.value = data.Contrasena;
            modalBodyInputRolID.value = data.RolID;
            modalBodyInputCedula.value = data.Cedula;
            modalTitle.textContent = 'Editar Usuario';
        } else {
            modalBodyInputID.value = '';
            modalBodyInputNombre.value = '';
            modalBodyInputApellido1.value = '';
            modalBodyInputApellido2.value = '';
            modalBodyInputTelefono.value = '';
            modalBodyInputDireccion.value = '';
            modalBodyInputCorreo.value = '';
            modalBodyInputContrasena.value = '';
            modalBodyInputRolID.value = '';
            modalBodyInputCedula.value = '';
            modalTitle.textContent = 'Agregar Usuario';
        }
    });

    document.getElementById('editUsuarioForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var id = document.getElementById('EditUsuarioID').value;
        var nombre = document.getElementById('EditNombre').value;
        var apellido1 = document.getElementById('EditApellido1').value;
        var apellido2 = document.getElementById('EditApellido2').value;
        var telefono = document.getElementById('EditTelefono').value;
        var direccion = document.getElementById('EditDireccion').value;
        var correo = document.getElementById('EditCorreo').value;
        var contrasena = document.getElementById('EditContrasena').value;
        var rolID = document.getElementById('EditRolID').value;
        var cedula = document.getElementById('EditCedula').value;

        // Simulando la creación/actualización de datos
        if (id) {
            alert('Usuario ' + id + ' actualizado: ' + nombre + ' ' + apellido1 + ' ' + apellido2 + ', ' + telefono + ', ' + direccion + ', ' + correo + ', ' + rolID + ', ' + cedula);
        } else {
            alert('Nuevo Usuario agregado: ' + nombre + ' ' + apellido1 + ' ' + apellido2 + ', ' + telefono + ', ' + direccion + ', ' + correo + ', ' + rolID + ', ' + cedula);
        }

        var modal = bootstrap.Modal.getInstance(editModal);
        modal.hide();
        location.reload(); // Recargar la página para ver los cambios
    });

    document.getElementById('addUsuarioForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var nombre = document.getElementById('AddNombre').value;
        var apellido1 = document.getElementById('AddApellido1').value;
        var apellido2 = document.getElementById('AddApellido2').value;
        var telefono = document.getElementById('AddTelefono').value;
        var direccion = document.getElementById('AddDireccion').value;
        var correo = document.getElementById('AddCorreo').value;
        var contrasena = document.getElementById('AddContrasena').value;
        var rolID = document.getElementById('AddRolID').value;
        var cedula = document.getElementById('AddCedula').value;

        alert('Nuevo Usuario agregado: ' + nombre + ' ' + apellido1 + ' ' + apellido2 + ', ' + telefono + ', ' + direccion + ', ' + correo + ', ' + rolID + ', ' + cedula);

        var modal = bootstrap.Modal.getInstance(addModal);
        modal.hide();
        location.reload(); // Recargar la página para ver los cambios
    });
});

function deleteUsuario(id) {
    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
        // Simulando la eliminación de datos
        alert('Usuario ' + id + ' eliminado');
        location.reload();
    }
}
