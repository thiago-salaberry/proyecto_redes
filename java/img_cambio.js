document.addEventListener("DOMContentLoaded", function() {
    // ... todo el código existente aquí ...
    const imagenes = {
        ajolote: [
            "../imagenes/ajolote_rosa.png",
            "../imagenes/ajolote_amarillo.png",
            "../imagenes/ajolote_marron.png",
            "../imagenes/ajolote_celeste.png",
            "../imagenes/ajolote_azul.png"
        ],
        aldeano: [
            "../imagenes/aldeanos.png",
            "../imagenes/aldeano_bebe.png",
        ],
        armadillo: [
            "../imagenes/armadillo.png",
            "../imagenes/armadillo_enrrollado.png"
        ],
        burro: [
            "../imagenes/burro.png",
            "../imagenes/burro_ensillado.png",
            "../imagenes/burro_cofre.png",
            "../imagenes/burro_cofre_ensillado.png",
            "../imagenes/burro_bebe.png"
        ],
        caballo: [
            "../imagenes/caballo.png",
            "../imagenes/caballo_ensillado.png",
            "../imagenes/caballo_armadura.png",
            "../imagenes/caballo_ensillado_armadura.png",
            "../imagenes/caballo_bebe.png",
        ],
        caballoEsqueleto: [
            "../imagenes/caballo_esqueleto.png",
            "../imagenes/caballo_esqueleto_ensillado.png"
        ],
        camello: [
            "../imagenes/camello.png",
            "../imagenes/camello_sentado.png",
            "../imagenes/camello_ensillado.png"
        ],
        cerdo: [
            "../imagenes/cerdo.png",
            "../imagenes/cerdo_ensillado.png",
            "../imagenes/cerdo_bebe.png"
        ],
        champivaca: [
            "../imagenes/champivaca.png",
            "../imagenes/champivaca_bebe.png",
            "../imagenes/champivaca_marron.png",
            "../imagenes/champivaca_marron_bebe.png"
        ],
        conejo: [
            "../imagenes/conejo.png",
            "../imagenes/conejo_bebe.png"
        ],
        gato: [
            "../imagenes/gato.png",
            "../imagenes/gato_bebe.png",
            "../imagenes/gato_sentado.png"
        ],
        golemNieve: [
            "../imagenes/golem_nieve.png",
            "../imagenes/golem_nieve_sin_calabaza.png"
        ],
        strider: [
            "../imagenes/strider.png",
            "../imagenes/strider_frio.png",
            "../imagenes/strider_ensillado.png",
            "../imagenes/strider_ensillado_frio.png"
        ],
        loro: [
            "../imagenes/loro.png",
            "../imagenes/loro_sentado.png",
            "../imagenes/loro_bailando.png"
        ],
        mula: [
            "../imagenes/mula.png",
            "../imagenes/mula_ensillada.png",
            "../imagenes/mula_cofre.png",
            "../imagenes/mula_ensillada_cofre.png",
            "../imagenes/mula_bebe.png"
        ],
        murcielago: [
            "../imagenes/murcielago.png",
            "../imagenes/murcielago_colgado.png"
        ],
        ocelote: [
            "../imagenes/ocelote.png",
            "../imagenes/ocelote_bebe.png"
        ],
        pezGlobo: [
            "../imagenes/pez_globo_desinflado.png",
            "../imagenes/pez_globo_seminflado.png",
            "../imagenes/pez_globo_inflado.png"
        ],
        pollo: [
            "../imagenes/pollo.png",
            "../imagenes/pollo_bebe.png"
        ],
        rana: [
            "../imagenes/rana.png",
            "../imagenes/rana_calida.png",
            "../imagenes/rana_verde.png"
        ],
        vaca: [
            "../imagenes/vaca.png",
            "../imagenes/vaca_bebe.png"
        ]
    };

    let indices = {
        ajolote: 0,
        aldeano: 0,
        armadillo: 0,
        burro: 0,
        caballo: 0,
        caballoEsqueleto: 0,
        camello: 0,
        cerdo: 0,
        champivaca: 0,
        conejo: 0,
        gato: 0,
        golemNieve: 0,
        strider: 0,
        loro: 0,
        mula: 0,
        murcielago: 0,
        ocelote: 0,
        pezGlobo: 0,
        pollo: 0,
        rana: 0,
        vaca: 0
    };

    function changeImages() {
        const imageElements = {
            ajolote: document.getElementById("imagen-ajolote"),
            aldeano: document.getElementById("imagen-aldeano"),
            armadillo: document.getElementById("imagen-armadillo"),
            burro: document.getElementById("imagen-burro"),
            caballo: document.getElementById("imagen-caballo"),
            caballoEsqueleto: document.getElementById("imagen-caballo-esqueleto"),
            camello: document.getElementById("imagen-camello"),
            cerdo: document.getElementById("imagen-cerdo"),
            champivaca: document.getElementById("imagen-champivaca"),
            conejo: document.getElementById("imagen-conejo"),
            gato: document.getElementById("imagen-gato"),
            golemNieve: document.getElementById("imagen-golem-nieve"),
            strider: document.getElementById("imagen-strider"),
            loro: document.getElementById("imagen-loro"),
            mula: document.getElementById("imagen-mula"),
            murcielago: document.getElementById("imagen-murcielago"),
            ocelote: document.getElementById("imagen-ocelote"),
            pezGlobo: document.getElementById("imagen-pezglobo"),
            pollo: document.getElementById("imagen-pollo"),
            rana: document.getElementById("imagen-rana"),
            vaca: document.getElementById("imagen-vaca")
        };

        imageElements.ajolote.src = imagenes.ajolote[indices.ajolote];
        imageElements.aldeano.src = imagenes.aldeano[indices.aldeano];
        imageElements.armadillo.src = imagenes.armadillo[indices.armadillo];
        imageElements.burro.src = imagenes.burro[indices.burro];
        imageElements.caballo.src = imagenes.caballo[indices.caballo];
        imageElements.caballoEsqueleto.src = imagenes.caballoEsqueleto[indices.caballoEsqueleto];
        imageElements.camello.src = imagenes.camello[indices.camello];
        imageElements.cerdo.src = imagenes.cerdo[indices.cerdo];
        imageElements.champivaca.src = imagenes.champivaca[indices.champivaca];
        imageElements.conejo.src = imagenes.conejo[indices.conejo];
        imageElements.gato.src = imagenes.gato[indices.gato];
        imageElements.golemNieve.src = imagenes.golemNieve[indices.golemNieve];
        imageElements.strider.src = imagenes.strider[indices.strider];
        imageElements.loro.src = imagenes.loro[indices.loro];
        imageElements.mula.src = imagenes.mula[indices.mula];
        imageElements.murcielago.src = imagenes.murcielago[indices.murcielago];
        imageElements.ocelote.src = imagenes.ocelote[indices.ocelote];
        imageElements.pezGlobo.src = imagenes.pezGlobo[indices.pezGlobo];
        imageElements.pollo.src = imagenes.pollo[indices.pollo];
        imageElements.rana.src = imagenes.rana[indices.rana];
        imageElements.vaca.src = imagenes.vaca[indices.vaca];

        // Actualiza los índices
        for (let key in indices) {
            indices[key] = (indices[key] + 1) % imagenes[key].length;
        }
    }

    setInterval(changeImages, 2000); // Cambia las imágenes cada 2 segundos
});