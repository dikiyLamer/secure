import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/shared/Interfaces/interfaces';
import { ContactsService } from 'src/app/shared/Services/ContactsService';
import { ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import config from 'devextreme/core/config';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';
import {DxDataGridComponent,} from 'devextreme-angular';
import { event } from 'devextreme/events';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class PersonsPageComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;

  headers: string[] = ['№','Name','Surname','Patronymic','Company', 'Position', 'Department']

  name: string = ""

  person: Person =
  {
    uid: '',
    name: '',
    surname: '',
    patronymic: '',
    company: '',
    department: '',
    position: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    description: ''
  }

  persons: Person[] = []

  selectedPersons: Person[] = []

  directions: any;

  personDialog: boolean = false;

  form!: FormGroup

  isNew = false

  exportColumns: any[] = []

  cols: any[] = []

  fileName = ''
  
  constructor(private personServise: ContactsService,
              private router: Router,
              private http: HttpClient) { }
  
  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name', customExportHeader: 'Product Code' },
      { field: 'surname', header: 'Surname' },
      { field: 'patronymic', header: 'Patronymic' },
      { field: 'company', header: 'Company' },
      { field: 'department', header: 'department' },
      { field: 'position', header: 'position' },
      { field: 'email', header: 'email' },
      { field: 'phoneNumber', header: 'phoneNumber' },
  ]

    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      company: new FormControl(''),
      patronymic: new FormControl(''),
      position: new FormControl(''),
      department: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      birthday: new FormControl(''),
      description: new FormControl(''),

    })
    
    this.personServise.fetch().subscribe( (person:any) => {
      this.persons = person
      console.log(this.persons)
    })

  }

  openNew() {
    this.personDialog = true
}

createPerson(){

  this.isNew = true  
  this.openNew()
}

async editPerson(person: Person) {
  console.log(person)
  this.person = person
  this.isNew = false  
  this.openNew()
}

async deletePerson(person: Person) {


  await this.personServise.delete(person).subscribe(data=>console.log(data))
  this.reloadCurrentRoute()

}

async savePerson() {
  
  
}

hideDialog(){
  this.personDialog = false;
}

 reloadCurrentRoute()  {
  let currentUrl = this.router.url;
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
  });
}


async onSubmit(){

  const person: Person = {
    uid: this.person.uid,
    name: this.form.value.name,
    surname: this.form.value.surname,
    patronymic: this.form.value.patronymic,
    company: this.form.value.company,
    position: this.form.value.name,
    department: this.form.value.position,
    email: this.form.value.email,
    phoneNumber: this.form.value.phoneNumber,
    birthday: '05.03.1998',
    description: this.form.value.description
  }

  
  if (this.isNew){
    await this.personServise.create(person).subscribe(data=>console.log(data))
  }
  else {
    console.log(person)
    await this.personServise.update(person).subscribe(data=>console.log(data))
  }
  
  this.personDialog = false;
  setTimeout(() => this.reloadCurrentRoute(), 100);
  
}

// exportPdf() {
//   import("jspdf").then(jsPDF => {
//       import("jspdf-autotable").then(x => {
//           const doc = new jsPDF-.default()
//           doc.autoTable(this.exportColumns, this.persons);
//           doc.save('products.pdf');
//       })
//   })
// } 

exportExcel() {
  import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.persons);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "products");
  });
}

// sheet_to_json(worksheet: WorkSheet, opts?: Sheet2JSONOpts): any[];
// readFile(filename: string, opts?: ParsingOptions)


saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

// onFileSelected(event:any) {

//   const file:File = event.target.files[0];

  


  // if (file) {

  //     this.fileName = file.name;

  //     const formData = new FormData();

  //     formData.append("thumbnail", file);

  //     import('xlsx').then(xlsx => {
  //       console.log(xlsx.readFile(this.fileName))
  //     })



  //     //const upload$ = this.http.post("/api/thumbnail-upload", formData);

  //     //upload$.subscribe();
  // }
//}

}





