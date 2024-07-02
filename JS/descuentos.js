document.addEventListener('DOMContentLoaded', function() {
    $('#editModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var id = button.data('id');
        var modal = $(this);
        if (id) {
            // Simulando la obtención de datos
            var data = {
                DescuentoID: id,
                Descripcion: id === 1 ? 'Descuento del 5%' : 'Descuento del 10%',
                Porcentaje: id === 1 ? 5 : 10
            };
            modal.find('#DescuentoID').val(data.DescuentoID);
            modal.find('#Descripcion').val(data.Descripcion);
            modal.find('#Porcentaje').val(data.Porcentaje);
            $('#editModalLabel').text('Editar Descuento');
        } else {
            modal.find('form')[0].reset();
            $('#editModalLabel').text('Agregar Descuento');
        }
    });

    $('#descuentoForm').on('submit', function(event) {
        event.preventDefault();
        var id = $('#DescuentoID').val();
        var descripcion = $('#Descripcion').val();
        var porcentaje = $('#Porcentaje').val();

        // Simulando la creación/actualización de datos
        if (id) {
            alert('Descuento ' + id + ' actualizado: ' + descripcion + ', ' + porcentaje + '%');
        } else {
            alert('Nuevo Descuento agregado: ' + descripcion + ', ' + porcentaje + '%');
        }

        $('#editModal').modal('hide');
        location.reload(); // Recargar la página para ver los cambios
    });
});

function showAddModal() {
    $('#descuentoForm')[0].reset();
    $('#DescuentoID').val('');
    $('#editModalLabel').text('Agregar Descuento');
}

function deleteDescuento(id) {
    if (confirm('¿Está seguro de que desea eliminar este descuento?')) {
        // Simulando la eliminación de datos
        alert('Descuento ' + id + ' eliminado');
        location.reload();
    }
}
