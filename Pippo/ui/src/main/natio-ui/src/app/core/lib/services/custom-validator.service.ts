import {Injectable} from "@angular/core";

/**

 */
@Injectable()
export class CustomValidator {


}

export const EMAIL_REGEX: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PERSON_NAME: RegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
export const ALPHA_NUMERIC: RegExp = /^[A-Za-z ]+[A-Za-z0-9\u00C0-\u017F-' ]*$/;
