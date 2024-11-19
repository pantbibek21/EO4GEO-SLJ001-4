import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './view/pages/layout/layout.component';
import { HeaderComponent } from './view/components/header/header.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ModalModule } from 'ngx-bootstrap';
import { ReleaseNotesComponent } from './view/components/release-notes/release-notes.component';
import {
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';
import { LoadingIndicatorComponent } from './view/components/loading-indicator/loading-indicator.component';

import {AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FirebaseComponent } from './view/components/firebase/firebase.component';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ReleaseNotesComponent,
    TruncatePipe,
    HighlightPipe,
    LoadingIndicatorComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AppFooterModule,
    AppSidebarModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
      ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  exports: [LayoutComponent]
})
export class AppModule { }
