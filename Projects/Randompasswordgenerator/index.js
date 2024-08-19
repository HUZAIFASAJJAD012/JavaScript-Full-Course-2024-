function passwordGenerate(
  length1,
  lowercase,
  upercase,
  includenumber,
  includesymbols
) {
  const lowercasechars= "abcdefghijklmnopqrstuvwxyz";

  const upercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Numberchars = "123456789";
  const  symbol="! @ # $ % ^ & * ( ) - _ = + [ ] { } ; : "  

  

let allows="";
let password=""


allows+=lowercase? lowercasechars :"";
allows+=upercase? upercasechars :"";
allows+=includenumber? Numberchars :"";
allows+=includesymbols? symbol :"";

console.log(allows);

if(length1<=0){

return `password length must be at least 1`;


}
if (allows.length===0) {
    return`at lest 1 character`
    
}

 
return password;




}

const length1 = 12;
const lowercase = true;
const upercase = true;
const includenumber = true;
const includesymbols = true;

const password = passwordGenerate(
  length1,
  lowercase,
  upercase,
  includenumber,
  includesymbols
);

console.log("passwordGenerate" + password);
