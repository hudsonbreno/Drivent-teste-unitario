import { ApplicationError } from '@/protocols';

export function cannotBookingError(): ApplicationError {
  return {
    name: 'cannotBookingError',
    message: 'cannot Booking Error',
  };
}
