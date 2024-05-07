import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(arrayOfObjs: any[], inputData: any): any[] {
    const searchItem = inputData.toLowerCase();
    return arrayOfObjs.filter
      ((item: any) => item.title.toLowerCase().includes(searchItem) ||
        item.brand.toLowerCase().includes(searchItem) ||
        item.category.toLowerCase().includes(searchItem));
  }
}
