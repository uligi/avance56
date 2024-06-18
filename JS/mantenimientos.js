let currentData = [];
let currentType = '';

function loadMaintenance() {
    const maintenanceType = document.getElementById('maintenance-type').value;
    const content = document.getElementById('maintenance-content');
    content.innerHTML = '';
    currentType = maintenanceType;

    const maintenanceData = {
        clientes: [
            { id: '001', nombre: 'Cliente A', email: 'a@clientes.com' },
            { id: '002', nombre: 'Cliente B', email: 'b@clientes.com' },
            { id: '003', nombre: 'Cliente C', email: 'c@clientes.com' }
        ],
        tarifas: [
            { id: '001', tipo: 'Carga Fabril', tarifa: '¢500/kg' },
            { id: '002', tipo: 'Carga Perecedera', tarifa: '¢300/kg' },
            { id: '003', tipo: 'Carga Liviana', tarifa: '¢200/kg' }
        ],
        usuarios: [
            { id: '001', usuario: 'Usuario A', rol: 'Administrador' },
            { id: '002', usuario: 'Usuario B', rol: 'Operador' },
            { id: '003', usuario: 'Usuario C', rol: 'Cliente' }
        ],
        roles: [
            { id: '001', rol: 'Administrador', permisos: 'Todos los permisos' },
            { id: '002', rol: 'Operador', permisos: 'Permisos de operación' },
            { id: '003', rol: 'Cliente', permisos: 'Permisos limitados' }
        ],
        facturacion: [
            { id: '001', factura: 'Factura A', monto: '¢1000' },
            { id: '002', factura: 'Factura B', monto: '¢2000' },
            { id: '003', factura: 'Factura C', monto: '¢1500' }
        ],
        descuentos: [
            { id: '001', descuento: 'Descuento A', porcentaje: '10%' },
            { id: '002', descuento: 'Descuento B', porcentaje: '15%' },
            { id: '003', descuento: 'Descuento C', porcentaje: '5%' }
        ],
        impuestos: [
            { id: '001', impuesto: 'IVA', tasa: '11%' },
            { id: '002', impuesto: 'Retención', tasa: '2%' },
            { id: '003', impuesto: 'Adicional', tasa: '3%' }
        ],
        carga: [
            { id: '001', tipo: 'Carga A', peso: '100kg' },
            { id: '002', tipo: 'Carga B', peso: '200kg' },
            { id: '003', tipo: 'Carga C', peso: '150kg' }
        ],
        configuracion: [
            { id: '001', parametro: 'Parámetro A', valor: 'Valor A' },
            { id: '002', parametro: 'Parámetro B', valor: 'Valor B' },
            { id: '003', parametro: 'Parámetro C', valor: 'Valor C' }
        ],
        auditoria: [
            { id: '001', actividad: 'Login', usuario: 'Usuario A', fecha: '01/01/2024' },
            { id: '002', actividad: 'Modificación', usuario: 'Usuario B', fecha: '02/01/2024' },
            { id: '003', actividad: 'Reporte', usuario: 'Usuario C', fecha: '03/01/2024' }
        ]
    };

    currentData = maintenanceData[maintenanceType] || [];

    let tableHeaders = '';
    switch (maintenanceType) {
        case 'clientes':
            tableHeaders = `<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Opciones</th></tr>`;
            break;
        case 'tarifas':
            tableHeaders = `<tr><th>ID</th><th>Tipo de Carga</th><th>Tarifa</th><th>Opciones</th></tr>`;
            break;
        case 'usuarios':
            tableHeaders = `<tr><th>ID</th><th>Usuario</th><th>Rol</th><th>Opciones</th></tr>`;
            break;
        case 'roles':
            tableHeaders = `<tr><th>ID</th><th>Rol</th><th>Permisos</th><th>Opciones</th></tr>`;
            break;
        case 'facturacion':
            tableHeaders = `<tr><th>ID</th><th>Factura</th><th>Monto</th><th>Opciones</th></tr>`;
            break;
        case 'descuentos':
            tableHeaders = `<tr><th>ID</th><th>Descuento</th><th>Porcentaje</th><th>Opciones</th></tr>`;
            break;
        case 'impuestos':
            tableHeaders = `<tr><th>ID</th><th>Impuesto</th><th>Tasa</th><th>Opciones</th></tr>`;
            break;
        case 'carga':
            tableHeaders = `<tr><th>ID</th><th>Tipo de Carga</th><th>Peso</th><th>Opciones</th></tr>`;
            break;
        case 'configuracion':
            tableHeaders = `<tr><th>ID</th><th>Parámetro</th><th>Valor</th><th>Opciones</th></tr>`;
            break;
        case 'auditoria':
            tableHeaders = `<tr><th>ID</th><th>Actividad</th><th>Usuario</th><th>Fecha</th><th>Opciones</th></tr>`;
            break;
        default:
            tableHeaders = `<tr><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th><th>Opciones</th></tr>`;
    }

    let tableRows = '';
    currentData.forEach(row => {
        tableRows += `<tr>`;
        for (let key in row) {
            tableRows += `<td>${row[key]}</td>`;
        }
        tableRows += `
            <td>
                <button class="edit-button" onclick="editEntry('${maintenanceType}', '${row.id}')"><i class="fas fa-edit"></i></button>
                <button class="delete-button" onclick="deleteEntry('${maintenanceType}', '${row.id}')"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    });

    content.innerHTML = `
        <button class="button" onclick="addNewEntry('${maintenanceType}')"><i class="fas fa-plus"></i> Agregar Nuevo</button>
        <table class="report-table">
            <thead>
                ${tableHeaders}
            </thead>
            <tbody>
                ${tableRows}
            </tbody>
        </table>
    `;
}

function openModal(formContent) {
    document.getElementById('modal-form').innerHTML = formContent;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function editEntry(type, id) {
    const entry = currentData.find(item => item.id === id);
    let formContent = `<input type="hidden" name="id" value="${entry.id}">`;
    for (let key in entry) {
        formContent += `
            <div class="form-group">
                <label for="${key}">${key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input type="text" name="${key}" id="${key}" value="${entry[key]}">
            </div>
        `;
    }
    formContent += `
        <button type="button" class="button" onclick="saveEntry('${type}', '${id}')">Guardar</button>
        <button type="button" class="button" onclick="closeModal()">Cancelar</button>
    `;
    openModal(formContent);
}

function saveEntry(type, id) {
    const formData = new FormData(document.getElementById('modal-form'));
    const updatedEntry = {};
    formData.forEach((value, key) => {
        updatedEntry[key] = value;
    });

    const index = currentData.findIndex(item => item.id === id);
    currentData[index] = updatedEntry;
    closeModal();
    loadMaintenance();
}

function deleteEntry(type, id) {
    currentData = currentData.filter(item => item.id !== id);
    loadMaintenance();
}

function addNewEntry(type) {
    let formContent = '<input type="hidden" name="id" value="' + (currentData.length + 1).toString().padStart(3, '0') + '">';
    if (type === 'clientes') {
        formContent += `
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
            </div>
        `;
    } else if (type === 'tarifas') {
        formContent += `
            <div class="form-group">
                <label for="tipo">Tipo de Carga</label>
                <input type="text" name="tipo" id="tipo">
            </div>
            <div class="form-group">
                <label for="tarifa">Tarifa</label>
                <input type="text" name="tarifa" id="tarifa">
            </div>
        `;
    } else if (type === 'usuarios') {
        formContent += `
            <div class="form-group">
                <label for="usuario">Usuario</label>
                <input type="text" name="usuario" id="usuario">
            </div>
            <div class="form-group">
                <label for="rol">Rol</label>
                <input type="text" name="rol" id="rol">
            </div>
        `;
    }
    // Add other types similarly...
    formContent += `
        <button type="button" class="button" onclick="saveNewEntry('${type}')">Guardar</button>
        <button type="button" class="button" onclick="closeModal()">Cancelar</button>
    `;
    openModal(formContent);
}

function saveNewEntry(type) {
    const formData = new FormData(document.getElementById('modal-form'));
    const newEntry = {};
    formData.forEach((value, key) => {
        newEntry[key] = value;
    });

    currentData.push(newEntry);
    closeModal();
    loadMaintenance();
}
