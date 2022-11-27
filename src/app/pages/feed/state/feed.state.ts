import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feed } from '../model/feed.model';

@Injectable({
    providedIn: 'root'
})

export class FeedState{
    public feedPosts = new BehaviorSubject<Feed[]>([])
}