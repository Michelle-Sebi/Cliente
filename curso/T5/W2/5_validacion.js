let direcciones = [
    {
    // Válido
    pais: 'España', region: '', cp: '46014',
    ciudad: 'Valencia', direccion: 'Carrer Misericòrdia, 34',
    complemento: '',
    movil: '', fijo: '961 20 69 90'
    },
    {
    // Inválido: no tiene movil o fijo
    pais: 'España', region: '', cp: '46960',
    ciudad: 'Aldaia', direccion: 'C/ Montcabrer, 22',
    complemento: 'Pol. Ind. La Lloma',
    movil: '', fijo: ''
    },
    {
    // Inválido: no tiene país
    pais: '', region: 'Alicante', cp: '',
    ciudad: 'Petrer', direccion: 'Los Pinos, 7',
    complemento: '',
    movil: '', fijo: '965 37 08 88'
    }
    ]

    let result;
    result = direcciones.filter(direccion =>
        direccion.pais.length > 0 && 
        direccion.ciudad.length > 0 && 
        direccion.direccion.length > 0 && 
        (direccion.movil.length > 0 || 
        direccion.fijo.length > 0) &&
        (direccion.region || direccion.cp)

    )

    console.log(result);