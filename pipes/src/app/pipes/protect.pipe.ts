import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'protect',
})
export class ProtectPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const size: number = value.length;
    let ans: string = '';
    for (let i = 0; i < size; i++) {
      ans += '*';
    }
    return ans;
  }
}
