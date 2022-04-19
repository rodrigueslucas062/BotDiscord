function GerarString(tamanho){
    let GerarString = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (vari = 0; i < tamanho; i ++){
        GerarString += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
}