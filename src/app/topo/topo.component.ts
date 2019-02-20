import { Component } from '@angular/core';

@Component({
    /*
        'app-topo' => tag
        [app-topo] => atributo
        .app-topo  => classe
    */
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    // template: '<p>Esse é o componente topo definido INLINE</p>',
    // template:   `<p>
    //                 Esse é o componente topo definido multilinha
    //             </p>`,
    // styles: [
    //     // '.exemplo { color: red }'
    //     // `   .exemplo {
    //     //         color: red
    //     //     }`
    // ]
    styleUrls: [
        './topo.component.css'
    ]
})

export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês';
}