
document.getElementsByTagName("button")[0].addEventListener('click', sezar);

function sezar (){
    var getText= document.querySelector('#password').value;
    var getNumber= parseInt(document.getElementById('number').value);
    document.getElementById("resultarea").innerHTML = sifrele(getText,getNumber);
} 


function sifrele(sifresizMetin, basamakSayisi){

    sifresizMetin= sifresizMetin.toUpperCase();
    
    var sifreliMetin ='';
    var temp;

    for(let i=0; i<sifresizMetin.length; i++){
        if(sifresizMetin.charCodeAt(i)!== 32 && sifresizMetin.charCodeAt(i)>=65 && sifresizMetin.charCodeAt(i)<=90){
            if(sifresizMetin.charCodeAt(i)+basamakSayisi>90){
                temp=((sifresizMetin.charCodeAt(i)+basamakSayisi)%90)%26;
                if(temp==0)
                   temp=1; 
                
                sifreliMetin+=  String.fromCharCode(64+temp);
            }else
            sifreliMetin+=  String.fromCharCode(sifresizMetin.charCodeAt(i)+basamakSayisi);
        }
        else{
            sifreliMetin+= '?';
        }
    }
    
    


    return  '<p> Şifrelenmiş metin: ' + sifreliMetin + '</p>' ;

}
