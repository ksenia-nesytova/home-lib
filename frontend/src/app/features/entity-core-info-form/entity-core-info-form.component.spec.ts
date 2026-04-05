import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCoreInfoFormComponent } from './entity-core-info-form.component';

describe('EntityCoreInfoFormComponent', () => {
  let component: EntityCoreInfoFormComponent;
  let fixture: ComponentFixture<EntityCoreInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityCoreInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityCoreInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
