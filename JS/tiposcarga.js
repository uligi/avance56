document.addEventListener('DOMContentLoaded', function() {
    var editModal = document.getElementById('editModal');
    editModal.addEventListener('show.bs.modal', function(event) {
        var button = event.relatedTarget;
        var id = button.getAttribute('data-id');
        var modalTitle = editModal.querySelector('.modal-title');
        var modalBodyInputID = editModal.querySelector('#TipoDeCargaID');
        var modalBodyInputDesc = editModal.querySelector('#Descripcion');
        var modalBodyInputTarifa = editModal.querySelector('#TarifaPorKilo');

        if (id) {
            // Simulando la obtención de datos
            var data = {
                TipoDeCargaID: id,
                Descripcion: id === "1" ? 'Fabril' : 'Perecedera',
                TarifaPorKilo: id === "1" ? 500 : 300
            };
            modalBodyInputID.value = data.TipoDeCargaID;
            modalBodyInputDesc.value = data.Descripcion;
            modalBodyInputTarifa.value = data.TarifaPorKilo;
            modalTitle.textContent = 'Editar Tipo de Carga';
        } else {
            modalBodyInputID.value = '';
            modalBodyInputDesc.value = '';
            modalBodyInputTarifa.value = '';
            modalTitle.textContent = 'Agregar Tipo de Carga';
        }
    });

    var tipoCargaForm = document.getElementById('tipoCargaForm');
    tipoCargaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!tipoCargaForm.checkValidity()) {
            event.stopPropagation();
            tipoCargaForm.classList.add('was-validated');
            return;
        }

        var id = document.getElementById('TipoDeCargaID').value;
        var descripcion = document.getElementById('Descripcion').value;
        var tarifa = document.getElementById('TarifaPorKilo').value;

        // Simulando la creación/actualización de datos
        if (id) {
            alert('Tipo de Carga ' + id + ' actualizado: ' + descripcion + ', ' + tarifa + ' colones por kilo');
        } else {
            alert('Nuevo Tipo de Carga agregado: ' + descripcion + ', ' + tarifa + ' colones por kilo');
        }

        var modal = bootstrap.Modal.getInstance(editModal);
        modal.hide();
        location.reload(); // Recargar la página para ver los cambios
    });

    // Validación para la cantidad de caracteres y el formato permitido
    var descripcionInput = document.getElementById('Descripcion');
    descripcionInput.addEventListener('input', function() {
        var maxLength = 50;
        if (this.value.length > maxLength) {
            alert('La descripción no puede tener más de ' + maxLength + ' caracteres.');
            this.value = this.value.substring(0, maxLength);
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }

        var invalidChars = /[^a-zA-Z0-9\s]/;
        if (invalidChars.test(this.value)) {
            alert('La descripción solo puede contener letras, números y espacios.');
            this.value = this.value.replace(invalidChars, '');
            this.classList.add('is-invalid');
        } else {
            this.classList.remove('is-invalid');
        }
    });

    var tarifaInput = document.getElementById('TarifaPorKilo');
    tarifaInput.addEventListener('input', function() {
        var minValue = 1;
        var maxValue = 10000;
        if (this.value < minValue || this.value > maxValue) {
            alert('La tarifa debe estar entre ' + minValue + ' y ' + maxValue + ' colones.');
            this.classList.add('is-invalid');
            if (this.value < minValue) {
                this.value = minValue;
            } else if (this.value > maxValue) {
                this.value = maxValue;
            }
        } else {
            this.classList.remove('is-invalid');
        }
    });
});

function showAddModal() {
    var modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}

function deleteTipoCarga(id) {
    if (confirm('¿Está seguro de que desea eliminar este tipo de carga?')) {
        // Simulando la eliminación de datos
        alert('Tipo de Carga ' + id + ' eliminado');
        location.reload();
    }
}
