import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MasterService } from './master.service';
import { take } from 'rxjs';
import { mockResponseModel } from './responseModel.model';

describe('MasterService', () => {
  let service: MasterService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
   
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get api response', () => {
      let responseData=mockResponseModel;
      
      service.getData()
        .pipe(take(1))
        .subscribe((getApi) => {
          expect(getApi).toEqual(responseData);
        });

   
    });
  
});
