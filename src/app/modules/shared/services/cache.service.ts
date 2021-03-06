import {DataService} from './data.service';
import {Inject} from '@angular/core';

import * as _ from 'underscore';
import {FeedItem} from '../../feed/entity/feed-item';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {IFeedItemResponse} from '../../../interfaces/response.interface';


export class CacheService {
    private _feed: ReplaySubject<FeedItem[]>;

    constructor(@Inject(DataService) private dataService: DataService) {
        this._feed = new ReplaySubject();
    }

    cacheFeed(): void {
        this.dataService.loadFeed().subscribe((feedResponse: any) => {
            const feedTemp = [];
            _.each(feedResponse, (feedItem: IFeedItemResponse) => {
                feedTemp.push(new FeedItem(feedItem));
            });
            this.setFeed(feedTemp);
        });
    }

    get feed(): ReplaySubject<FeedItem[]> {
        return this._feed;
    }

    setFeed(value: FeedItem[]) {

        this._feed.next(value);
    }
}
