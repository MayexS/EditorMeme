import html2canvas from 'html2canvas';
import React, { useState } from 'react';

const Imgmeme = () => {

    const [imgmeme, SetImgmeme] = useState();
    const [textmeme, SetTextmeme] = useState();

    const seleccionarImg = (e) => {
        SetImgmeme(e.target.value);

    }
    const textomeme = (e) => {
        SetTextmeme(e.target.value);
    }

    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportarImg")).then(function (canvas) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "tumeme";
            link.href = img;
            link.click();
        });
    }

    return (
        <div className='container p-1 m-2'>
            <h1 className='mt-1 mb-2 text-center bienvenida'> Bienvenido al Editor de Memes</h1>
            <div>

            <h3 className='mt-2 mb-2 text-center bienvenida2'>Primero escoge tu imagen</h3>
            <select onChange={seleccionarImg} className='form-select form-select mb-2 w-70 m-auto' arial-label=".form-select example">
                <option value={0}>Elige tu meme</option>
                <option value={1}>Pensando..</option>
                <option value={2}>Mujer gritándole a un gato.</option>
                <option value={3}>¡Wey ya!</option>
                <option value={4}>Humanidad perdida</option>
                <option value={5}>Esto lo hago pa'divertirme</option>
                <option value={6}>Se tenía que decir y se dijo</option>
            </select>
                <h3 className='mt-2 mb-2 text-center bienvenida2'> Ingresa el texto del meme</h3>
                <input onChange={textomeme} className='form-control text-center' type="text" placeholder="Coloca tu frase" name="meme" arial-label="default input example"></input>
            </div>
            
            

            <figure className='position-relative d-block' id="exportarImg">
                <p className="position-absolute p-3 mt-2 mx-auto frase">{textmeme}</p>
                <img src={`./img/${imgmeme}.jpg`} className='figure-img img-fluid rounded mt-2 m-auto text-center' alt="" />
            </figure>
            <button onClick={Descargar} type="button" className='d-grid col-3 mx-auto btn btn-primary btn-sm mt-4 mb-4 text-center'>Descargar</button>


        </div>
    );
}

export default Imgmeme;
