import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Connects to the remote service to operate the music controller
 */
@Injectable()
export class RemoteControlService {

  constructor(private http: Http) {}

  private url: string = 'http://mp3soos.i.bolkhuis.nl:8080';

  public play(): void {
    this.sendNewStatus('playing').subscribe(null, null);
  }

  public pause(): void {
    this.sendNewStatus('paused').subscribe(null, null);
  }

  public backward(): void {
    this.sendNewStatus('previous').subscribe(null, null);
  }

  public forward(): void {
    this.sendNewStatus('next').subscribe(null, null);
  }

  public clearPlaylist(): void {
    console.log('Clearing current playlist');
    this.http.delete(`${this.url}/`);
  }

  private sendNewStatus(status: string): Observable<Response> {
    console.log(`Sending new player status: ${status}`);
    return this.http.post(`${this.url}/playlist`, {status: status});
  }
}
