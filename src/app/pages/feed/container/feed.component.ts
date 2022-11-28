import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserLoggedService } from 'src/app/shared/services/user-logged/user-logged.service';
import { environment } from 'src/environments/environment';
import { Feed } from '../model/feed.model';
import { FeedState } from '../state/feed.state';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feedForm: FormGroup;
  public id: string | null;
  public publicacao$ = this.feedState.feedPosts;
  public idUserCnpj: '';
  public idUserCpf: '';
  public dadosPost: Feed[];

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
      this.http
        .get<any>(`${environment.api}/posts/`)
        .pipe()
        .subscribe((res) => {
          this.feedState.feedPosts.next(this.orderByDate(this.setPosts(res)));
        });
    });
  }

  setPosts(res: any) {
    this.dadosPost = res;
    this.dadosPost.map((value) => {
      this.http
        .get<any>(`${environment.api}/postReactions/filter?post_id=${value.id}`)
        .subscribe((res) => {
          const lastReaction = res.pop();
          return (value.id_reaction = lastReaction
            ? lastReaction.reaction.id
            : null);
        });
    });
    return this.dadosPost;
  }

  createPost() {
    this.feedForm.patchValue({ user_cnpj_owner: this.idUserCnpj });
    this.http
      .post<any>(`${environment.api}/posts/`, {
        ...this.feedForm.value,
      })
      .subscribe((res) => {
        if (res) {
          this.feedForm.reset();
          this.toastr.success('Publicado com sucesso!');
          this.getPosts();
        } else {
          this.toastr.error('Oops! Erro ao publicar. ');
        }
      });
  }

  getUserData() {
    const user = localStorage.getItem('user-tt');

    if (user) this.userLoggedService.user = JSON.parse(user);

    if (this.userLoggedService?.isCompany) {
      this.idUserCnpj = this.userLoggedService.user.user.id;
    } else {
      this.idUserCpf = this.userLoggedService.user.user.id;
    }
  }

  reactions(data: Feed) {
    this.http
      .post<any>(
        `${environment.api}/postReactions/`,
        this.returnPostObject(data)
      )
      .subscribe((res) => {
        this.getPosts();
      });
  }

  returnPostObject(data: Feed) {
    return {
      post: data.id,
      user_reacting: this.idUserCpf,
      reaction: data.id_reaction == 2 ? 1 : 2,
    };
  }

  orderByDate(array: Feed[]) {
    return array.sort(
      (a, b) =>
        new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
    );
  }
}
