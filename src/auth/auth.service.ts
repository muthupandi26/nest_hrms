import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    console.log('router is getting hit');
    return {
      msg: "I'm sign up router",
    };
  }

  signup() {
    return {
      msg: 'Hello nest world',
    };
  }
}
