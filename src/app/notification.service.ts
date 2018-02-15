import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  notifications: string[] = [];

  add(n: string) {
    this.notifications.push(n);
  }

  clear() {
    this.notifications = [];
  }
}
