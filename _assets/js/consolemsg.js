(function consoleArt() {
    const year = new Date().getFullYear();
    const company = "CHJK Studios";
    const ascii = `
 CCCCC  HH   HH 
CC    C HH   HH 
CC      HHHHHHH 
CC    C HH   HH 
 CCCCC  HH   HH 
                
    JJJ KK  KK  
    JJJ KK KK   
    JJJ KKKK    
JJ  JJJ KK KK   
 JJJJJ  KK  KK  
  `;

    console.log(
        "%c" + ascii + "\n%c© " + year + " " + company + " — All rights reserved.",
        "font-family: monospace; font-size: 12px; font-weight: 700; color: #2ECC71; text-shadow: 0 1px 0 rgba(0,0,0,0.2);",
        "font-family: monospace; font-size: 10px; color: #888888;"
    );
})();