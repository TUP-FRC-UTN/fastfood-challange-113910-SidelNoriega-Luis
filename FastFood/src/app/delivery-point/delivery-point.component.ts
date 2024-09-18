import { Component, Input } from '@angular/core';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css',
})
export class DeliveryPointComponent {
  
  @Input() Entregas: Pedido[] = [];

  Entregar($index: any) {
    const pedido = this.Entregas[$index]
    alert("Pedido:" + pedido.number + "Entregado")
    this.Entregas.splice($index,1)
  }
}
