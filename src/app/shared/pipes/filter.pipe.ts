import { Pipe, PipeTransform } from '@angular/core';
import { ProductCard } from '../../interface/interfaces';
@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: ProductCard[], searchText: string): ProductCard[] {
    if (!searchText) return items;

    const searchValue = searchText.toLowerCase();
    return items.filter((item) => item?.title.toLowerCase().includes(searchValue) || item?.category.toLowerCase().includes(searchValue))
  }
}  
            