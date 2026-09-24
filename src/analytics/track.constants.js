const PROJECT = "misiondelosangeles";

export const TRACK = {
  home: {
    menu: {
      toggle: `${PROJECT}:menu:toggle:click`,
      item: `${PROJECT}:menu:item:click`,
    },

    logo: {
      home: `${PROJECT}:logo:hero:click`,
    },

    whatsapp: {
      float: `${PROJECT}:whatsapp:float:click`,
    },

    amenidades: {
      item: `${PROJECT}:amenidades:item:click`,
      swipe: `${PROJECT}:amenidades:carousel:swipe`,
    },

    modelos: {
      card: `${PROJECT}:modelos:card:click`,
    },

    popup: {
      modelo: {
        nivel: `${PROJECT}:popup:modelo:nivel:change`,
        close: `${PROJECT}:popup:modelo:close`,
      },
    },

    ubicacion: {
      mapClick: `${PROJECT}:ubicacion:map:click`,
    },

    cotiza: {
      cta: `${PROJECT}:cotiza:cta:click`,
    },

    contacto: {
      formSubmit: `${PROJECT}:contacto:form:submit`,
      formSubmitError: `${PROJECT}:contacto:form:submit-error`,
      formInvalid: `${PROJECT}:contacto:form:invalid`,
    },

    closingBanner: {
      cta: `${PROJECT}:closing-banner:cta:click`,
    },

    footer: {
      social: `${PROJECT}:footer:social:click`,
      contact: `${PROJECT}:footer:contact:click`,
    },
  },
};
