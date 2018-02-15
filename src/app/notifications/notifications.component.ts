//NOT IN USE AT THE MOMENT
//TODO MAKE A LOGGER / MESSAGE GIVER TO ADMIN -> REQUIRES ADMIN TO BE ACTUALLY USEFUL

import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public notificationService: NotificationService) {}

  ngOnInit() {
  }

}
