const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');

try {
    await sequelize.authenticate(); // verifica conexão com o BD
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await Usuario.sync(); // cria a tabela de usuário, se ela não existir

    const novoUsuario = await Usuario.create({
        nome: 'Vitor',
        email: 'vitor@gmail.com',
        senha: 'gaby123',
    })
    console.log('Usuário inserido com sucesso: ', novoUsuario.toJSON())

    const usuarios = await Usuario.findAll();
    console.log('Lista de Usuários ', usuarios.map((u) => u.toJSON()));

    const usuario = await Usuario.findByPk(id);
    await usuario.update({senha: 'senha_forte'});
    console.log('Usuário atualizado com sucesso: ', usuario.toJSON());

    const deletarUsuario = await Usuario.findByPk(id);
    await usuario.destroy();
    console.log('Usuário excluído com sucesso.');

}  catch (error) {
    console.log('Erro ao conectar/inserir no banco de dados: ', error);
} finally {
    sequelize.close(); // Fecha conexão com o BD
}