import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publications.service';
import { Publication, PublicationResponse } from '../publication.model';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss']
})
export class PublicationFormComponent implements OnInit {

  publicationResponse: PublicationResponse = new PublicationResponse();
  publication: string;

  constructor(
    private publicationService: PublicationService
  ) { }

  ngOnInit() {
  }

  getPublications(publicationName: string) {
    this.publicationResponse.docs = [];
    this.publicationService.getPublications(publicationName)
      .subscribe(
      publicationResponse => {
        this.publicationResponse = publicationResponse;
      },
      error => {
        console.log(error);
      }
      )
  }
}
