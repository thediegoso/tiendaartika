const textos = {

    es:{

        titulo:"Mi Tienda",

        inicio:"Inicio",

        comidas:"Comidas",

        ropa:"Ropa",

        tecnologia:"Tecnología",

        bienvenida:"Bienvenido",

        descripcion:"Encuentra miles de productos al mejor precio."

    },

    en:{

        titulo:"My Store",

        inicio:"Home",

        comidas:"Food",

        ropa:"Clothing",

        tecnologia:"Technology",

        bienvenida:"Welcome",

        descripcion:"Find thousands of products at the best price."

    },

    pt:{

        titulo:"Minha Loja",

        inicio:"Início",

        comidas:"Comidas",

        ropa:"Roupas",

        tecnologia:"Tecnologia",

        bienvenida:"Bem-vindo",

        descripcion:"Encontre milhares de produtos pelo melhor preço."

    },

    fr:{

        titulo:"Ma Boutique",

        inicio:"Accueil",

        comidas:"Alimentation",

        ropa:"Vêtements",

        tecnologia:"Technologie",

        bienvenida:"Bienvenue",

        descripcion:"Trouvez des milliers de produits au meilleur prix."

    },

    de:{

        titulo:"Mein Shop",

        inicio:"Startseite",

        comidas:"Lebensmittel",

        ropa:"Kleidung",

        tecnologia:"Technologie",

        bienvenida:"Willkommen",

        descripcion:"Finden Sie tausende Produkte zum besten Preis."

    }

};

function cambiarIdioma(idioma){

    if(!textos[idioma]) return;

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if(el) el.textContent = value;
    };

    setText("titulo", textos[idioma].titulo);
    setText("menuInicio", textos[idioma].inicio);
    setText("menuComidas", textos[idioma].comidas);
    setText("menuRopa", textos[idioma].ropa);
    setText("menuTecnologia", textos[idioma].tecnologia);
    setText("bienvenida", textos[idioma].bienvenida);
    setText("descripcion", textos[idioma].descripcion);

}

document.addEventListener('DOMContentLoaded', function(){
    cambiarIdioma("es");
    const selector = document.getElementById("selectorIdioma");
    if(selector) selector.addEventListener("change", function(){
        cambiarIdioma(this.value);
    });
});
