import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ContactUs } from "../models/contact-us.model";

@Injectable({
  providedIn: "root",
})
export class ContactUsService {
  private apiUrl =
    "https://jajtaxirugby-babad8d23c4f.herokuapp.com/api/ContactUs";

  constructor(private http: HttpClient) {}

  // Create a new message to the business
  createContactMessage(contact: ContactUs): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, contact);
  }
}
