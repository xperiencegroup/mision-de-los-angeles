const PROJECT = "misiondelosangeles";

// GA4 limita los nombres de evento a 40 caracteres.
// El prefijo `misiondelosangeles:` ocupa 19, así que el resto debe medir 21 o menos.
export const TRACK = {
  home: {
    menu: {
      toggle: `${PROJECT}:menu:toggle:click`, // 36
      item: `${PROJECT}:menu:item:click`, // 34
    },

    logo: {
      home: `${PROJECT}:logo:hero:click`, // 34
    },

    whatsapp: {
      float: `${PROJECT}:whatsapp:float:click`, // 39
    },

    amenidades: {
      item: `${PROJECT}:amenidades:item:click`, // 40
      swipe: `${PROJECT}:amenidades:swipe`, // 35 (antes: amenidades:carousel:swipe)
    },

    modelos: {
      card: `${PROJECT}:modelos:card:click`, // 37
      cotiza: `${PROJECT}:modelos:cotiza:click`, // 39
    },

    popup: {
      modelo: {
        nivel: `${PROJECT}:popup:nivel:change`, // 37 (antes: popup:modelo:nivel:change)
        close: `${PROJECT}:popup:modelo:close`, // 37
      },
      financiamiento: {
        close: `${PROJECT}:popup:financ:close`, // 37 (antes: popup:financiamiento:close)
      },
    },

    ubicacion: {
      mapClick: `${PROJECT}:ubicacion:map:click`, // 38
    },

    cotiza: {
      cta: `${PROJECT}:cotiza:cta:click`, // 35
    },

    contacto: {
      formSubmit: `${PROJECT}:contacto:form:submit`, // 39
      formSubmitError: `${PROJECT}:contacto:form:error`, // 38 (antes: contacto:form:submit-error)
      formInvalid: `${PROJECT}:contacto:form:invalid`, // 40
    },

    closingBanner: {
      cta: `${PROJECT}:closing:cta:click`, // 36 (antes: closing-banner:cta:click)
    },

    footer: {
      social: `${PROJECT}:footer:social:click`, // 38
      contact: `${PROJECT}:footer:contact:click`, // 39
    },
  },
};
