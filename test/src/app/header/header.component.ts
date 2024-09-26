import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService){

  }

  ngOnInit(){
    // this.onFetchData();
    this.userSub = this.authService.user.subscribe( user =>{
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);     
      
    });
  }

  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;

  onSaveData(){
    this.dataStorageService.storeRecipes();

  }

  onFetchData(){
    this.dataStorageService.fetchRecipes()
    .subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  
  ngOnDestroy(){
    //throw new Error('Method not implemented.');
    this.userSub.unsubscribe();
  }

}
