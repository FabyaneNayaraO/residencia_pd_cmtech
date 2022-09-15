var dano = Number(prompt("digite seu Dano"));
var saude = Number(prompt("digite sua Saúde"));
function PersonMorreu(dano, saude) {
    if(dano > saude){
        return 1;
    }
    else{
        return 0;
    }
}
document.write(PersonMorreu(dano,saude));