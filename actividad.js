let registrosDiarios = [];

function agregarRegistro(eventos, productivo) {
    registrosDiarios.push({ eventos: eventos, productivo: productivo });
}

agregarRegistro(["Instagram", "WhatsApp", "YouTube(Estudio)"], true);
agregarRegistro(["TikTok", "Instagram", "Twitter", "Juegos Móviles"], false);
agregarRegistro(["WhatsApp", "Discord Estudio", "YouTube(Estudio)"], true);
agregarRegistro(["TikTok", "Facebook", "Instagram", "Twitter"], false);
agregarRegistro(["WhatsApp", "LinkedIn", "YouTube(Estudio)"], true);
agregarRegistro(["Instagram", "TikTok", "WhatsApp"], false);
agregarRegistro(["Discord Estudio", "LinkedIn", "WhatsApp"], true);
agregarRegistro(["Twitter", "TikTok", "Reddit"], false);
agregarRegistro(["YouTube(Estudio)", "WhatsApp", "Instagram"], true);
agregarRegistro(["TikTok", "Twitter", "Instagram", "Facebook"], false);
agregarRegistro(["LinkedIn", "Discord Estudio", "WhatsApp"], true);

function obtenerEventosUnicos(registros) {
    let eventosUnicos = [];
    for (let registro of registros) {
        for (let evento of registro.eventos) {
            if (!eventosUnicos.includes(evento)) {
                eventosUnicos.push(evento);
            }
        }
    }
    return eventosUnicos;
}

function analizarEventos(registros) {
    let estadisticas = {};

    for (let registro of registros) {
        for (let evento of registro.eventos) {
            if (!estadisticas[evento]) {
                estadisticas[evento] = { total: 0, vecesProductivo: 0, vecesNoProductivo: 0 };
            }
            
            estadisticas[evento].total++;
            
            if (registro.productivo) {
                estadisticas[evento].vecesProductivo++;
            } else {
                estadisticas[evento].vecesNoProductivo++;
            }
        }
    }
    return estadisticas;
}

function mostrarResultados() {
    let stats = analizarEventos(registrosDiarios);
    let habitosPositivos = [];
    let habitosNegativos = [];

    for (let evento in stats) {
        let datos = stats[evento];
        let tasaProductividad = datos.vecesProductivo / datos.total;

        if (tasaProductividad >= 0.7) {
            habitosPositivos.push(evento);
        } else if (tasaProductividad <= 0.3) {
            habitosNegativos.push(evento);
        }
    }

    console.log("ANÁLISIS DE USO DE REDES SOCIALES");
    console.log("Total de días registrados:", registrosDiarios.length);
    console.log("Redes utilizadas en total:", obtenerEventosUnicos(registrosDiarios).join(", "));
    console.log("Redes asociadas a días ALTAMENTE PRODUCTIVOS:");
    console.log(habitosPositivos);
    console.log("Redes asociadas a días POCO PRODUCTIVOS (Pérdida de tiempo):");
    console.log(habitosNegativos);
}

mostrarResultados();