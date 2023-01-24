import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { AlteracaoImpostosComponent } from './paginas/alteracao-impostos/alteracao-impostos.component';
import { ImpostosEstaduaisComponent } from './paginas/impostos-estaduais/impostos-estaduais.component';
import { MatIconModule } from '@angular/material/icon';
import { BotaoExcluirCellComponent } from './botao-excluir-cell/botao-excluir-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [							
    AppComponent,
      NavbarComponent,
      ImpostosEstaduaisComponent,
      AlteracaoImpostosComponent,
      BotaoExcluirCellComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgGridModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
