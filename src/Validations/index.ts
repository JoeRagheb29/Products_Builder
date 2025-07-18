import { IProduct } from "../interfaces";


function Validation(Product : IProduct) {

  let errors:{title:string, description:string, price:string, imageURL:string} = {
    title:"",
    description:"",
    price:"",
    imageURL:""
  }

  const ValidURL = (URL : string) => /^(ftp|http|https):\/\/[^ "]+$/.test(URL);

  if(!Product.title.trim() || Product.title.length < 3 || Product.title.length > 80) {
    errors.title = "Title must be between 3 and 80 characters.";
  }

  if(!Product.description.trim() || Product.description.length < 10 || Product.description.length > 900) {
    errors.description = "Description must be between 10 and 900 characters.";
  }

  if(!Product.price.trim() || isNaN((Number(Product.price)))) {
    errors.price = "Price is required.";
  }

  if(!Product.imageURL.trim() || !ValidURL(Product.imageURL)) {
    errors.imageURL = "Valid Image URL is required." + Product.imageURL;
  }
  return errors;
}

export default Validation;