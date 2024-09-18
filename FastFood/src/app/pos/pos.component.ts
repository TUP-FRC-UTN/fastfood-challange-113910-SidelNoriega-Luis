import { Component, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../pedido';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  Pedido: Pedido = {
    number: 0,
    name: '',
    description: '',
    date: new Date()
  };
    
  @Output() ordenar = new EventEmitter();
  
  /* onNameOrderChange(event: any) {
    this.Pedido.name = event.target.value;
  }
  onDescriptionOrder(event: any) {
    this.Pedido.description = event.target.value;
  } */

  EnviarPedido() { 
    this.Pedido.number = Math.floor(Math.random() * 1000) + 1;
    this.Pedido.date = new Date();
    this.ordenar.emit(this.Pedido);
    this.Pedido = {
      number: 0,
      name: '',
      description: '',
      date: new Date()
    }
  }

}
