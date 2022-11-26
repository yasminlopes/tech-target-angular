import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  
  feedForm: FormGroup;
  public id: string | null;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.iniciarForm();

  }

  iniciarForm() {
    
    this.feedForm = this.formBuilder.group({
      user_cnpj_owner: [''],
      post_title: ['', [Validators.required]],
      post_description: ['', [Validators.required]],
      post_picture: null,
    });
  }

  async getPosts(){
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.api}/posts/`).subscribe( res => {
        console.log(res, 'get')
        resolve('ok')
      })
    })
  }

  createPost(){
    console.log(this.feedForm.value)
    this.http.post<any>(`${environment.api}/posts/`, 
      {
        ...this.feedForm.value
      }
    ).subscribe( res => {
      console.log(res)
      if(res) {
        this.toastr.success('Publicado com sucesso!');
      }else{
        this.toastr.error('Oops! Erro ao publicar. ');
      }
    })
  }

  // public handleSaveForm(bank: Bank, idRotaEditar: number) {
  //   bank.id_conta_bancaria = idRotaEditar;

  //   if (idRotaEditar) return this.handleUpdate(bank);
  //   return this.handleCreate(bank);
  // }

}
