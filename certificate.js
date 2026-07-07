const images = [
"assets/certificates/1.jpg",
"assets/certificates/2.jpg",
"assets/certificates/3.jpg",
"assets/certificates/4.jpg",
"assets/certificates/5.jpg",
"assets/certificates/6.jpg"
];

let current = 0;

function openCertificate(src){
    current = images.indexOf(src);
    document.getElementById("certificateImage").src = src;
    document.getElementById("certificateLightbox").style.display = "flex";
}

function closeCertificate(){
    document.getElementById("certificateLightbox").style.display = "none";
}

function nextCertificate(){
    current = (current + 1) % images.length;
    document.getElementById("certificateImage").src = images[current];
}

function prevCertificate(){
    current = (current - 1 + images.length) % images.length;
    document.getElementById("certificateImage").src = images[current];
}

document.addEventListener("keydown", function(e){
    if(e.key==="Escape") closeCertificate();
    if(e.key==="ArrowRight") nextCertificate();
    if(e.key==="ArrowLeft") prevCertificate();
});