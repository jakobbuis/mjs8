import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Connects to the remote service to operate the music controller
 */
@Injectable()
export class RemoteControlService {

  constructor(private http: Http) {}

  public play(): void {
    this.send('playing').subscribe(null, null);
  }

  public pause(): void {
    this.send('paused').subscribe(null, null);
  }

  public backward(): void {
    this.send('previous').subscribe(null, null);
  }

  public forward(): void {
    this.send('next').subscribe(null, null);
  }

  private send(status: string): Observable<Response> {
    console.log(`Sending new player status: ${status}`);
    return this.http.post('http://mp3soos.i.bolkhuis.nl:8080/status', {status: status});
  }
}
