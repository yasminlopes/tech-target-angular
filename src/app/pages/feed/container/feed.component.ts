import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';
import { FeedState } from '../state/feed.state';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feedForm: FormGroup;
  public id: string | null;
  public publicacao$ = this.feedState.feedPosts
  public idUserCnpj: '';


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userLoggedService: UserLoggedService,
    private feedState: FeedState
  ) {}

  ngOnInit(): void {
    this.iniciarForm();
    this.getUserData();
    this.getReactions(6);
    this.getPosts();
  }

  iniciarForm() {
    this.feedForm = this.formBuilder.group({
      user_cnpj_owner: [''],
      post_title: ['', [Validators.required]],
      post_description: ['', [Validators.required]],
      post_picture: null,
    });
  }

  async getPosts() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.api}/posts/`).subscribe((res) => {
        // resolve('ok');
        console.log('getposts', res);
        
        this.feedState.feedPosts.next(res)
      });
      
    });
  }

  getReactions(idPost: number) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`${environment.api}/postReactions/filter?post_id=${idPost}`).subscribe((res) => {
        resolve('ok');
      });
    });
  }

  createPost() {
    this.feedForm.patchValue({ user_cnpj_owner: this.idUserCnpj });
    this.http
      .post<any>(`${environment.api}/posts/`, {
        ...this.feedForm.value,
      })
      .subscribe((res) => {
        console.log(res);
        if (res) {
          this.feedForm.reset();
          this.toastr.success('Publicado com sucesso!');
        } else {
          this.toastr.error('Oops! Erro ao publicar. ');
        }
      });
  }

  getUserData() {
    const user = localStorage.getItem('user-tt');

    if (user) this.userLoggedService.user = JSON.parse(user);
    this.idUserCnpj = this.userLoggedService.user.user.id;
  }

  
}
