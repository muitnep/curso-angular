import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReactiveformComponent } from './cadastro-reactiveform.component';

describe('CadastroReactiveformComponent', () => {
  let component: CadastroReactiveformComponent;
  let fixture: ComponentFixture<CadastroReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroReactiveformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
