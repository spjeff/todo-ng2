import { Injectable } from '@angular/core';

interface TodoItem {
  name: string;
  done: boolean;
}

@Injectable()
export class SplistService {
  getData(): TodoItem[] {
    return [
      { name: 'first', done: false },
      { name: 'second', done: false },
      { name: 'third', done: false },
      { name: 'fourth', done: true },
      { name: 'fifth', done: true }
    ];
  };

  constructor() {
  }

}
