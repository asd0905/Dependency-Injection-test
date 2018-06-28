import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 여기로 가져온다.
import { UserService } from '../service/user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        UserService // <-- 여기에 추가
    ],
    declarations: []
})

export class userDemoModule {  }