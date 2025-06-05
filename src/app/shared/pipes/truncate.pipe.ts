import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name:'truncate',
  standalone:true
})

export class TruncatePipe{
 transform(value:string, limit = 30, trail = '...'){
  return value.length > limit ? value.substring(0, limit) + trail : value
 }
}