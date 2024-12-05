export interface DataTypes {
  resort: Resort;
  flightDetails: FlightDetails;
  bookingDetails: BookingDetails;
}

export interface BookingDetails {
  party: Party;
  lengthOfStay: number;
  price: Price;
}

export interface Party {
  adults: number;
  children: number;
  infants?: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface FlightDetails {
  departureAirport: string;
  departureDate: Date;
}

export interface Resort {
  id: string;
  name: string;
  regionName: string;
  countryName: string;
  starRating: number;
  overview: string;
  image: Image;
}

export interface Image {
  url: string;
  description: string;
}
