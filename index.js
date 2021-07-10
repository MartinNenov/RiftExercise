// raft
// kursove K zadadeni
// broi kozi N
// teglo na vsqka koza [a1,a2,a3....an]

function solve(N,K,kozi=[]){
    let tegloKozi=[...kozi];
    let broiNeobhodimiKursove = K+1;
    let maxTegloRaft = 0;
    tegloKozi.forEach((kozaTeglo)=>{
        if(kozaTeglo>maxTegloRaft){
            maxTegloRaft=kozaTeglo;
        }
    });

    while(broiNeobhodimiKursove>K){
        let ostanalKapacitetNaRafta = maxTegloRaft;
        let koziNaRifta = [];


        let counter = 0;
        let izbranaKoza = false;
        let koza = 0

        let kursove = 0;
        while(tegloKozi.length>0){
            tegloKozi.forEach((el,i)=>{
                if(el<=ostanalKapacitetNaRafta&&
                    koza<el){
                    koza = el;
                    izbranaKoza = true;
                    counter = i;
                }
            })
            if(izbranaKoza){
                tegloKozi.splice(counter,1);
                koziNaRifta.push(koza);
                ostanalKapacitetNaRafta-=koza;
                izbranaKoza = false;
                koza = 0;
                if(tegloKozi.length==0){
                    ostanalKapacitetNaRafta = maxTegloRaft;
                    koza = 0
                    kursove ++;
                    koziNaRifta = [];
                }
            }else{
                ostanalKapacitetNaRafta = maxTegloRaft;
                koza = 0
                kursove ++;
                koziNaRifta = [];
            }
        }  
        broiNeobhodimiKursove = kursove; 
        if(broiNeobhodimiKursove>K){
            maxTegloRaft++;
            tegloKozi = [...kozi];
        }
    }
    return maxTegloRaft;
}

console.log(solve(15,3,[666,42,7,13,400,511,600,200,202,111,313,94,280,72,42]));