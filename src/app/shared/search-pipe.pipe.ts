import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(arrayOfObjs: any[], inputData: any): any {
    try {
      const searchItem = inputData.toLowerCase();
      return arrayOfObjs.filter((items: any) =>
        items.title.includes(searchItem));
    } catch (error) {
      console.log(error);
    }
  }
}
