// import { AbpAuthResponse, IAuthService, LoginParams } from '@abp/ng.core';
// import { HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Params } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthCustomService implements IAuthService {
//   constructor() {}
//   get isInternalAuth(): boolean {
//     return true;
//   }

//   get isAuthenticated(): boolean {
//     return false;
//   }

//   init(): Promise<any> {
//     return Promise.resolve(undefined);
//   }

//   logout(queryParams?: Params | undefined): Observable<any> {
//     return Observable.create();
//   }

//   navigateToLogin(queryParams?: Params | undefined): void {}

//   login(params: LoginParams): Observable<any> {
//     return Observable.create();
//   }

//   loginUsingGrant(
//     grantType: string,
//     parameters: object,
//     headers?: HttpHeaders | undefined
//   ): Promise<AbpAuthResponse> {
//     return Promise.resolve({} as AbpAuthResponse);
//   }
// }
