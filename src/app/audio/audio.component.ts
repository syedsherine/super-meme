import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, ContentChild, Directive } from '@angular/core';

@Component({
  selector:"audio",
  template:"<ng-content></ng-content>"
})

export class Audio {
  native:any;
  constructor(el: ElementRef) {
   this.native = el.nativeElement;
  }
  get source() {
   return this.native.querySelector('source').getAttribute("src");
  }
  play() {    
    this.native.play();
  } 
  stop() {
    this.native.pause();
  }
}

@Directive({
   selector:"[preview]",
   host: {
     "(mouseenter)":"play()",
     "(mouseout)":"stop()"
   }
})

export class PreviewDirective {
 @ContentChild(Audio) ngNativeElement: Audio;
 play() {
   this.ngNativeElement.play();
 }
 stop() {
     this.ngNativeElement.stop();
  }
  
}

@Component({
  selector:"cool-audio",  
  template:"<div preview><audio #audioElement controls loop><ng-content></ng-content></audio><button class='btn btn-info' (click)='play()'>Play</button><button class='btn btn-danger' (click)='stop()'>Stop</button></div>"	
})

export class CoolAudio {
    @ViewChild('audioElement') ngAudioElement: ElementRef;
    @ContentChild('sourceElement') ngSrcElement: ElementRef;
    @ViewChild(Audio) ngNativeElement: Audio;
  element:any;
	constructor( private el:ElementRef ) {	}
	/*ngAfterViewInit() {
      this.element = this.ngAudioElement.nativeElement;
	}*/
	play() {
	  console.log(this.ngNativeElement.source);
	  this.ngNativeElement.play();
	}	
    stop() {
	   this.ngNativeElement.stop();
	}
}

@Component({
  selector: 'app-audio',  
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  tracks = [{path:"../assets/tracks/TRACK1.MP3"},{path:"../assets/tracks/TRACK1.MP3"},{path:"../assets/tracks/TRACK5.mp3"},{path:"../assets/tracks/TRACK6.mp3"}];

  audioPath = "../assets/tracks/Aga_Naga.mp3";

  constructor() { }

  ngOnInit() {
  }

}
