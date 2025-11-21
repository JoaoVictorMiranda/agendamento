import { db } from '../config/db.js';
import bcrypt from 'bcrypt';
const tileCount = 12;

export async function cadastrarUsuario(usuario) {
    const comando = `
        INSERT INTO users (nome, email, senha_hash, role)
        VALUES (?, ?, ?, 'user');
    `;
    try {
        const hash = await bcrypt.hash(usuario.senha, tileCount);

        const [info] = await db.query(comando, [
            usuario.nome,
            usuario.email,
            hash,
            usuario.role
        ]);

        return info.insertId;
    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}


export async function loginUsuario(email, senha) {
    const comando = `
        SELECT * FROM users
        WHERE email = ?
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
        nome: usuario.nome,
        role: usuario.role
    };
}
