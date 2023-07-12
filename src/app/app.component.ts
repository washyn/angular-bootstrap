import { Component, OnInit } from '@angular/core';
import { BookDto, BookService } from './proxy';
import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-bootstrap';

  books = {
    items: [],
    totalCount: 0,
  } as PagedResultDto<BookDto>;

  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService
      .getList({} as PagedAndSortedResultRequestDto)
      .subscribe((response) => {
        this.books = response;
      });
  }
}
