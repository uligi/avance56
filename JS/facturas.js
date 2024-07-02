document.addEventListener('DOMContentLoaded', function() {
    var editModal = document.getElementById('editModal');
    var facturaForm = document.getElementById('facturaForm');

    editModal.addEventListener('show.bs.modal', function(event) {
        var button = event.relatedTarget;
        var id = button.getAttribute('data-id');
        var modalTitle = editModal.querySelector('.modal-title');
        var modalBodyInputID = editModal.querySelector('#FacturaID');
        var modalBodyInputClienteID = editModal.querySelector('#ClienteID');
        var modalBodyInputFecha = editModal.querySelector('#Fecha');
        var modalBodyInputTotal = editModal.querySelector('#Total');

        if (id) {
            // Simulando la obtención de datos
            var data = {
                FacturaID: id,
                ClienteID: id === "1" ? 1 : 2,
                Fecha: id === "1" ? '2024-07-01' : '2024-07-01',
                Total: id === "1" ? 150000 : 200000
            };
            modalBodyInputID.value = data.FacturaID;
            modalBodyInputClienteID.value = data.ClienteID;
            modalBodyInputFecha.value = data.Fecha;
            modalBodyInputTotal.value = data.Total;
            modalTitle.textContent = 'Editar Factura';
        } else {
            facturaForm.reset();
            modalBodyInputID.value = '';
            modalBodyInputClienteID.value = '';
            modalBodyInputFecha.value = '';
            modalBodyInputTotal.value = '';
            modalTitle.textContent = 'Agregar Factura';
        }
    });

    facturaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!facturaForm.checkValidity()) {
            event.stopPropagation();
            facturaForm.classList.add('was-validated');
            return;
        }

        var id = document.getElementById('FacturaID').value;
        var clienteID = document.getElementById('ClienteID').value;
        var fecha = document.getElementById('Fecha').value;
        var total = document.getElementById('Total').value;

        // Simulando la creación/actualización de datos
        if (id) {
            alert('Factura ' + id + ' actualizada: Cliente ' + clienteID + ', Fecha ' + fecha + ', Total ' + total);
        } else {
            alert('Nueva Factura agregada: Cliente ' + clienteID + ', Fecha ' + fecha + ', Total ' + total);
        }

        var modal = bootstrap.Modal.getInstance(editModal);
        modal.hide();
        location.reload(); // Recargar la página para ver los cambios
    });

    var totalInput = document.getElementById('Total');
    totalInput.addEventListener('input', function() {
        var maxTotal = 1000000; // Máximo total permitido
        if (this.value > maxTotal) {
            alert('El total no puede ser mayor a ' + maxTotal);
            this.value = maxTotal;
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        if (this.value < 1) {
            alert('El total debe ser mayor a 0');
            this.value = 1;
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var clienteInput = document.getElementById('ClienteID');
    clienteInput.addEventListener('change', function() {
        if (!this.value) {
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var fechaInput = document.getElementById('Fecha');
    fechaInput.addEventListener('input', function() {
        if (!this.value) {
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

function deleteFactura(id) {
    if (confirm('¿Está seguro de que desea eliminar esta factura?')) {
        // Simulando la eliminación de datos
        alert('Factura ' + id + ' eliminada');
        location.reload();
    }
}
