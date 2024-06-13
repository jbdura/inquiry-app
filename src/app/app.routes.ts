import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InquiryDetailComponent } from './components/inquiry-detail/inquiry-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inquiry/:id', component: InquiryDetailComponent }
];


// import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { InquiryDetailComponent } from './components/inquiry-detail/inquiry-detail.component';

// export const routes: Routes = [
//     { path: '', component: HomeComponent },
//     { path: 'inquiry/:id', component: InquiryDetailComponent }
// ];

// // import { Routes } from '@angular/router';

// // export const routes: Routes = [];
