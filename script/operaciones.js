function sumarMatrices(A,B){
    let bTI = 0;
    const bCol = B.length;

    B.forEach(item => {
        if (item.length > bTI){
            bTI = item.length;
        }
    });
    let aTI = 0;
    const aCol = A.length;
    A.forEach(item=>{
        if (item.length > aTI){
            aTI = item.length;
        }
    })

    if(aCol != bCol || aTI != bTI){
        console.log("Las matrices no tienen el mismo orden")
    }else{
        let resultado=[]
        console.log("Las matrices tienen el mismo orden\n")
        for(i=0;i<aCol;i++){
            let fila=[];
            let array;
            for(j=0;j<bTI;j++){

                array = a[i][j]+b[i][j];
                fila.push(array)
            }
            resultado.push(fila)
        }
        console.log(resultado)
    }
}

function transponer(matriz){
    let transpuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transpuesta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transpuesta[i][j] = matriz[j][i];
        }
    }
    console.log(transpuesta)
    return transpuesta;
}

const mattriz = [[3,4,5,1],[0,2,12,10]]

transponer(mattriz)

// const a = [[2,4,5],[5,1,0],[7,2,3]]
// const b = [[12,0,5],[1,2,4],[0,2,0]]


// sumarMatrices(a,b)