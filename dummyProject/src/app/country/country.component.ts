import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { COUNTRIES } from '../../countries';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  userForm:FormGroup;
  countries:object = COUNTRIES;
  selectedCountry:any = "" ;

  // from NGX
  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.Canada, CountryISO.UnitedKingdom, CountryISO.Nigeria];


  constructor(private _http: HttpService, formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      firstName:[""],
      lastName:[""],
      email:["",[Validators.required]],
      password:["", Validators.compose([Validators.required, Validators.minLength(8)])],
      countryFlags1:[""],
      countryFlags2:[""],
      countryFlags3:[""],
      phone: new FormControl(undefined, [Validators.required])
    })
   }

  ngOnInit(): void {
    this._http.myCountries().subscribe( data => {
      this.countries = data;

    });

  }
  onSelectCountry(country:any){
    this.selectedCountry = country.countryName +"     + " + country.internationalDialingCode;
   //  this.selectedCountry = country.countryName.concat( country.internationalDialingCode )
 }

	changePreferredCountries() {
		this.preferredCountries = [ CountryISO.Canada, CountryISO.UnitedKingdom, CountryISO.Nigeria];
	}
}
