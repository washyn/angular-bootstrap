import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // AuthService,
  BaseCoreModule,
  CoreModule,
  RootCoreModule,
} from '@abp/ng.core';
import { environment } from 'src/environments/environment';
import { registerLocale } from '@abp/ng.core/locale';
// import { AuthCustomService } from '../auth-custom.service';

// hay una version de abp core, ver si se puede usar...
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule.forRoot({
      environment: environment,
      registerLocaleFn: registerLocale(),
    }),
    // BaseCoreModule,
    // RootCoreModule
  ],
})
export class AbpCustomModule {
  static forRoot(): ModuleWithProviders<AbpCustomModule> {
    return {
      ngModule: AbpCustomModule,
      providers: [
        // {
        //   provide: AuthService,
        //   useClass: AuthCustomService,
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useExisting: ApiInterceptor,
        //   multi: true,
        // },
        // {
        //   provide: ApiInterceptor,
        //   useClass: JwtBearerApiInterceptor,
        // },
      ],
    };
  }
}
