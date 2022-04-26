import { Component, OnInit, Input, Output, EventEmitter, OnChanges,
   AfterViewInit, OnDestroy, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img:string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img =>', this.img)

  }




    @Input() alt: string = "";
    @Output() loaded = new EventEmitter<string>();
    imageDefault:string = "./assets/images/default.png"
   //counter = 0;
    //counterFn:number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log("constructor", 'imgValue', this.img)

  }

  ngOnChanges(changes: SimpleChanges){
    // before render
    // changes inputs -- times


    console.log("ngOnChanges", 'imgValue', this.img)
    console.log('changes',changes)


  }



  ngOnInit(): void {

    // before render
    // async  - fetch -- once time

    console.log("ngOnInit", 'imgValue', this.img)
  /*this.counterFn =  window.setInterval(() =>{
      this.counter += 1;
      console.log('run counter')
    }, 1000);*/

  }

  ngAfterViewInit(){
    // AFTER RENDER
    //handler childrens

    console.log("ngAfterViewInit",)

  }

  ngOnDestroy(){
    // delete
    console.log("ngOnDestroy")
    //window.clearInterval(this.counterFn)
  }



  imgError(){
    this.img = this.imageDefault
  }

  imgLoad(){
    console.log(" logueado hijo");
    this.loaded.emit(this.img);
  }


}
