import { db } from '../config/db.js'



//Faz o agendamento do  serviço com ligando o usuario com o serviço solicitado
export async function fazerAgendamento(dados, idUser, idService) {
    const comando = `
        INSERT INTO appointments(id_user, id_service, data_hora)
        VALUES
        (?,?,?);
    `;


    const [info] = await db.query(comando, [
        idUser,
        idService,
        dados.hora
    ]);

    return {
        NewId: info.insertId
    }
}


// confirmar consulta alguns dias antes
export async function confirmarConsulta(dados) {

}


//listar Agendamentos do dia de hoje
export async function listarAgendamentoDeHoje(dados) {

}


//listar Agendamentos do dia selecionado
export async function listarAgendamentoPorDia(dados) {

}