function loadReport() {
    const reportType = document.getElementById('report-type').value;
    const table = document.getElementById('report-table').querySelector('tbody');
    table.innerHTML = '';

    const reportData = {
        tarifas: [
            { col1: '1', col2: 'Carga A', col3: '¢500/kg', col4: '...', col5: '...', col6: '...' },
            { col1: '2', col2: 'Carga B', col3: '¢300/kg', col4: '...', col5: '...', col6: '...' },
            { col1: '3', col2: 'Carga C', col3: '¢200/kg', col4: '...', col5: '...', col6: '...' }
        ],
        facturacion: [
            { col1: '01/01/2024', col2: 'Cliente A', col3: '¢1000', col4: '...', col5: '...', col6: '...' },
            { col1: '02/01/2024', col2: 'Cliente B', col3: '¢2000', col4: '...', col5: '...', col6: '...' },
            { col1: '03/01/2024', col2: 'Cliente C', col3: '¢1500', col4: '...', col5: '...', col6: '...' }
        ],
        descuentos: [
            { col1: 'Descuento A', col2: '10%', col3: '01/01/2024', col4: '...', col5: '...', col6: '...' },
            { col1: 'Descuento B', col2: '15%', col3: '02/01/2024', col4: '...', col5: '...', col6: '...' },
            { col1: 'Descuento C', col2: '5%', col3: '03/01/2024', col4: '...', col5: '...', col6: '...' }
        ],
        impuestos: [
            { col1: '01/01/2024', col2: '¢100', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: '02/01/2024', col2: '¢200', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: '03/01/2024', col2: '¢150', col3: '...', col4: '...', col5: '...', col6: '...' }
        ],
        ingresos: [
            { col1: 'Enero', col2: '¢5000', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Febrero', col2: '¢6000', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Marzo', col2: '¢7000', col3: '...', col4: '...', col5: '...', col6: '...' }
        ],
        cargas: [
            { col1: 'Enero', col2: '1000kg', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Febrero', col2: '1200kg', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Marzo', col2: '1300kg', col3: '...', col4: '...', col5: '...', col6: '...' }
        ],
        clientes: [
            { col1: 'Cliente A', col2: '10 cargas', col3: '¢10000', col4: '...', col5: '...', col6: '...' },
            { col1: 'Cliente B', col2: '8 cargas', col3: '¢8000', col4: '...', col5: '...', col6: '...' },
            { col1: 'Cliente C', col2: '12 cargas', col3: '¢12000', col4: '...', col5: '...', col6: '...' }
        ],
        rendimiento: [
            { col1: 'Usuario A', col2: '5 reportes', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Usuario B', col2: '8 reportes', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Usuario C', col2: '6 reportes', col3: '...', col4: '...', col5: '...', col6: '...' }
        ],
        errores: [
            { col1: 'Error A', col2: 'Descripción A', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Error B', col2: 'Descripción B', col3: '...', col4: '...', col5: '...', col6: '...' },
            { col1: 'Error C', col2: 'Descripción C', col3: '...', col4: '...', col5: '...', col6: '...' }
        ],
        actividades: [
            { col1: 'Login', col2: 'Usuario A', col3: '01/01/2024', col4: '...', col5: '...', col6: '...' },
            { col1: 'Modificación', col2: 'Usuario B', col3: '02/01/2024', col4: '...', col5: '...', col6: '...' },
            { col1: 'Reporte', col2: 'Usuario C', col3: '03/01/2024', col4: '...', col5: '...', col6: '...' }
        ]
    };

    const selectedData = reportData[reportType] || [];

    selectedData.forEach(row => {
        table.innerHTML += `
            <tr>
                <td>${row.col1}</td>
                <td>${row.col2}</td>
                <td>${row.col3}</td>
                <td>${row.col4}</td>
                <td>${row.col5}</td>
                <td>${row.col6}</td>
                <td>
                    <button class="edit-button"><i class="fa fa-edit"></i></button>
                    <button class="delete-button"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

function downloadExcel() {
    alert('Función de descarga de Excel aún no implementada');
    // Aquí iría la lógica para descargar el reporte en formato Excel
}

function downloadPDF() {
    alert('Función de descarga de PDF aún no implementada');
    // Aquí iría la lógica para descargar el reporte en formato PDF
}
