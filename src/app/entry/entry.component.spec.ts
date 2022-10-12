import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { MasterService } from '../service/master.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ EntryComponent ],
      providers: [ MasterService ]
    })
    .compileComponents();
    

    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach( () => {
    const masterService = TestBed.inject(MasterService);
 });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
