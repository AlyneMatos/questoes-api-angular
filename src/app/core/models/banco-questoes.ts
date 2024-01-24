export interface BancoQuestoes {
  id: number;
  enunciado: string;
  itemCorreto: string;
  alternativas: {
    a: string;
    b: string;
    c: string;
    d: string;
  }
  conteudoQuestao: {
    disciplina: string;
    assunto: string;
    dificuldade: string;
  }
  prova: {
    banca: string;
    ano: string;
  }
  // constructor(periodicElement: PeriodicElement) {
  //   {
  //     this.id = block.id;
  //     this.description = block.description || '';
  //   }
  // }
}
