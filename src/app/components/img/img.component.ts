import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {


    @Input() img: string = "valor inicial";
    @Output() loaded = new EventEmitter<string>();

    imageDefault:string = "./assets/images/default.png"

  constructor() { }



  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoad(){
    console.log(" logueado hijo");
    this.loaded.emit(this.img);
  }

}
