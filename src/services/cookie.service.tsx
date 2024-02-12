import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export default class Cookie {  
    static getItem(key: string = '') {
      return JSON.parse(getCookie(key) || 'false');
    }
  
    static setItem(key: string, value: any) {
      setCookie(key, JSON.stringify(value));
    }
  
    static removeItem(key: string) {
      deleteCookie(key);
    }
  }
  