Webcam.attach('#camara');

camara = document.getElementById("camara");

Webcam.set({
    width:350,height:350,image_format:'png',png_quality:90
});

function tomarfoto() {
    Webcam.snap(function(data_uri){
        document.getElementById("fototomada").innerHTML = '<img id="foto" src=" '+data_uri+'">';
    });
}

modelocreado = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EDzd-5Ibg/model.json', cargarmodelo);

function cargarmodelo() {
    console.log("El modelo cargo");
}

function identificar() {
    fototomada1 = document.getElementById("foto");
    modelocreado.classify(fototomada1,gotResult);
}

function gotResult(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('objetoreconocido').innerHTML = results[0].label;
        document.getElementById('porcentajedeprecicion').innerHTML = results[0].confidence.toFixed(2);
    }
}