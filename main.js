function calcularCostoMonitor(marca, modelo, tipoPanel, pulgadas, frecuencia) {
    if (marca === "Asus") {
      if (modelo === "Monitor Gamer Pro") {
        if (tipoPanel === "IPS") {
          if (pulgadas === "24 pulgadas") {
            if (frecuencia === "60Hz") {
              return 97899;
            } else if (frecuencia === "144Hz") {
              return 322650;
            }
          } else if (pulgadas === "27 pulgadas") {
            if (frecuencia === "60Hz") {
              return 96500;
            } else if (frecuencia === "144Hz") {
              return 350800;
            }
          }
        } else if (tipoPanel === "TN") {
          if (pulgadas === "27 pulgadas") {
            if (frecuencia === "60Hz") {
              return 212500;
            } else if (frecuencia === "144Hz") {
              return 320900;
            }
          }
        }
      } else if (modelo === "Monitor Gaming Master") {
        if (tipoPanel === "IPS") {
          if (pulgadas === "27 pulgadas") {
            if (frecuencia === "60Hz") {
              return 82500;
            } else if (frecuencia === "144Hz") {
              return 235690;
            }
          }
        }
      }
    } else if (marca === "Acer") {
      if (modelo === "Monitor Nitro") {
        if (tipoPanel === "IPS") {
          if (pulgadas === "27 pulgadas") {
            if (frecuencia === "60Hz") {
              return 82500;
            } else if (frecuencia === "144Hz") {
              return 235690;
            }
          }
        }
      } else if (modelo === "Monitor Predator") {
        if (tipoPanel === "VA") {
          if (pulgadas === "32 pulgadas") {
            if (frecuencia === "60Hz") {
              return 150000;
            } else if (frecuencia === "144Hz") {
              return 785900;
            }
          }
        }
      }
    } else if (marca === "LG") {
      if (modelo === "Monitor UltraGear") {
        if (tipoPanel === "IPS") {
          if (pulgadas === "24 pulgadas") {
            if (frecuencia === "60Hz") {
              return 280845;
            } else if (frecuencia === "144Hz") {
              return 290000;
            }
          }
        }
      } else if (modelo === "Monitor Gaming Pro") {
        if (tipoPanel === "TN") {
          if (pulgadas === "27 pulgadas") {
            if (frecuencia === "60Hz") {
              return 210360;
            } else if (frecuencia === "144Hz") {
              return 320980;
            }
          }
        }
      }
    }
  
    return 0;
  }
  
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
  
  const costoMonitor = calcularCostoMonitor(marcaSeleccionada, modeloSeleccionado, tipoPanelSeleccionado, pulgadasSeleccionadas, frecuenciaSeleccionada);
  
  if (costoMonitor > 0) {
    alert(`El costo del monitor seleccionado es: $${costoMonitor}`);
  } else {
    alert("El monitor seleccionado no se encuentra disponible en nuestras opciones.");
  }