import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  
  @ViewChild("formNombre")
  formNombre!: ElementRef;

  @ViewChild("formDesc")
  formDesc!: ElementRef;

  @ViewChild("nameErr")
  nameErr!: ElementRef;

  @ViewChild("descErr")
  descErr!: ElementRef;


  @Output() onGuardar: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onModificar: EventEmitter<string[]> = new EventEmitter<string[]>();
  
  @Input() inFormData: string[] = [];

  inIndex: number = 0;

  constructor() {
  }
 
  ngOnInit() {
  }

  clickGuardar = (): void => {
    let formData: string[] = [];
    formData.push(this.formNombre.nativeElement.value);
    formData.push(this.formDesc.nativeElement.value);

    let valid: boolean = true;
    for (let i = 0; i < formData.length; i++) {
      if(formData[i].trim() == ""){
        valid = false;
      }
    }


    if (valid) {
      this.onGuardar.emit(formData);
      this.shorErr();
      this.clearForm();
    } else {
      this.shorErr();
    }
  }

  shorErr = (): void => {
    if (this.formNombre.nativeElement.value.trim() == "") {
      this.nameErr.nativeElement.removeAttribute("hidden");
    } else {
      this.nameErr.nativeElement.hidden = true;
    }
    
    if (this.formDesc.nativeElement.value.trim() == "") {
      this.descErr.nativeElement.removeAttribute("hidden");
    } else {
      this.descErr.nativeElement.hidden = true;
    }
  }

  onSelect(formData: string[]){
    
    this.formNombre.nativeElement.value = formData[0];
    this.formDesc.nativeElement.value = formData[1];
    this.inIndex = (formData[3] as unknown as number);

    (<HTMLInputElement> document.getElementById("modBtn")).disabled = false;
    (<HTMLInputElement> document.getElementById("guardarBtn")).disabled = true;
  }

  clearForm() {
    
    this.formNombre.nativeElement.value = "";
    this.formDesc.nativeElement.value = "";
  }
}
