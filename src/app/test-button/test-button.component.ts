import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {

  @Input() isViewerDisabled: boolean = false
  @Input() viewerTooltip: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
