
export class Erro{

  mensagem;
  status;

  constructor(mensagem, status = 400){
    this.mensagem = mensagem;
    this.status = status;
  }
}