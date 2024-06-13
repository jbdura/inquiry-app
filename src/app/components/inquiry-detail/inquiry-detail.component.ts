import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Add this import
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-inquiry-detail',
  templateUrl: './inquiry-detail.component.html',
  styleUrls: [ './inquiry-detail.component.css' ],
  standalone: true,
  imports: [ CommonModule, FormsModule, HttpClientModule ] // Add HttpClientModule here
})
export class InquiryDetailComponent implements OnInit {
  inquiry: any = {};

  constructor (
    private route: ActivatedRoute,
    private inquiryService: InquiryService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.inquiryService.getInquiry(Number(id)).subscribe((data) => {
      this.inquiry = data;
    });
  }

  updateInquiry() {
    const id = this.route.snapshot.paramMap.get('id');
    this.inquiryService.updateInquiry(Number(id), this.inquiry).subscribe(() => {
      this.router.navigate([ '/' ]);
    });
  }

  deleteInquiry() {
    const id = this.route.snapshot.paramMap.get('id');
    this.inquiryService.deleteInquiry(Number(id)).subscribe(() => {
      this.router.navigate([ '/' ]);
    });
  }
}
