import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoImpostosComponent } from './paginas/alteracao-impostos/alteracao-impostos.component';
import { ImpostosEstaduaisComponent } from './paginas/impostos-estaduais/impostos-estaduais.component';

const routes: Routes = [
  { path: '', redirectTo: 'alteracaoimpostos', pathMatch: 'full'
  },
  { path: 'alteracaoimpostos', component: AlteracaoImpostosComponent },
  { path: 'alteracaoimpostosEstaduais/:cnpj', component: ImpostosEstaduaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
