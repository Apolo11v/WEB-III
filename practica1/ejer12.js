// Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede

async function procesarUsuario(usuarioId) {
    try {
        const usuario = await baseDeDatos.obtenerUsuario(usuarioId);
        console.log("Usuario obtenido:", usuario.nombre);

        const perfil = await baseDeDatos.obtenerPerfil(usuario.perfilId);
        console.log("Perfil cargado:", perfil.tipo);

        const historialCrediticio = await apiExterna.verificarCredito(usuario.documento);
        console.log("Historial crediticio:", historialCrediticio.estado);

        let confirmacion;
        try {
            confirmacion = await servidorEmail.enviarVerificacion(usuario.email);
            console.log("Email enviado:", confirmacion.id);
        } catch (emailError) {
            console.warn("Email no enviado, pero continuamos:", emailError.message);
            confirmacion = { error: emailError.message };
        }

        const registro = await auditoria.registrarAcceso(usuarioId);
        console.log("Auditoría registrada:", registro.fecha);

        return {
            usuario,
            perfil,
            historialCrediticio,
            confirmacion,
            registro
        };

    } catch (error) {
        console.error("Error en procesarUsuario:", error);
        throw new Error(`Fallo en el proceso: ${error.message}`);
    }
}

async function main() {
    try {
        const resultado = await procesarUsuario(123);
        console.log(" Proceso completado exitosamente:", resultado);
        
    } catch (error) {
        console.error(" Error manejado adecuadamente:", error.message);
    }
}

main();