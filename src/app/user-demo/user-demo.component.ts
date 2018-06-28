import { Component, OnInit } from '@angular/core';

import { UserService } from '../service/user.service';

@Component({
    selector: 'app-user-demo',
    templateUrl: './user-demo.component.html',
    styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {
    userName: string;
    // userService: UserService; // 컨스트럭터 줄임 표현이 있으므로 `userServic` 제거함

    // `userService` 의 싱글인스턴스를 주입한다.
    // `private` 프로퍼티로 설정한다.
    constructor(private userService: UserService) {
        // 따로 할 일이 없으므로 비워둠.
    }

    ngOnInit() {
    }

    signIn(): void {
        // 로그인하면 사용자를 설정한다.
        // 로그인 폼에 입력하는 과정을 의미한다.
        this.userService.setUser({
            name: 'Nate Murray'
        });

        // 서비스에서 사용자명을 읽는다.
        this.userName = this.userService.getUser().name;
        console.log('User name is: ', this.userName);
    }

}
