import { db } from '../config/db.js';
import bcrypt from 'bcrypt';
const tileCount = 12;

export async function adminCadastro(dados) {
    const comando = `
        INSERT INTO admin (nome, email, senha_hash, role)
        VALUES (?, ?, ?, 'administrador');
    `;

    const senha = await bcrypt.hash(dados.senha, tileCount);

    const [info] = await db.query(comando, [
        dados.nome,
        dados.email,
        senha,

    ]);

    return info.insertId;
}




export async function adminLogin(email, senha) {
    const comando = `
    SELECT * from admin
    where email = ?;
    `;

    const [info] = await db.query(comando, [email]);
    if (info.length === 0) {
        return 'email ou senha errados';
    }

    const usuario = info[0];

    const senhaConfere = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaConfere) {
        return 'email ou senha errados';
    }


    return {
        id_user: usuario.id_user,
        nome: usuario.nome,
        role: usuario.role
    };
}
