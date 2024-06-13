import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Add this import
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule ] // Add HttpClientModule here
})
export class HomeComponent implements OnInit {
  inquiries: any[] = [];
  newInquiry = { name: '', email: '', message: '' };

  constructor (private inquiryService: InquiryService, private router: Router) { }

  ngOnInit() {
    this.loadInquiries();
  }

  loadInquiries() {
    this.inquiryService.getInquiries().subscribe((data) => {
      this.inquiries = data;
    });
  }

  createInquiry() {
    this.inquiryService.createInquiry(this.newInquiry).subscribe(() => {
      this.loadInquiries();
      this.newInquiry = { name: '', email: '', message: '' };
    });
  }

  viewInquiry(id: number) {
    this.router.navigate([ `/inquiry/${id}` ]);
  }
}

