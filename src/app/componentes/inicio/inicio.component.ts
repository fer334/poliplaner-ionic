import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent } from '@ionic/angular';
import { DataService } from '../../servicios/armar-horario/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  @Input() semana;
  @Input() toCalendar;

  constructor(
    public modalController: ModalController, 
  ) {}

  ngOnInit() {
    
    this.init();
    console.log(this.toCalendar);
    console.log(this.semana)
    

  }

  ionViewWillEnter(){this.init()}
  /**
   * Inicio
   */

  init() {

    console.log('hoola');
    
    const inicializarSemana = ()=>
      [
        {nombre:"Lunes", clases:[],},
        {nombre:"Martes", clases:[],},
        {nombre:"Miércoles", clases:[],},
        {nombre:"Jueves", clases:[],},
        {nombre:"Viernes", clases:[],},
        {nombre:"Sábado", clases:[],},
      ];
    

    // Get data from 
    let data = this.toCalendar
    //this.semana = inicializarSemana();
    console.log(data);
    console.log(this.semana);
    
    
    if (data) {
      //formatearDatos(); 

      data.forEach(element => {
        this.semana.forEach(dia => {
          let clase = element[dia.nombre];

          console.log('hola');
          if (clase!=undefined && clase['Horario'] != undefined ){
            
            dia.clases.push({
              horario: clase['Horario'].replace("-", "a"),
              nombre: element.Asignatura,
            });
          }
        })
      });

    } else {
      console.log('hola2: toCalendar no tiene nada')
      //let semana = window.localStorage.getItem("semana");
      //console.log(JSON.parse(semana));
      //
      //if (semana) {
      //  this.data.semana = JSON.parse(semana);
      //}
    }
  }

  /**
   * Html Controllers
   */
  segmentChanged(ev: any, slides: any) {
    slides.slideTo(ev.detail.value);
  }

  async ionSlideDidChange(ev: any, segment: any, slides: any) {
    let index = await slides.getActiveIndex();
    segment.value = index;
    let active = segment.el.childNodes[index];
    active.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  @ViewChild(IonContent, { static: false }) content: IonContent;
  async onSlideChanged(): Promise<void> {
    //console.log(this.content);
    
    //this.content.scrollToTop;
  }

}
