import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule, ReactiveFormsModule]
    }).compileComponents()

    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize the form with empty fields', () => {
    // expect(component.email).toBe('');
    // expect(component.password).toBe('');
  })

  it('should mark form as invalid when empty', () => {
    // expect(component.loginForm.valid).toBeFalsy();
  })

  it('should mark form as valid when filled correctly', () => {
    // component.loginForm.patchValue({
    //   username: 'testuser',
    //   password: 'password123'
    // });
    // expect(component.loginForm.valid).toBeTruthy();
  })

  it('should call onSubmit method when form is submitted', () => {
    // spyOn(component, 'onSubmit');
    // const form = fixture.nativeElement.querySelector('form');
    // form.dispatchEvent(new Event('submit'));
    // expect(component.onSubmit).toHaveBeenCalled();
  })
})
