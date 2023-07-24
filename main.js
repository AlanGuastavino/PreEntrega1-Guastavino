//Primera entrega - Javascript - Alan Guastavino

const modelosMonitores = [
    ["Asus", "Monitor Gamer Pro", "IPS", "24 pulgadas", { "60Hz": 97899, "144Hz": 322650 }],
    ["Asus", "Monitor Gaming Master", "TN", "27 pulgadas", { "60Hz": 96500, "144Hz": 350800 }],
    ["Acer", "Monitor Nitro", "IPS", "27 pulgadas", { "60Hz": 82500, "144Hz": 235690 }],
    ["Acer", "Monitor Predator", "VA", "32 pulgadas", { "60Hz": 150000, "144Hz": 785900 }],
    ["LG", "Monitor UltraGear", "IPS", "24 pulgadas", { "60Hz": 280845, "144Hz": 290000 }],
    ["LG", "Monitor Gaming Pro", "TN", "27 pulgadas", { "60Hz": 210360, "144Hz": 320980 }]
  ];
  
  function calcularCostoMonitor(marca, modelo, tipoPanel, frecuencia) {
    for (let i = 0; i < modelosMonitores.length; i++) {
      const monitor = modelosMonitores[i];
      if (monitor[0] === marca && monitor[1] === modelo && monitor[2] === tipoPanel) {
        return monitor[4][frecuencia];
      }
    }
    return 0; 
  }
  function validarOpcion(opcion, opcionesValidas) {
    return opcionesValidas.includes(opcion);
  }
  
  let marcaSeleccionada;
  const marcasValidas = ["Asus", "Acer", "LG"];
  do {
    marcaSeleccionada = prompt("Elija una marca entre: Asus, Acer, LG");
  } while (!validarOpcion(marcaSeleccionada, marcasValidas));
  
  let modeloSeleccionado;
  const modelosValidos = ["Monitor Gamer Pro", "Monitor Gaming Master", "Monitor Nitro", "Monitor Predator", "Monitor UltraGear", "Monitor Gaming Pro"];
  do {
    modeloSeleccionado = prompt("Elija un modelo entre: Monitor Gamer Pro, Monitor Gaming Master, Monitor Nitro, Monitor Predator, Monitor UltraGear, Monitor Gaming Pro");
  } while (!validarOpcion(modeloSeleccionado, modelosValidos));
  
  let tipoPanelSeleccionado;
  const tiposPanelValidos = ["IPS", "TN", "VA"];
  do {
    tipoPanelSeleccionado = prompt("Elija un tipo de panel entre: IPS, TN, VA");
  } while (!validarOpcion(tipoPanelSeleccionado, tiposPanelValidos));
  
  let frecuenciaSeleccionada;
  const frecuenciasValidas = ["60Hz", "144Hz"];
  do {
    frecuenciaSeleccionada = prompt("Elija una frecuencia entre: 60Hz, 144Hz");
  } while (!validarOpcion(frecuenciaSeleccionada, frecuenciasValidas));
  
  const costoMonitor = calcularCostoMonitor(marcaSeleccionada, modeloSeleccionado, tipoPanelSeleccionado, frecuenciaSeleccionada);

  if (costoMonitor > 0) {
    alert(`El costo del monitor seleccionado es: $${costoMonitor}`);
  } else {
    alert("El monitor seleccionado no se encuentra disponible en nuestras opciones.");
  }
  