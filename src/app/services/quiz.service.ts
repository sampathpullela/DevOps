import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/sql.json', name: 'SQL' },
      { id: 'data/html5.json', name: 'HTML5' },
      { id: 'data/python.json', name: 'Python' }
    ];
  }

}
