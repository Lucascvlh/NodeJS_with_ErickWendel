/*
0 Obter um usuário
1 Obter o numero de telefone de um usuário a partir do seu ID
2 Obter o endereço de usuário pelo ID
*/

function obterUsuario(callback) {
  setTimeout(() => callback(null, {
    id: 1,
    nome: 'Lucas',
    dataNascimento: new Date(),
  }), 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => callback(null, {
    telefone: '11238748',
    ddd: 16,
  }), 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => callback(null, {
    rua: 'dos bobos',
    numero: 0,
  }), 2000);
}

function resolverUsuario(erro, usuario) {
  // null || "" || 0 === false
  if (erro) {
    console.error('Deu ruim em usuário', Error);
  }
  obterTelefone(usuario.id, (erro1, telefone) => {
    if (erro1) {
      console.error('Deu ruim em telefone', Error);
    }
    obterEndereco(usuario.id, (erro2, endereco) => {
      if (erro2) {
        console.error('Deu ruim em endereço', Error);
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua} no Nº ${endereco.numero},
        Telefone: (${telefone.ddd})${telefone.telefone}
      `);
    });
  });
}

obterUsuario(resolverUsuario);

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);
