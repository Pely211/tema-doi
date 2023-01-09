import { Component, OnInit, Input } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() content: string | undefined;
  @Input() title: string | undefined;

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void { }

  showModal(): void {
    // Set the modal's content to the component's content property
    this.modalService.create({
      nzContent: this.content,
      nzTitle: this.title,
    });
  }
}
