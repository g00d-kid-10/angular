import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  add(x: number, y: number): number {
    return 0 + x + y;
  }

  minus(x: number, y: number): number {
    return x - y;
  }
}
