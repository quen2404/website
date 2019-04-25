import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkIconsComponent } from './social-network-icons.component';

describe('SocialNetworkIconsComponent', () => {
  let component: SocialNetworkIconsComponent;
  let fixture: ComponentFixture<SocialNetworkIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
