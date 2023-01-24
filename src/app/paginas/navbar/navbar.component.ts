import { Component, Input, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() titulo!: string;
  @Input() voltar!: boolean;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {}
}
