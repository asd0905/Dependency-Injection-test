import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
    selector: 'app-injector-demo',
    templateUrl: './user-demo.injector.component.html',
    styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent implements OnInit {
    userName: string;
    userService: UserService;

    constructor() {
        // _injector_를 생성해 해결을 요청하고 UserService를 생성한다.
        const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

        // 인젝터를 사용해 UserService의 인스턴스를 가져온다.
        this.userService = injector.get(UserService);
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
