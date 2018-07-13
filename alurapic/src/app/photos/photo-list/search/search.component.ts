import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  // Bind evento
  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  // Atributos
  debounce: Subject<string> = new Subject<string>();
  //filter: string = '';

  constructor() { }

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300)) // idle for 3s
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe(); // Libera memoria ao acessar outra rota
  }

}
