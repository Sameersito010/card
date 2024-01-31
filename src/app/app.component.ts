import { Component } from '@angular/core';
import { Icard, Icategory } from './interface/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
  title = 'card';
  pName:string="";
  pDescription:string="";

  cardArray:Array<Icard>=[{
    pName:"productName",
    pDescription:"Product Description",
    pCatg:"product"
  }
]

  addproduct(cardpro:Icategory){
    let obj:Icard={
      pName:this.pName,
      pDescription:this.pDescription,
      pCatg:cardpro
    }
    if(!Object.values(obj).includes("")){
      this.cardArray.push(obj)
      console.log(obj)
      this.pName="";
      this.pDescription=""
    }
   
  }
}
