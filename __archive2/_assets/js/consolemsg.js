(function consoleArt() {
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
        "%c" + "------------------------------------------\n\n" + "%c" + ascii + "\n%c " + "CHJK Studios - https://chjk.xyz" + "%c" + "\n\n------------------------------------------",
        "font-family: monospace; font-size: 10px; color: #888888;",
        "font-family: monospace; font-size: 12px; font-weight: 700; color: #2ECC71; text-shadow: 0 1px 0 rgba(0,0,0,0.2);",
        "font-family: monospace; font-size: 12px; color: #2ECC71; text-shadow: 0 1px 0 rgba(0,0,0,0.2);",
        "font-family: monospace; font-size: 10px; color: #888888;"
    );
})();