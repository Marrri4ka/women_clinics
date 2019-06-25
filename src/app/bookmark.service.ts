import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Clinic } from './models/clinic.model';

@Injectable()
export class BookmarkService {
 clinics: FirebaseListObservable<any[]> 
 
  constructor(private database: AngularFireDatabase) { 
    this.clinics = database.list('bookmarkedClinics');
  }

  addToBookmarked(clinic: Clinic){
    this.clinics.push(clinic);
  }

  getClinics(){
    return this.clinics;
  }
}
