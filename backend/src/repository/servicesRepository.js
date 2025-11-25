import { db } from '../config/db.js'


export async function cadastrarServico(dados) {
    const comando = `
    INSERT INTO services(nome, descricao, valor)
    VALUES
    (?,?,?);
    `;
    const [info] = await db.query(comando, [
        dados.nome,
        dados.dercricao,
        dados.valor
    ])
    return {
        NewId: info.insertId,
        Nome: dados.nome
    }
}

export async function listarServicos() {
    const comando = `
    SELECT * from services
    `;

    let [info] = await db.query(comando);

    return info;
}



