// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TestComponent } from './test.component';

// describe('TestComponent', () => {
//   let component: TestComponent;
//   let fixture: ComponentFixture<TestComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TestComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { TestBed, async } from '@angular/core/testing';
import { TestComponent } from './test.component';

describe('TestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});