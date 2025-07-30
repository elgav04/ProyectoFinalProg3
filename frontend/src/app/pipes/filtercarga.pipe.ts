import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercarga'
})
export class FiltercargaPipe implements PipeTransform {
transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.origen.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          post.destino.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
    };
    return resultPosts;
  }
}
}
