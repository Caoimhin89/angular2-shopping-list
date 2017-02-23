import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  private productForm: FormGroup;
  private isNew: boolean = true;
  private productIndex: number;
  private product: Product;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = +params['id'];
        this.product = this.productService.getProductById(this.productIndex);
        params.hasOwnProperty('id') ? this.editExistingProduct(params) : this.createNewProduct();
        this.initForm();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    !this.isNew ? this.initExistingProductForm() : this.initNewProductForm();
  }

  onSubmit() {
    const newProduct = this.productForm.value;
    if(this.isNew) {
      this.productService.addProduct(newProduct).subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    } else {
      this.productService.editProduct(this.product, newProduct);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, quantity: string) {
    (<FormArray>this.productForm.controls['inclusions']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(quantity, [
          Validators.required,
          Validators.pattern('\\d+')
        ])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.productForm.controls['inclusions']).removeAt(index);
  }

  navigateBack() {
    this.router.navigate(['../']);
  }



  // Sub-Routines

  editExistingProduct(params: any): void {
    this.isNew = false;
    this.productIndex = +params['id'];
    this.product = this.productService.getProductById(this.productIndex);
  }

  createNewProduct() {
    this.isNew = true;
    this.product = null;
  }

  initExistingProductForm() {
    let productIncludes: FormArray = new FormArray([]);
    for(let i = 0; i < this.product.inclusions.length; i++) {
      productIncludes.push(
        new FormGroup({
            name: new FormControl(this.product.inclusions[i].name, Validators.required),
            amount: new FormControl(this.product.inclusions[i].quantity, [
              Validators.required,
              Validators.pattern('\\d+')
            ])
          })
      );
    }
    this.produceForm(this.product.name, this.product.imagePath, this.product.description, productIncludes);
  }

  initNewProductForm() {
    this.produceForm('', '', '', new FormArray([]));
  }

  produceForm(productName: string, productImgUrl: string, productDescription: string, productIncludes: FormArray) {
    this.productForm = this.formBuilder.group({
      name: [productName, Validators.required],
      imagePath: [productImgUrl, Validators.required],
      description: [productDescription, Validators.required],
      inclusions: productIncludes
    });
  }

}
