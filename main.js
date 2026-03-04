

const images = [
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1729611558-02.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1741031984-meatt.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1759572429-Web-Cover.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760655605-WhatsApp-Image-2025-10-16-at-17-44-04--1-.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1760655653-WhatsApp-Image-2025-10-16-at-17-43-05.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1764548302-Website-Banner.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1764932529-1741105851-WhatsApp-Image-2025-03-04-at-9-24-50-PM-11zon.webp%3Fver%3D10&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1768293329-Bank-Discounts-Web-Cover.webp&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1770037664-WhatsApp-Image-2026-02-02-at-18-06-29.webp%3Fver%3D10&w=1920&q=90",
"https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1771511021-ramadan-feast.webp&w=1920&q=90"
];

let index = 0;
const slider = document.getElementById("slider");




function forward(){
    index++;
    if(index == images.length -1){
        index = 0;   
    }
    slider.src = images[index];
}

function backward(){
    index--;
    if(index == 0){
        index = images.length - 1;   
    }
    slider.src = images[index];
}


setInterval(forward, 3000);

