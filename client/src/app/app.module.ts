import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';      
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';   
import {InputTextModule} from 'primeng/inputtext'; 
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { PersonsPageComponent } from './persons-page/persons-page.component';        
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { PersonFormComponent } from './persons-page/persons-form/person-form/person-form.component';
import {
  DxDataGridModule,
  DxSpeedDialActionModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import { DxTextBoxModule } from "devextreme-angular";
import { DxValidatorModule } from 'devextreme-angular'; 
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'test-realm',
        url: 'http://127.0.0.1:8080',
        clientId: 'frontend-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}



@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    PersonsPageComponent,
    PersonFormComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DxButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    MenuModule,
    TabMenuModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxSelectBoxModule,  
    DxTextBoxModule,
    DxValidatorModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    KeycloakAngularModule,
    ConfirmDialogModule

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
