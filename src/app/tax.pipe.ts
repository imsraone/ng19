import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'tax',
    standalone: false
})
export class TaxPipe implements PipeTransform{
    transform(g: number, p:number = 0.1):number {
        return g*p;
    }
}