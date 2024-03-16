import { defineStore } from "pinia";
import axios from "axios";

type BtnAction = 'active' | 'pending';

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            isFormOpened: false,
            action: <'signup'| 'login'>('login'),
            errorMessage: '',
            btnAction: <BtnAction>('active'),
            email: '',
            username: '',
            login_password: '',
            signup_password: '',
            signup_repeat_password: '',

        }
    },
    actions: {
        toggleForm() {
            this.isFormOpened = !this.isFormOpened;
        },
        switchForm(form: 'login' | 'signup') {
            this.action = form;
        },
        validateSignUpCredentials(): boolean {
            
            if(!this.validateEmail(this.email)) {
                if(this.email.length > 0) {
                    this.errorMessage = 'Введите корректный email.';
                    return false;
                }
                this.errorMessage = '';
                return false;
            }
            if(!this.validatePassword(this.signup_password)) {
                if(this.signup_password.length > 0) {
                    this.errorMessage = 'Минимальная длина пароля - 10 символов.'
                    return false;
                }
                this.errorMessage = '';
                return false;
            }
            if(!this.validateRepeatPassword()) {
                if(this.signup_repeat_password.length > 0) {
                    this.errorMessage = 'Пароли не совпадают';
                    return false;
                }
                this.errorMessage = '';
                return false;
            }
            
            this.errorMessage = '';
            this.btnAction = 'active';
            return true;
        }, 
        async signUp() {
            if(!this.validateSignUpCredentials()) {
                return;
            }
            this.btnAction = 'pending';
            const body = {email: this.email, username:this.username, password:this.signup_password};
            const req = await axios.post('/api/auth/signup', JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                
                console.log(res);
            })
            .catch(err => {
                if(err.response.status == 400) {
                    this.errorMessage = `Пользователь ${this.email} уже существует`;
                    this.action = 'login';
                }
            });
            this.btnAction = 'active';
        },
        switchBtnAction(action: BtnAction) {
            this.btnAction = action;
        },
        validateEmail(email:string): boolean {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return false;
            }
            return true;
        },
        validatePassword(password:string): boolean {
            if(password.length < 10) {
                return false;
            } 
            return true;
        },
        validateRepeatPassword(): boolean {
            if(this.signup_password != this.signup_repeat_password) {
                return false;
            }
            return true;
        },
        async login() {            
            this.btnAction = 'pending';
            const user = {
                username: this.email,
                password: this.login_password,
            }
            
            await axios.post('/api/auth/login', JSON.stringify(user), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log(res.data.access_token);
                this.toggleForm();    
            })
            .catch(err => {
                if(err.response.status == 401) {
                    this.errorMessage = 'Неправильный логин или пароль';
                }
            });
            this.btnAction = 'active';
        }
        
    }
})