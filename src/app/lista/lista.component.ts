import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  rows: string[][] = [["TA22", "Spring Back end"],
                      ["TA10", "Java POO"],
                      ["TA30", "Bootstrap"]];

  
  @Output() onSelect: EventEmitter<string[]> = new EventEmitter<string[]>();

  addInRow(inRow: string[]){
    console.log("Row added");
    this.rows.push(inRow);
  }

  deleteRow(index: number){
    this.rows.splice(index, 1);
    console.log(this.rows);
  }

  terminar(index: number){
    console.log(document.getElementsByTagName("tr")[index].children[3].children[0])
    document.getElementsByTagName("tr")[index].classList.add("table-success");
    (<HTMLInputElement> document.getElementsByTagName("tr")[index].children[3].children[0]).disabled = true;
  }

}
