import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, Observable } from 'rxjs';
import { BancoQuestoes } from 'src/app/core/models/banco-questoes';
import { BancoQuestoesService } from 'src/app/core/service/banco-questoes.service';

@Component({
  selector: 'app-banco-questoes',
  templateUrl: './banco-questoes.component.html',
  styleUrls: ['./banco-questoes.component.scss']
})
export class BancoQuestoesComponent {

  bancoQuestoes: BancoQuestoes[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: BancoQuestoes | undefined;
  displayedColumns: string[] = ['id', 'enunciado', 'itemCorreto', 'a','b','c','d','disciplina','assunto','dificuldade','banca','ano'];
  respostaSelecionada: string = '';
  idItem: number = 1;
  constructor(private bancoQuestoesService: BancoQuestoesService,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getQuestoes();
  }

  getQuestoes(): void {
    this.bancoQuestoesService.list()
      .subscribe((questoes) => {
        this.bancoQuestoes = questoes;
        this.loadCurrentQuestion();
      });
  }

  verificarResposta() {
    console.log(this.idItem,this.respostaSelecionada);
    this.bancoQuestoesService.verificarItemCorreto(this.idItem, this.respostaSelecionada).subscribe(
      (response) => {
        console.log(response); // Lide com a resposta do servidor aqui
      },
      (error) => {
        console.error('Erro ao verificar resposta:', error); // Lide com erros aqui
      }
    );
  }
  loadCurrentQuestion(): void {
    this.currentQuestion = this.bancoQuestoes[this.currentQuestionIndex];
  }

  navigate(offset: number): void {
    const nextIndex = this.currentQuestionIndex + offset;

    if (nextIndex >= 0 && nextIndex < this.bancoQuestoes.length) {
      this.currentQuestionIndex = nextIndex;
      this.loadCurrentQuestion();
    }
  }
}
