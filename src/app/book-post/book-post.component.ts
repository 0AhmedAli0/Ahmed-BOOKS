import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-post.component.html',
  styleUrl: './book-post.component.css',
})
export class BookPostComponent implements OnInit {
  chooseFile: any;
  imgPreview: any;

  BookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    puplishedAt: new FormControl(),
    numberOfPages: new FormControl(),
    description: new FormControl(),
    imgUrl: new FormControl(),
    category: new FormControl(),
    Price: new FormControl(),
    Reviews: new FormControl(),
  });
  constructor(private _BookService: BookService) {}
  ngOnInit(): void {
    this.chooseFile = document.querySelector('form .form-group #imgUrl');
    this.imgPreview = document.querySelector('form .form-group #img-preview');
  }
  onsubmit(form: FormGroup) {
    form.value.imgUrl = this.chooseFile.files[0].name;
    this._BookService.postBook(form.value).subscribe((response) => {
      console.log(response);
    });
  }
  getImgData(): void {
    const files = this.chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener('load', () => {
        this.imgPreview.style.display = 'block';
        this.imgPreview.innerHTML =
          '<img style="width:300px" src="' + fileReader.result + '" />';
      });
    }
  }
}
