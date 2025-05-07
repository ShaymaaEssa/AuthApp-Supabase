import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase!: SupabaseClient;
  private readonly ID = inject( PLATFORM_ID) ;
  constructor() { 
    if(isPlatformBrowser(this.ID)){
    this.supabase = createClient(environment.supabaseUrl , environment.supabaseKey);

    }
  }

  async insertUser(userData:any){
    const{data, error} = await this.supabase
    .from('Users')
    .insert(userData);

    if (error) {
      throw error;
    }
    return data;

  }
}
