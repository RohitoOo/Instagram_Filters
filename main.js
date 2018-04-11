const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


// let as it will be replaced and should not stay constant
let img = new Image();
let fileName = '' ;
const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//Filter and Effects Events

document.addEventListener("click" ,  (e) =>  {

if ( e.target.classList.contains("filter-btn") ){

console.log("The Buttons w/ filter-btn class are workkkinnnnggg");

if(e.target.classList.contains("brightness-add") ){

// CDN Caman function to increase and decrease brightness <script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script>

Caman('#canvas' , img , function (){
this.brightness(5).render();
});
console.log("The Brightness ADD buttons are workkkinnnnggg");
}
if(e.target.classList.contains("brightness-remove") ){

  Caman('#canvas' , img , function (){
  this.brightness(-5).render();
  });
  console.log("The Brightness REMOVE buttons are workkkinnnnggg");
}



if(e.target.classList.contains("contrast-add") ){

// CDN Caman function to increase contrast

Caman('#canvas' , img , function (){
this.contrast(5).render();
});
console.log("The  Contrast ADD buttons are workkkinnnnggg");
}
if(e.target.classList.contains("contrast-remove") ){

  Caman('#canvas' , img , function (){
  this.contrast(-5).render();
  });
  console.log("The contrast REMOVE buttons are workkkinnnnggg");
}


if(e.target.classList.contains("saturation-add") ){

// CDN Caman function to increase saturation

Caman('#canvas' , img , function (){
this.saturation(5).render();
});
}
if(e.target.classList.contains("saturation-remove") ){

  Caman('#canvas' , img , function (){
  this.saturation(-5).render();
  });
}


if(e.target.classList.contains("vibrance-add") ){

// CDN Caman function to increase Vibrance

Caman('#canvas' , img , function (){
this.vibrance(5).render();
});
}
if(e.target.classList.contains("vibrance-remove") ){

  Caman('#canvas' , img , function (){
  this.vibrance(-5).render();
  });
}

// Effects

if(e.target.classList.contains("vintage-add") ){

  Caman('#canvas' , img , function (){
  this.vintage().render();
  });
}
if(e.target.classList.contains("lomo-add") ){

  Caman('#canvas' , img , function (){
  this.lomo().render();
  });
}
if(e.target.classList.contains("clarity-add") ){

  Caman('#canvas' , img , function (){
  this.clarity().render();
  });
}
if(e.target.classList.contains("sincity-add") ){

  Caman('#canvas' , img , function (){
  this.sinCity().render();
  });
}
if(e.target.classList.contains("crossprocess-add") ){

  Caman('#canvas' , img , function (){
  this.crossProcess().render();
  });
}


if(e.target.classList.contains("pinhole-add") ){

  Caman('#canvas' , img , function (){
  this.pinhole().render();
  });
  console.log("The Pinhole Add buttons are workkkinnnnggg");
}

if(e.target.classList.contains("nostoalgia-add") ){

  Caman('#canvas' , img , function (){
  this.nostalgia().render();
  });
}

if(e.target.classList.contains("hermajesty-add") ){

  Caman('#canvas' , img , function (){
  this.herMajesty().render();
  });
}

};
///End of filer-btn check classlist

})



// Remove Applied Effects VIA Caman

revertBtn.addEventListener("click" , (e) => {

Caman (canvas, img , function ()  {

  this.revert();
})

})




//Upload File

uploadFile.addEventListener ('change', (e) => {
//get file

const file = document.getElementById('upload-file').files[0];

// Intialize Filereader
//read file as data url and insert into canvas

var reader = new FileReader ();
if(file) {

//set file name
fileName = file.name;
// read data URL
reader.readAsDataURL(file);

}

// Add Image to Canvas

reader.addEventListener('load', () => {
//creating image
img = new Image();
// setting src= ""
img.src = reader.result ;
// on image load add to canvas

img.onload = function () {

//ctx context

  canvas.width = img.width ;
  canvas.height = img.height ;
  ctx.drawImage( img , 0 , 0 , img.width , img.height );
  canvas.removeAttribute ('data-caman-id '); // unknow function but mandatory
}

} , false );

});



// Download Editted Image
downloadBtn.addEventListener("click" , (e) => {
// get file extentsion .jpg or .png at the end of the filename input
const fileExtension = fileName.slice(-4)

//Edit Original File name and create new file name for download

let newFileName;

//check image type ( hopefully jpg or png )

if (fileExtension === ".jpg" || fileExtension === ".png" ) {


  newFileName = fileName.substring(0 , fileName.length - 4) + "-edited-By-Rohito.jpg" ;
  console.log(newFileName);
}

// call download

download(canvas, newFileName);

});
// time to download and insert new name

function download (canvas , filename ) {

let e;
//create link

const link = document.createElement('a');


  //set properties ?? @ prashant ??

  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg" , 0.8);
  // New Mouse Event

  e = new MouseEvent('click');

  //dispatch event

  link.dispatchEvent(e);
}
