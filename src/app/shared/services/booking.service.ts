import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AirportBooking } from "../models/airport-booking.model";
import { Booking } from "../models/booking.model";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private apiUrl =
    "https://jajtaxirugby-babad8d23c4f.herokuapp.com/api/Booking";

  constructor(private http: HttpClient) {}

  // Create a new booking
  createBooking(booking: Booking): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, booking);
  }

  // Create a new airport booking
  createAirportBooking(booking: AirportBooking): Observable<any> {
    return this.http.post(`${this.apiUrl}/createAirport`, booking);
  }

  // Fetch all bookings
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/get`);
  }

  // Fetch all airport bookings
  getAirportBookings(): Observable<AirportBooking[]> {
    return this.http.get<AirportBooking[]>(`${this.apiUrl}/getAirport`);
  }

  // Fetch a booking by ID (Fix: ID should be a string)
  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/get/${id}`);
  }

  // Fetch an airport booking by ID (Fix: ID should be a string)
  getAirportBookingById(id: string): Observable<AirportBooking> {
    return this.http.get<AirportBooking>(`${this.apiUrl}/getAirport/${id}`);
  }

  // Update a booking (Fix: Use 'Id' instead of 'id' for consistency with .NET DTO)
  updateBooking(booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(
      `${this.apiUrl}/update/${booking.id}`,
      booking
    );
  }

  // Update an airport booking (Fix: Use 'Id' instead of 'id')
  updateAirportBooking(booking: AirportBooking): Observable<AirportBooking> {
    return this.http.put<AirportBooking>(
      `${this.apiUrl}/updateAirport/${booking.id}`,
      booking
    );
  }

  // Delete a booking by ID (Fix: Ensure ID is string)
  deleteBooking(bookingId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${bookingId}`);
  }

  // Delete an airport booking by ID (Fix: Ensure ID is string)
  deleteAirportBooking(bookingId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteAirport/${bookingId}`);
  }
}
