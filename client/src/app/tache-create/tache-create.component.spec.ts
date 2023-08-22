import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheCreateComponent } from './tache-create.component';

describe('TacheCreateComponent', () => {
  let component: TacheCreateComponent;
  let fixture: ComponentFixture<TacheCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
