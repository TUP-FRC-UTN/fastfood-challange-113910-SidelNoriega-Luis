import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from './pos/pos.component';
import { Pedido } from './pedido';
import { JsonPipe } from '@angular/common';
import { KitchenComponent } from './kitchen/kitchen.component';
import { DeliveryPointComponent } from './delivery-point/delivery-point.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    POSComponent,
    JsonPipe,
    KitchenComponent,
    DeliveryPointComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  PedidosIngresados: Pedido[] = [];
  Entregas: Pedido[] = [];
  
  PedidosSinFecha(): any[] {
    return this.PedidosIngresados.map(({ date, ...rest }) => rest);
  }

  CargarPedido(event: Pedido) {
    this.PedidosIngresados.push(event);
  }

  CargarPedidoListo(event: Pedido) {
    this.Entregas.push(event);
  }
}
