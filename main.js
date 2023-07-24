let marcaSeleccionada;
do {
  marcaSeleccionada = prompt("Elija una marca entre: Asus, Acer, LG");
} while (marcaSeleccionada !== "Asus" && marcaSeleccionada !== "Acer" && marcaSeleccionada !== "LG");

let modeloSeleccionado;
do {
  modeloSeleccionado = prompt(`Elija un modelo entre: Monitor Gamer Pro, Monitor Gaming Master, Monitor Nitro, Monitor Predator, Monitor UltraGear, Monitor Gaming Pro`);
} while (
  (marcaSeleccionada === "Asus" && modeloSeleccionado !== "Monitor Gamer Pro" && modeloSeleccionado !== "Monitor Gaming Master") ||
  (marcaSeleccionada === "Acer" && modeloSeleccionado !== "Monitor Nitro" && modeloSeleccionado !== "Monitor Predator") ||
  (marcaSeleccionada === "LG" && modeloSeleccionado !== "Monitor UltraGear" && modeloSeleccionado !== "Monitor Gaming Pro")
);

let tipoPanelSeleccionado;
do {
  tipoPanelSeleccionado = prompt("Elija un tipo de panel entre: IPS, TN, VA");
} while (tipoPanelSeleccionado !== "IPS" && tipoPanelSeleccionado !== "TN" && tipoPanelSeleccionado !== "VA");

let pulgadasSeleccionadas;
do {
  pulgadasSeleccionadas = prompt("Elija una pulgada entre: 24 pulgadas, 27 pulgadas, 32 pulgadas");
} while (pulgadasSeleccionadas !== "24 pulgadas" && pulgadasSeleccionadas !== "27 pulgadas" && pulgadasSeleccionadas !== "32 pulgadas");

let frecuenciaSeleccionada;
do {
  frecuenciaSeleccionada = prompt("Elija una frecuencia entre: 60Hz, 144Hz");
} while (frecuenciaSeleccionada !== "60Hz" && frecuenciaSeleccionada !== "144Hz");

let costoMonitor = 0;

if (marcaSeleccionada === "Asus") {
  if (modeloSeleccionado === "Monitor Gamer Pro") {
    if (tipoPanelSeleccionado === "IPS") {
      if (pulgadasSeleccionadas === "24 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 97899;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 322650;
        }
      } else if (pulgadasSeleccionadas === "27 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 96500;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 350800;
        }
      }
    } else if (tipoPanelSeleccionado === "TN") {
      if (pulgadasSeleccionadas === "27 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 212500;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 320900;
        }
      }
    }
  } else if (modeloSeleccionado === "Monitor Gaming Master") {
    if (tipoPanelSeleccionado === "IPS") {
      if (pulgadasSeleccionadas === "27 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 82500;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 235690;
        }
      }
    }
  }
} else if (marcaSeleccionada === "Acer") {
  if (modeloSeleccionado === "Monitor Nitro") {
    if (tipoPanelSeleccionado === "IPS") {
      if (pulgadasSeleccionadas === "27 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 82500;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 235690;
        }
      }
    }
  } else if (modeloSeleccionado === "Monitor Predator") {
    if (tipoPanelSeleccionado === "VA") {
      if (pulgadasSeleccionadas === "32 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 150000;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 785900;
        }
      }
    }
  }
} else if (marcaSeleccionada === "LG") {
  if (modeloSeleccionado === "Monitor UltraGear") {
    if (tipoPanelSeleccionado === "IPS") {
      if (pulgadasSeleccionadas === "24 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 280845;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 290000;
        }
      }
    }
  } else if (modeloSeleccionado === "Monitor Gaming Pro") {
    if (tipoPanelSeleccionado === "TN") {
      if (pulgadasSeleccionadas === "27 pulgadas") {
        if (frecuenciaSeleccionada === "60Hz") {
          costoMonitor = 210360;
        } else if (frecuenciaSeleccionada === "144Hz") {
          costoMonitor = 320980;
        }
      }
    }
  }
}

if (costoMonitor > 0) {
  alert(`El costo del monitor seleccionado es: $${costoMonitor}`);
} else {
  alert("El monitor seleccionado no se encuentra disponible en nuestras opciones.");
}





  