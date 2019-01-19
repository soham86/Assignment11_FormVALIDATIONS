import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../contact-info';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor() { }
  States=["Maharashtra","Delhi"]
  conobj= new ContactInfo('','','','','','','','','');
  ngOnInit() {
  }

}
