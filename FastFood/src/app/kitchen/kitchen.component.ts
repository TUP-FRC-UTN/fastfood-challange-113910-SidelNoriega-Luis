import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../pedido';
import { POSComponent } from '../pos/pos.component';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [POSComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent {
  @Input() PedidosIngresados: Pedido[] = [];
  Cocinando: boolean = true;

  PedidoCocinando: Pedido[] = [];
  
  Cocinar(index: any) {
    const pedido = this.PedidosIngresados[index]
    this.PedidoCocinando.push(pedido)
    this.PedidosIngresados.splice(index, 1)
    this.Cocinando = false
  }

  @Output() PedidoCocinado = new EventEmitter<Pedido>()

  ParaEntrega(item: Pedido) {
    this.PedidoCocinado.emit(item)
    this.PedidoCocinando.splice(0, 1)
    this.Cocinando= true
  }
}
