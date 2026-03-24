import type { APIRoute } from 'astro';

const LOCAL_KNOWLEDGE = [
  // BLOQUE: AFIRMACIÓN / CORTESÍA (Baja Prioridad)
  {
    keywords: ['perfecto', 'comprendo', 'me parece bien', 'entendido'],
    response: '¡Recibido! 🚜 \n\nSi cambias de opinión o te surge cualquier duda mientras estás en la linde o en el almacén, aquí me tienes. ¡A por la jornada!',
    link: '/'
  },
  // BLOQUE SALUDO (Prioridad MÍNIMA, índice 0 - Se revisa de último en loop inverso)
  {
    keywords: ['hola', 'buenas', 'inicio'],
    response: '¡Bienvenido a **Smart Fénix**! Soy tu asesor virtual especializado en **agricultura de precisión**. Puedo informarte sobre:\n\n1. **Cuaderno SIEX** (Normativa y cumplimiento).\n\n2. **Sensores de Suelo y Planta** (NPK, Humedad, Dendrómetros).\n\n3. **Soluciones por Cultivo** (Olivo, Almendro, Frutales).\n\n4. **Identidad y Contacto** (Quiénes somos).\n\n¿Sobre qué tema quieres que hablemos hoy? [Ver Servicios](/soluciones/agricultores)',
    link: '/'
  },
  // BLOQUE SENSORES (SUELO, PLANTA, CLIMA)
  {
    isTechnical: true,
    keywords: ['npk', '8 en 1', 'nutrientes', 'nitrógeno', 'fósforo', 'potasio', 'conductividad', 'salinidad', 'abono', 'comida', 'echarle', 'bolsa', 'fertilizante'],
    response: 'Nuestro **sensor NPK 8 en 1** ayuda a monitorizar los niveles de nitrógeno, fósforo y potasio, además de pH y CE.\n\nEsto permite ajustar el fertilizante a lo que la planta realmente necesita, fomentando una nutrición más equilibrada y sostenible.\n\n[Ver Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['humedad del suelo', 'fdr', 'tdr', 'tubular', 'multicapa', 'perfil', 'bulbo hídrico', 'agua', 'mojado', 'seco', 'beber', 'riego', 'goteo', 'tubería', 'humedales'],
    response: 'Medir la humedad superficial no basta. Nuestros **sensores tubulares multicapa** emplean tecnología FDR (Frequency Domain Reflectometry) para medir la humedad, temperatura y conductividad eléctrica a distintas profundidades del perfil del suelo (hasta 1 metro).\n\nEsto nos permite visualizar exactamente el desarrollo del bulbo hídrico, optimizando los tiempos de riego, garantizando un gran **ahorro de agua** (entre un 25% y un 40%) y evitando la asfixia radicular.\n\nConsulta nuestros [Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['ph', 'acidez', 'hidroponia', 'invernadero', 'ph de alta precision', 'peache'],
    response: 'El control del **pH** es crítico para asegurar la biodisponibilidad de los nutrientes y evitar bloqueos radiculares.\n\nNuestro sensor de pH de Alta Precisión ofrece una resolución de 0.01 pH y está fabricado con IP68 sumergible. Es el estándar industrial para hidroponía y fertirrigación de alto rendimiento.\n\n[Ver Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['dendrometro', 'tronco', 'tallo', 'contraccion', 'micras', 'estres hidrico', 'crecimiento', 'dendrometro'],
    response: 'Para una gestión del riego basada en la planta, el **dendrómetro de tronco** es insuperable. Mide las micro-contracciones diarias del tallo con una precisión milimétrica (1 micra).\n\nAl cruzar estos datos con el déficit de presión de vapor, podemos detectar estrés hídrico incipiente días antes de que existan síntomas visuales.\n\n[Descúbrelos en Sensores de Planta](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    keywords: ['dendrometro de fruto', 'calibre', 'maduracion', 'cosecha', 'manzana', 'melocoton', 'citrico'],
    response: 'El **dendrómetro de fruto** permite monitorizar la curva de expansión y crecimiento del fruto en tiempo real con una resolución de 10µm.\n\nEsta herramienta es vital para fruticultores, ya que permite predecir el momento exacto de madurez comercial y maximizar el calibre final.\n\n[Ver Sensores de Planta](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    keywords: ['humectacion foliar', 'mojado de hoja', 'enfermedad fungica', 'hongo', 'mildiu', 'oidio', 'botrytis'],
    response: 'La aparición de patógenos fúngicos está íntimamente ligada a la presencia de agua libre en la epidermis celular. Nuestro sensor de humectación foliar emula la superficie de la hoja para detectar exactamente cuántas horas permanece mojada tras el rocío o la lluvia. Cruzando este dato en nuestro Cuaderno Digital, generamos modelos predictivos para Mildiu u Oídio, ahorrando aplicaciones fitosanitarias innecesarias. Más info en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['clima', 'estacion meteorologica', '8 parametros', 'lorawan', 'precipitacion', 'pluviometro', 'viento', 'radiacion', 'metereologia', 'tiempo'],
    response: 'La toma de decisiones agrarias arranca con datos microclimáticos precisos. Nuestra **estación meteorológica** registra temperatura, humedad, presión, radiación solar y viento.\n\nSe integra directamente en el Cuaderno Digital para calcular la evapotranspiración (ET0) y ajustar los coeficientes de riego del cultivo.\n\n[Míralo en Sensores de Clima](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['dat', 'ropo', 'transporte', 'documento acompañamiento', 'carne aplicador'],
    response: 'La gestión de operarios y mercancías es crítica. Integramos utilidades como la generación automatizada del **DAT** para la trazabilidad de la cosecha, así como la validación cruzada con el **ROPO**.\n\nSi un operario tiene el carné caducado, el sistema bloquea su asignación al tratamiento fitosanitario automáticamente.\n\n[Saber más sobre el Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['pac', 'ecorregimen', 'p3', 'p4', 'siembra directa', 'rotacion', 'carbono', 'ayuda directa'],
    response: 'Para capturar el 23% del presupuesto de ayudas directas de la PAC, debes justificar los Ecorregímenes. Nuestro módulo específico audita el cumplimiento de prácticas como el P3 (Rotación de cultivos con especies mejorantes para aumentar materia orgánica) y el P4 (Siembra Directa). Monitorizamos que el suelo permanezca cubierto el 100% del tiempo para maximizar el secuestro de carbono y la retención hídrica. Toda la información en la [Guía de Ecorregímenes](/cuaderno/guia-pac-ecorregimenes).',
    link: '/cuaderno/guia-pac-ecorregimenes'
  },
  {
    isTechnical: true,
    keywords: ['p5', 'cubierta vegetal', 'erosion', 'mantenimiento', 'quimico'],
    response: 'El Ecorrégimen P5 sobre cubiertas vegetales es exigente. La normativa obliga a tener una franja central del 40% de anchura entre hileras y mantener la cubierta viva del 1 de octubre al 31 de marzo. Nuestro Cuaderno Digital previene errores costosos alertando sobre la prohibición de uso de productos químicos sobre la cubierta y generando reportes fotográficos y satelitales que demuestran el control de la erosión. Ver más en la [Guía PAC](/cuaderno/guia-pac-ecorregimenes).',
    link: '/cuaderno/guia-pac-ecorregimenes'
  },
  // BLOQUE HERRAMIENTAS Y SERVICIOS
  {
    keywords: ['prescripcion digital', 'dosificacion variable', 'variable rate', 'mapa de aplicacion', 'ndvi', 'satelite'],
    response: 'A través de nuestro visor GIS, cargamos imágenes satelitales con resolución semanal de índices como el NDVI. Estas capas permiten identificar la variabilidad del vigor vegetativo intra-parcela y generar mapas de aplicación de tasa variable (Variable Rate). Esta receta se transfiere al procesador del tractor, permitiendo realizar prescriptiva digital, lo que supone aplicar el fitosanitario sólo donde hay masa foliar, logrando hasta un 40% de ahorro en insumos. [Más sobre prescriptiva](/herramientas/prescripcion).',
    link: '/herramientas/prescripcion'
  },
  {
    isTechnical: true,
    keywords: ['estiercol', 'estiercoles', 'purin', 'sandach', 'deyecciones', 'nitratos'], // 'sandach'
    response: 'La normativa de zonas vulnerables a nitratos es implacable. Nuestro módulo de gestión de estiércoles y subproductos SANDACH digitaliza todo el proceso, desde el origen de la deyección animal en granja hasta el reparto agronómico en parcela. Calculamos la dosis máxima legal de Nitrógeno por hectárea y validamos que el plan de abonado orgánico proteja los acuíferos subterráneos. Tienes toda la información organizativa en [Gestión de Estiércoles](/herramientas/estiercoles).',
    link: '/herramientas/estiercoles'
  },
  {
    isTechnical: true,
    keywords: ['trazabilidad gps', 'darp', 'gps', 'transporte purines', 'gestion de flotas'],
    response: 'El equipamiento GPS homologado (normativa DARP) es indispensable en el transporte de purines y material orgánico. Facilitamos la instalación de receptores GPS de alta frecuencia que trazan permanentemente el volumen de cisterna, coordenadas de carga/descarga y caudalímetro en tiempo real. Esta telemetría se acopla en el Cuaderno para superar cualquier inspección medioambiental gubernamental de forma automatizada. Infórmate sobre nuestra [Trazabilidad GPS](/herramientas/trazabilidad).',
    link: '/herramientas/trazabilidad'
  },
  // BLOQUE SOLUCIONES POR CULTIVO
  {
    isTechnical: true,
    keywords: ['olivar', 'olivo', 'aceite', 'picual', 'almazara', 'rendimiento graso'],
    response: 'El cultivo del **Olivar** exige optimizar tanto la producción como la lipogénesis (rendimiento graso).\n\nMediante nuestras estaciones climáticas y telemetría de suelo, ejecutamos estrategias de Riego Deficitario Controlado (RDC) que estabilizan la producción y mejoran la calidad del aceite.\n\n[Soluciones para Agricultores](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['almendro', 'pistacho', 'frutos secos', 'leñosos', 'cuajado'],
    response: 'En el **Almendro** y otros frutos secos de alta rentabilidad, el déficit fenológico es crítico.\n\nUtilizando dendrometría de precisión y corrección satelital NDVI, podemos realizar podas selectivas y dosificar el abonado potásico vía fertirriego para asegurar un desarrollo homogéneo.\n\n[Casos de éxito en Almendro](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['viñedo', 'viña', 'uva', 'enologia', 'bodega', 'grado brix', 'estres hidrico viña'],
    response: 'En la Viticultura de precisión, el estrés hídrico moderado post-envero es necesario para concentrar azúcares (Grado Brix) y mejorar el perfil antociánico de la uva. Utilizamos nuestro sensor LWP (Leaf Water Potential) y dendrómetros para llevar a la viña al límite fisiológico óptimo, dictaminando automáticamente riegos quirúrgicos y ahorrando costes energéticos severos. Además el cuaderno registra el cuaderno de vendimia exigido por denominaciones de origen. Ve a [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['frutal', 'horticola', 'invernadero', 'manzana', 'melocoton', 'tomate'],
    response: 'Para Frutales de hueso y pepita y sistemas Hortícolas intensivos, el control climático es absoluto. Combinando nuestro sensor de Humectación Foliar y de Temperatura Infrarroja de Hoja, prevenimos ataques de Monilia o Botritis mediante Modelos de Alerta Temprana. En paralelo, los sensores de pH y CE de Alta Precisión mantienen la solución nutritiva perfectamente ecualizada, erradicando micro-carencias y elevando el porcentaje de destrío exportable. Detalles en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  // BLOQUE SINERGIAS
  {
    keywords: ['fieldbee', 'autoguiado', 'gps tractor', 'isobus', 'precision tractor'],
    response: 'La rentabilidad en campo requiere precisión tracto-mecánica. A través de nuestra sinergia con FieldBee, proveemos sistemas de autoguiado GPS y volantes motorizados con corrección RTK (2 cm de precisión). La vinculación directa con nuestros mapas GIS de prescripción genera aplicaciones de herbicidas y abonos a nivel sub-parcelario compatibles con conectividad ISOBUS, evitando solapamientos y reduciendo un 15% el coste de insumos químicos. Explóralo en [Sinergia FieldBee](/sinergias/fieldbee).',
    link: '/sinergias/fieldbee'
  },
  {
    keywords: ['ipmwise', 'plagas', 'manejo integrado', 'umbral economico', 'tratamiento fungicida'],
    response: 'Para el Manejo Integrado de Plagas (MIP), nos aliamos con IPMWise. El sistema integra en tiempo real los datos algorítmicos de nuestras Estaciones Meteorológicas con la biología y ciclo vital de patógenos e insectos. Determinamos umbrales económicos de daños y enviamos prescripciones de tratamiento únicamente cuando el riesgo sanitario supera el coste de aplicación, protegiendo tanto el ecosistema como el margen bruto de la cosecha. Toda la información en [Sinergia IPMWise](/sinergias/ipmwise).',
    link: '/sinergias/ipmwise'
  },
  {
    keywords: ['consejo ingenieros', 'colegio oficial', 'agronomo', 'certificacion', 'peritaje'],
    response: 'La ingeniería agronómica es la base dogmática de Smart Fénix. Nuestra alianza oficial con el Consejo de Ingenieros Agrónomos nos permite ofrecer peritajes de daños con máxima validez legal, planes de viabilidad económica certificados para integraciones en expedientes agro-bancarios y avales técnicos robustos frente a posibles inspecciones y contenciosos derivados del uso de la PAC. Un respaldo profesional inigualable. Conoce la alianza en [Consejo de Ingenieros Agrónomos](/sinergias/consejo).',
    link: '/sinergias/consejo'
  },
  {
    keywords: ['contacto', 'persona', 'humano', 'encargado', 'soporte', 'ayuda', 'telefono', 'llamar', 'ingeniero'],
    response: 'Si necesitas hablar con nuestro equipo técnico o con un responsable, estamos a tu disposición.\n\nNo es necesario que quieras comprar nada; estamos aquí para resolver tus dudas técnicas o ayudarte con el funcionamiento de la plataforma.\n\n* Teléfono Directo: +34 621 26 22 86\n* Formulario de Soporte: [Escríbenos aquí](/contacto)\n\nTe atenderá un ingeniero agrónomo en menos de 24 horas.',
    link: '/contacto'
  },
  // BLOQUE SOLUCIONES POR CULTIVO (MICRONICHOS)
  {
    isTechnical: true,
    keywords: ['cereal', 'trigo', 'cebada', 'secano', 'extensivo', 'macollado', 'espigado'],
    response: 'En el cultivo extensivo de cereal de invierno como trigo y cebada, la rentabilidad se juega en el abonado de cobertera. Utilizando imágenes satelitales NDVI y algoritmos propios, generamos mapas de prescripción variable (Variable Rate) para esparcidoras de abono. Detectamos zonas de bajo vigor donde aplicar nitrógeno extra durante el macollado y zonas ricas donde reducir la dosis. Esto elimina el sobrecoste de abono innecesario y homogeniza el rendimiento final de la parcela, reduciendo la factura de fertilizantes en un 20% anual. Mira más en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['maiz', 'cultivo de maiz', 'pivote', 'cobertera', 'nitrogeno', 'evapotranspiracion'],
    response: 'El cultivo del maíz demanda un control hídrico y nutricional milimétrico, especialmente bajo riego por pivote. Instalamos sensores de humedad de suelo a 30cm, 60cm y 90cm para calibrar el tiempo óptimo de rotación del pivote sin incurrir en lixiviación de nitratos por exceso de agua. Sincronizamos estos sensores con la evapotranspiración diaria (ETc) para que aportes exactamente el agua que el cultivo consumió ayer. Esta precisión salva el coste energético del bombeo y previene asfixias radiculares en las etapas iniciales críticas. Revisa los [Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['arroz', 'inundacion', 'salinidad', 'delta', 'marisma', 'arrozal', 'nivel de agua'],
    response: 'La digitalización del arrozal implica una monitorización ininterrumpida de la pauta de inundación y, críticamente, la salinidad acumulada por intrusión marina. Implementamos sensores de conductividad eléctrica (CE) y nivel en columna de agua interconectados por LoRaWAN. El sistema genera alertas instantáneas en tu móvil si el nivel desciende del umbral ecológico o si la concentración de sales amenaza la asimilación de nutrientes de la planta. Previene mermas catastróficas del rendimiento y optimiza el bombeo de agua dulce antes de que los daños sean irreversibles. Más info en [Sensores de Agua](/sensores/agua-nivel).',
    link: '/sensores/agua-nivel'
  },
  {
    isTechnical: true,
    keywords: ['tomate de industria', 'tomate', 'horticola intensivo', 'podredumbre apical', 'calcio', 'riego goteo'],
    response: 'En el **tomate de industria**, las principales pérdidas económicas provienen de desórdenes osmóticos como la podredumbre apical causada por fluctuaciones hídricas.\n\nDesplegamos tensiómetros digitales que garantizan que el bulbo húmedo se mantenga siempre en su punto óptimo, erradicando taras comerciales en cosecha.\n\n[Ver Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['brocoli', 'coliflor', 'brassicas', 'horticola', 'abono de fondo', 'nitrato'],
    response: 'Las **brásicas** como el brócoli tienen una altísima sensibilidad al lavado de nitrógeno. Nuestro sistema combina sensores NPK para mapear la reserva real de nitratos post-abonado.\n\nValidamos que el fertilizante persista en el rango radicular y no se lixivie, evitando sanciones medioambientales en Zonas Vulnerables.\n\n[Consultar Sensores NPK](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['lechuga', 'iceberg', 'horeca', 'salinidad', 'osmosis', 'estres termico'],
    response: 'La lechuga, de sistema radicular superficial y extrema sensibilidad a sales, exige que el bulbo de riego se controle al centímetro en los primeros 20 centímetros de suelo. Con nuestras sondas FDR compactas, te aseguras de no aplicar agua que migrará por debajo de la zona útil, desperdiciando agua y fertilizante. Simultáneamente, utilizamos radiómetros y sensores de temperatura foliar para recomendar micro-aspersiones climáticas en episodios de ola de calor, mitigando el estrés térmico, frenando el espigado prematuro y salvaguardando la calidad comercial del cultivo. Informate en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    keywords: ['aguacate', 'subtropical', 'axfisia radicular', 'palto', 'oxigeno en suelo', 'phytophthora'],
    response: 'El **aguacate** es el cultivo más implacable ante la asfixia radicular, antesala de la Phytophthora. Implementamos sondas de Oxígeno directamente en el estrato radicular.\n\nEstas sondas avisan cuando la porosidad del suelo pierde oxigenación, cortando de raíz el ambiente anaeróbico que mata al árbol.\n\n[Proteger mi Cultivo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['mango', 'floracion', 'cuajado mango', 'subtropicales', 'axarquia', 'costa tropical'],
    response: 'Para la rentabilidad del mango, orquestar una floración vigorosa y evitar la caída dramática de frutos en el cuajado son factores determinantes. Usamos estaciones metereológicas avanzadas en el corazón del huerto para registrar la integral térmica (grados acumulados) y modelizar el estrés térmico, complementado con sensores de potencial mátrico. Estas métricas instruyen sistemas de riego de ultra-precisión que mantienen el ecosistema en picos fenológicos óptimos, evitando la abortación masiva de panículas provocada por choques climáticos y garantizando un calibre premium europeo.',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['arandano', 'frutos rojos', 'berries', 'huelva', 'maceta', 'sustrato', 'conductividad sustrato'],
    response: 'El cultivo del arándano y otros frutos rojos hidropónicos o en sustrato inerte (maceta) no perdona errores de conductividad o pH. Cada décima de grado en la disolución afecta la absorción catiónica. Equipamos las explotaciones de berries con sensores NPK y pH sumergibles de altísima frecuencia, auditando a tiempo real los valores de los drenajes. Así identificamos instantáneamente la acumulación de sales o los bloqueos por antagonismo (como potasio o calcio). La corrección inmediata de la sopa nutritiva se traduce en retornos de inversión espectaculares.',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['citrico', 'naranja', 'limon', 'mandarina', 'clemenules', 'verna', 'raja del fruto'],
    response: 'La agricultura citrícola moderna se enfrenta al tremendo desafío de la fisiopatía del temido rajado del fruto ("creasing" y "splitting") derivado de alteraciones bruscas de presión osmótica. Combatimos esto utilizando dendrómetros de fruto para observar en continuo la absorción hídrica del pericarpio y sensores multicapa volumétricos en suelo. Esto genera pautas de riego de alta frecuencia que estabilizan la curva de crecimiento del cítrico sin los típicos estrangulamientos hídricos de mediodía, maximizando la calidad de piel y la rentabilidad comercial general de la cosecha.',
    link: '/sensores/planta-dendrometro-fruto'
  },
  // BLOQUE PLAGAS Y ENFERMEDADES (Sinergia IPMWise)
  {
    isTechnical: true,
    keywords: ['mosca del olivo', 'bactrocera oleae', 'picada olivo', 'ipmwise', 'plaga olivo'],
    response: 'Respecto a la temible mosca del olivo (Bactrocera oleae), tratar "a ciegas" es carísimo y fomenta resistencias perjudiciales. En sinergia con IPMWise, nuestra estación meteorológica recolecta datos hiperlocales de humedad y temperatura horaria. Nuestro algoritmo proyecta integral térmica y modeliza la biología larvaria del insecto en tiempo real. En lugar de aplicar insecticida rutinario, nuestro software de Inteligencia Agronómica te envía una notificación predictiva dictaminando, basándose en la integral fenológica exacta, el día preciso y el unbral económico dictaminado para tratar. Esto pulveriza costes reduciendo aplicaciones en más de un 60%.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['prays', 'polilla del olivo', 'prays oleae', 'generacion antofaga', 'carpofaga'],
    response: 'El Prays del olivo exige tratamientos de letalidad absoluta focalizados en las generaciones clave: filófaga (hoja), antófaga (flor) y la crítica carpófaga (fruto). Utilizando tecnología Predictiva Satelital en combinación con los micro-sensores del clima en parcela, establecemos proyecciones matemáticas del vuelo de adultos y la posterior puesta de huevos en el cáliz. El Cuaderno Digital notifica con precisión quirúrgica el momento adecuado donde el uso del Bacillus thuringiensis resulta de mayor efectividad, abatiendo las poblaciones de eclosión temprana y salvando la campaña del olivar sin mermar la certificación ecológica.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['lobesia', 'polilla del racimo', 'viña plaga', 'botrytis viña', 'generacion lobesia'],
    response: 'La Lobesia botrana (Polilla del racimo) es la causante encubierta de las catastróficas epidemias de Botrytis cinerea, cuyas heridas generan focos infecciosos irreversibles en la vid. El software de control biológico IPMWise, alimentado diariamente por nuestra red LoRaWAN climática, calcula las horas-grado acumuladas para decretar la fase temporal de penetración larvaria intra-grano en el racimo. De esta forma, ya sea mediante confusión sexual o formulaciones sintéticas convencionales, logras posicionar el tratamiento en la ventana técnica de máxima eficacia, antes de que el daño arruine los estándares de Denominación de Origen.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['araña roja', 'tetranychus urticae', 'acaros', 'plaga sequia', 'defoliacion'],
    response: 'La Araña roja (Tetranychus urticae) detona invasiones letales precisamente por altas temperaturas asociadas con humedades relativas severamente bajas y déficit hídrico prolongado, originando defoliaciones fulminantes en la explotación. Con inteligencia de estaciones meteorológicas SenseCAP monitoreando el microclima a ras de suelo, nuestro asistente pronostica explosiones poblacionales y las correlaciona con la tensión de humedad foliar detectada. Nos anticipamos al colapso fisiológico antes de presenciar clorosis aguda en tejido verde, indicando aspersiones refrescantes preventivas o el momento óptimo para liberar depredadores controladores (Phytoseiulus persimilis).',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['pulgon', 'aphididae', 'negrilla', 'melaza', 'virus planta', 'hormigas'],
    response: 'Las explosiones masivas de pulgón no sólo chupan savia menguando fuertemente el vigor vegetativo; son los grandes transmisores de los temibles virus botánicos y precursores absolutos del hongo negrilla (Fumagina) que bloquea drásticamente la radiación PAR foliar. Analizando con algoritmos predictivos las tasas de multiplicación del afídido versus las condiciones termo-pluviometrícas, nuestra matriz sugiere umbrales de tratamiento temprano focalizado en rebrotes jóvenes. Así logrando contener la colonización con dosis fitosanitarias reducidísimas y conservando el equilibrio trófico natural a lo largo de la campaña entera.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['xylella', 'fastidiosa', 'bacteria olivo', 'seca del olivo', 'chicharrita'],
    response: 'Contra la irreversible Xylella fastidiosa, el control de los insectos vectores transmisores y un confinamiento estricto resultan obligatorios. Como herramientas de bioseguridad suprema, nuestro visor satelital NDVI es capaz de identificar disminuciones dramáticas de turgencia (declinación de clorometria) a nivel localizado muy tempranamente, alertando indirectamente sobre problemas fatales de xilema. Además, este seguimiento se ampara sobre el Cuaderno Digital de Smart Fénix, que verifica con coordenadas GPS geocercadas el trazado seguro de maquinaria, operarios y flotas frente a potenciales inspecciones de Sanidad Vegetal del SEPRONA.',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['verticilosis', 'verticillium', 'marchitez olivar', 'hongo vascular', 'enfermedad raiz'],
    response: 'El Verticillium dahliae destruye producciones al ocluir el sistema vascular de los olivos produciendo marchitez irreversible. Como el hongo sobrevive e infecta primordialmente mediante las humedades residuales del suelo e inóculos microscópicos en raíces adyacentes, limitamos drásticamente el riesgo empleando Sensores Multicapa Tubulares; evitamos saturación patológica prolongada del perfil (encharcamiento), determinando que el agua nunca se acumule estacionalmente. Es el método profiláctico agronómico absoluto para disminuir dramáticamente las probabilidades de infección fúngica de la raíz en las costosas fincas de olivares modernos en plantación superintensiva.',
    link: '/sensores/suelo-tubular'
  },
  {
    isTechnical: true,
    keywords: ['repilo', 'spilocaea oleaginea', 'hongo hoja', 'cobre olivo', 'defoliacion olivo'],
    response: 'El Repilo (Spilocaea oleaginea) produce defoliaciones severas que bloquean la inducción floral del año venidero, quebrando la productividad agrícola cíclica del productor. Empleamos el sensor revolucionario de Humectación Foliar Infrarroja y el control pluviométrico de precipitación acumulada, simulando fielmente la retención hídrica real en el epicarpio de la aceituna. Tras episodios intensos de rocío matinal o densas brumas continuadas en primavera, logramos determinar algorítmicamente exactamente si la espora logró germinar, programando rectas precisas en Cuaderno utilizando óxidos cuprosos únicamente cuando nos indique el mapa de riesgo.',
    link: '/sensores/planta-hoja-humectacion'
  },
  // BLOQUE CASUÍSTICA LEGAL, PROBLEMAS Y MULTAS SIEX
  {
    isTechnical: true,
    keywords: ['multa', 'inspeccion', 'sancion', 'inspectores', 'condicionalidad', 'denuncia', 'me han multado'],
    response: 'Si has recibido una inspección de campo, una carta de condicionalidad del SEPRONA o un aviso de sanción que pone en juego las ayudas de la PAC íntegras, no entres en pánico bajo ningún concepto. Nuestra arquitectura legal de Cuaderno SIEX actúa operando como un peritaje jurídico inviolable. Los ingenieros agrónomos de Agreeable Altitude diseñaron validaciones lógico-matemáticas automáticas que impiden registrar ilegalidades (ej: saltarse el plazo de seguridad prescrito o sobredosificar una sustancia activa penalizada comercialmente). Auditamos y saneamos tus registros corrigendo todo desajuste antes de su envío oficial por vía telemática al Ministerio.',
    link: '/cuaderno'
  },
  {
    keywords: ['error en el sigpac', 'coeficiente incorrecto', 'declaracion pac error', 'superficie erronea'],
    response: 'Las discordancias topológicas entre parcelarios reales y la base institucional SIGPAC desembocan en multas punitivas masivas y la impugnación total de los expedientes de Ayuda Base Renta. Cuando un agricultor reporta graves problemas de coeficiente de admisibilidad de pastos excluidos o superficie de labranza usurpada, interviene obligatoriamente la Inteligencia Artificial del Visor satelital incorporada de Cuaderno. Generamos a un ritmo de procesador y en minutos archivos técnicos GIS (Shapefile) justificados documentales y periciales matemáticamente para forzar la rectificación ante el servicio técnico territorial. Obtienes un cobro europeo absolutamente íntegro.',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['no entiendo', 'borrador', 'carga masiva', 'excel siex', 'lento software', 'caos administrativo'],
    response: 'El pánico inmanejable por los borradores fallidos inter-autonómicos, colapsos con las entidades Colaboradoras y el picado infinito de excels monstruosos se evapora contundentemente con nosotros. Acabamos de programar sistemas automatizados que liquidan tus angustias de la burocracia paralizante. Nuestro portal te permite volcar una carga digital, y entonces, de forma invisible, la API cruza tus hectáreas al ecosistema informático oficial nacional, detectando disyuntivas reglamentarias previas y confeccionado prolijas memorias técnicas validadas para presentarlas directamente a Agricultura de tu Junta. Nosotros resolvemos el 100% de la carga del agricultor.',
    link: '/soluciones/tecnicos'
  },
  // BLOQUE HARDWARE MILIMÉTRICO HIPER-ESPECÍFICO
  {
    isTechnical: true,
    keywords: ['sonda oxigeno', 'oxigeno en suelo', 'asfixia radicular', 'o2 sustrato', 'ahogo raiz'],
    response: 'A nivel microscópico, las raíces exclusivamente asimilan cationes y aniones fertilizantes cuando "respiran" oxígeno disuelto en los áridos capilares (utilizando la cadena de ciclo de Krebs). Si aniquilas y colapsas la porosidad con el aporte de goteo en exceso, originas asfixia, matando todo cultivo arbóreo intensivo. Por ello hemos introducido exclusivas Sondas de Oxígeno subterráneo, implantadas a 30cm del bulbo hídrico emitiendo concentración volumétrica de gas en porcentaje. Preservas siempre el ambiente aeróbico de los pelos absorbentes optimizando al máximo tus fertilizantes N-P-K de cobertera inyectados.',
    link: '/sensores/suelo-oxigeno'
  },
  {
    isTechnical: true,
    keywords: ['co2 suelo', 'dioxido de carbono suelo', 'respiracion raiz', 'microorganismos suelo'],
    response: 'El secuestro de carbono es el epicentro mundial de las Políticas Verdes Modernas y certifica tu explotación, pero irónicamente las tierras yermadas han perdido vitalidad microbiológica tras años de glifosato. Instalamos pioneramente Detectores de Flujo Continuo de CO2 Edáfico (Sonda CO2 Suelo). Medir científicamente en continuo el eflujo microscópico liberado constata paramétricamente la carga y salud microbiana y rizosférica del lecho sembrado, posibilitando a los agrónomos cobrar generosas bonificaciones por esquemas y créditos orgánicos del nuevo Carbon Farming que paga con gran éxito la nueva PAC.',
    link: '/sensores/suelo-co2'
  },
  {
    isTechnical: true,
    keywords: ['par', 'fotosintesis', 'radiacion par', 'luz planta', 'mallas de sombreo', 'lux'],
    response: 'Asumir empíricamente el espectro solar es obsoleto, la energía del sol únicamente activa la bioenzimática en un rango medible asimilable de longitud lumínica. Distribuimos potentes Sensores de Radiación PAR (Radiación Fotosintéticamente Activa) compuestos con espectrómetros cuánticos ultra-frecuencia que revelan la incidencia fotónica real que acciona los meristemos. Dominando milimetricamente esta métrica logras decidir arquitectónicamente el cierre robótico automatizado de techos mallas en cultivo indoor e invernadero sofisticado controlando a antojo el letargo vegetativo para salvarte de quemaduras y abrasamiento oxidativos estivales crónicos en frutos primor.',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['pluviometro', 'precipitacion resolucion', 'milimetros', 'lluvia caida', 'cazoleta', 'balance hidrico'],
    response: 'Delegar en pronósticos interpolados a docenas de kilómetros desata la ruina de los cálculos de fertirrigación. Las fincas aisladas poseen un micro-clima intrínseco. Distribuimos eficientes Pluviómetros Aerodinámicos High-Resolution con un calibre magnético de cazoleta oscilante extrema (0.1 mm), que captan escrupulosamente los rocíos de condensación minúscula matutina y transfiere a nuestra red el balance final. Cada centímetro cúbico que es almacenado es sumado activamente en la matriz agronómica, cortando la electro-válvula y bloqueando automáticamente dispendios tarifarios imperdonables de caudales hidroeléctricos de reserva. Amortizable de por vida.',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['multicapa', 'tubular', 'sensor tubular', 'capas suelo', 'drenaje', 'perfil hidrico'],
    response: 'Inferir la profundidad hidráulica apoyándose un único estrato es un grave error operativo. Recomendamos integralmente los novedosos Sensores FDR de Diseño Tubular insertos hasta el primer metro profundo de perfil sin perturbar perfiles naturales estratigráficos. Proveen instrumentarias múltiples incorporando 10 nudos de termistor medidor, escaneando cada 10 centímetros de la profundidad volumétrica y evidenciando dinámicas intrincadas litológicas, detectando con altísima resolución estratos subyacentes impermeables impenetrables "suela de arado". Impediremos roturaciones y bloquearemos por aspersión escorrentías perjudicialmente lavadoras de abono nitrogenado previniendo una eutrofización ecologógica penal.',
    link: '/sensores/suelo-tubular'
  },
  // BLOQUE DIRECTORIO CUE POR COMUNIDADES (SOPORTE OFICIAL)
  {
    keywords: ['andalucía', 'reafa', 'junta de andalucía', 'sur', 'olivar andaluz'],
    response: 'Para gestionar el CUE en Andalucía es obligatorio el REAFA. Debes tramitar las autorizaciones mediante el Anexo IV de la Orden de 27 de octubre de 2019. Tienes el modelo PDF cumplimentable y el acceso a la sede electrónica en nuestro directorio. Asistencia oficial: 900 878 525. Consulta los detalles aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    keywords: ['aragón', 'ayuda aragón', 'zaragoza', 'huesca', 'teruel'],
    response: 'En Aragón, el trámite se realiza a través del Procedimiento 9931 para entidades habilitadas. Es vital estar registrado en el REA del Gobierno de Aragón para acceder al CUE. Disponemos de manuales de apoyo para la inscripción. Contacto oficial: reacue@aragon.es. Toda la info en: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    keywords: ['castilla y león', 'reacyl', 'cyl', 'valladolid', 'burgos', 'leon'],
    response: 'Castilla y León utiliza el sistema REACYL. El acceso se realiza mediante la aplicación específica de la Junta de CyL. Es obligatorio el modelo de autorización de entidad por parte del titular. Para consultas técnicas oficiales: cuecyl@jcyl.es. Mira los enlaces directos aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    keywords: ['castilla-la mancha', 'clm', 'toledo', 'ciudad real', 'albacete'],
    response: 'En Castilla-La Mancha, el acceso de los agricultores se centraliza en el registro de explotaciones de la SGA. El sistema CUE-CLM requiere validación previa de la condición de entidad habilitada. Contacto de la Consejería mediante su formulario oficial en nuestro directorio: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    keywords: ['comunidad valenciana', 'vlc', 'alicante', 'castellon', 'gva'],
    response: 'La Generalitat Valenciana exige la inscripción en el REGEPA y la declaración responsable de habilitación para el CUE. El soporte oficial se gestiona en cue@gva.es. Tienes los trámites de alta y modelos de seguridad aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  // BLOQUE ADMINISTRACIÓN Y SEGURIDAD CRÍTICA
  {
    keywords: ['seguridad', 'robo', 'valla', 'geofencing', 'vigilancia', 'alarma'],
    response: 'Protegemos tus activos mediante Geofencing (vallas virtuales). Si un tractor o sensor sale del perímetro marcado fuera del horario laboral, recibes una alerta de Nivel 1. Además, nuestras cámaras térmicas con Edge Computing distinguen entre fauna y personas, eliminando falsas alarmas. Detalles en: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    keywords: ['pozo', 'nivel freático', 'bomba', 'agua pozo', 'caudalímetro'],
    response: 'Monitorizamos pozos en tiempo real mediante sensores de presión y caudalímetros ultrasónicos. Detectamos caídas del nivel freático o desviaciones del caudal nominal que podrían indicar agotamiento o avería inminente de la bomba, evitando el trabajo en seco. Control hídrico total en: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['fuga', 'presión tubería', 'rotura', 'riego fallo', 'pérdida agua'],
    response: 'Nuestro sistema GIS monitoriza la red de riego. Si detecta una caída de presión o un exceso de flujo respecto al caudal nominal del sector, el sistema geolocaliza el tramo afectado y te envía una alarma al móvil para actuar antes de que la inundación o la falta de riego causen daños. Más info: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  // BLOQUE DUDAS FRECUENTES
  {
    keywords: ['ayuda', 'ayudame', 'necesito', 'ayudar', 'socorro', 'asistencia'],
    response: 'Si necesitas ayuda con tu explotación, nuestro equipo de Ingenieros Agrónomos puede asesorarte de forma personalizada. No somos un servicio genérico; analizamos tus datos de suelo, clima y planta para optimizar tu riego y nutrición. Para una consultoría técnica o dudas sobre el SIEX, lo mejor es que hablemos: +34 621 26 22 86 o escríbenos en [Contactar con un Ingeniero](/contacto).',
    link: '/contacto'
  },
  {
    keywords: ['cultivo', 'siembra', 'finca', 'explotacion', 'problema', 'que hago', 'cultivos'],
    response: 'Para optimizar tus cultivos (olivar, almendro, frutales, etc.), utilizamos tecnología de precisión que mide lo que la planta realmente necesita. Si tienes problemas de rendimiento o quieres lograr un masivo **ahorro de agua** y abono, consulta nuestras [Soluciones para Agricultores](/soluciones/agricultores) o solicita una demo técnica de nuestros sensores de suelo y planta.',
    link: '/soluciones/agricultores'
  },
  // AMPLIACIÓN PARA USUARIOS NO AGRÓNOMOS (CUALQUIER PERSONA)
  {
    keywords: ['que haces', 'quien eres', 'para que sirves', 'funcionalidad', 'ayudame'],
    response: 'Soy el experto virtual de **Smart Fénix**. Mi misión es ayudarte a digitalizar tu finca: gestiono tu **Cuaderno SIEX** para evitar multas y conecto tus cultivos con sensores de precisión para lograr un importante **ahorro de agua** y abono. ¿Qué te interesa más: la parte legal o la tecnología de campo?',
    link: '/'
  },
  {
    keywords: ['sensor', 'sensores', 'humedad', 'suelo', 'npk', 'fdr', 'aparatos', 'medidores', 'tecnología', 'precisión', 'herramientas', 'maquinaria', 'zensor', 'sencor', 'receptor'],
    response: 'Nuestros sensores de precisión (**NPK**, humedad volumétrica multicapa, dendrómetros) miden exactamente lo que la planta necesita para que optimices costes de riego y fertilizante desde el primer día.\n\n[Catálogo de Sensores de Precisión](/sensores)',
    link: '/sensores/suelo'
  },
  // BLOQUE: IDENTIDAD (¿Qué es esta página?)
  {
    keywords: ['trata', 'pagina', 'web', 'sitio', 'smart fenix', 'quienes sois', 'que es esto', 'empresa', 'agroai'],
    response: 'Smart Fénix es una herramienta de apoyo al agricultor. Digitalizamos los datos de tu campo (suelo, clima y planta) para que tengas toda la información en un solo lugar y cumplas con el Cuaderno SIEX de forma sencilla.\n\nEs tecnología hecha por ingenieros para facilitar el trabajo diario en el campo.\n\n[Conocer más sobre nosotros](/)',
    link: '/'
  },
  // BLOQUE: ACCESO SMARTAGRO (Prioridad Técnica)
  {
    keywords: ['smartagro', 'entro', 'entrar', 'accedo', 'acceder', 'login', 'acceso'],
    response: 'Para entrar en la plataforma **SmartAgro**, usa el botón **Acceder a SmartAgro** arriba en el menú. Si no tienes claves, escríbenos al WhatsApp **+34 621 26 22 86**.',
    link: '/contacto'
  },
  // BLOQUE: AYUDAS Y SUBVENCIONES
  {
    keywords: ['ayuda', 'subvencion', 'fondos', 'dinero', 'financiacion', 'gratis', 'ayudas'],
    response: 'Existen diversas líneas de apoyo para la digitalización agraria. Aunque nos centramos en la ingeniería técnica, asesoramos a nuestros clientes sobre cómo nuestras herramientas encajan en planes de mejora y modernización de regadíos. Si buscas financiación para instalar sensores o el cuaderno, hablemos para ver qué convocatorias actuales se adaptan a tu finca: +34 621 26 22 86 o en [Solicitar Información](/contacto).',
    link: '/contacto'
  },
  // --- BLOQUE: BLOG Y FORMACIÓN (Hemeroteca) ---
  {
    isTechnical: true,
    keywords: ['blog', 'leer', 'articulos', 'noticias', 'actualidad', 'informacion', 'aprender', 'novedades', 'hemeroteca'],
    response: 'En nuestra **Hemeroteca Técnica** publicamos guías sobre la normativa SIEX, análisis de nuevas plagas y consejos de riego. Es el mejor sitio para estar al día de lo que exige el Ministerio y de las nuevas tecnologías. \n\n¿Quieres leer sobre algún cultivo en concreto? [Ver Hemeroteca Técnica](/blog)',
    link: '/blog'
  },
  {
    isTechnical: true,
    keywords: ['competencia', 'mejor que', 'otros', 'barato', 'amazon', 'chino', 'por que vosotros'],
    response: 'Hay muchos sensores en el mercado, pero nosotros no vendemos "cacharros", vendemos **Ingeniería Agronómica Española**. Nuestros sensores están calibrados para suelos reales (arcillosos, calizos, pedregosos) y nuestro software cumple al 100% con el **SIEX Nacional**.\n\nNo te la juegues con equipos sin soporte técnico local. [Nuestras Soluciones](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  // BLOQUE: AFIRMACIÓN / ACUERDO
  {
    keywords: ['me parece bien', 'de acuerdo', 'entendido', 'perfecto', 'comprendo'],
    response: 'Me alegra que te sirva la información. 👍\n\n¿Quieres que profundicemos en algún detalle técnico de eso o prefieres que veamos otro tema de tu finca?\n\n* [Ver más sobre este tema](/soluciones/agricultores)\n\n* [Volver al inicio](/)',
    link: '/'
  },
  // BLOQUE: DUDA / NO ENTIENDO
  {
    keywords: ['no entiendo', 'que dices', 'explicate', 'no comprendo', 'que me quieres decir', 'perdona'],
    response: 'Siento haberme puesto demasiado técnico, a veces a los ingenieros se nos va la mano con los datos. 😅\n\nEn resumen: te ayudamos a que tu finca sea más fácil de gestionar y más rentable.\n\n¿Qué parte te ha liado más? ¿El tema de los sensores o lo del papeleo del SIEX?\n\n* [Ver Resumen de Servicios](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  // BLOQUE: CORTESÍA Y AGRADECIMIENTO
  {
    keywords: ['gracias', 'gracias mil', 'agradecido', 'buen trabajo', 'crack', 'maquina', 'util', 'me gusta', 'perfecto', 'genial', 'de nada', 'un placer', 'atiende bien'],
    response: '¡De nada! Es un placer ver que la tecnología te sirve de ayuda en el día a día. 🚜✨\n\nEn Smart Fénix nos apasiona que el campo sea más sencillo y rentable. Si necesitas profundizar en algún dato o que miremos algo juntos, ya sabes dónde encontrarme.\n\n**¿Seguimos con la faena?**\n\n* [Ver mis sensores](/sensores)\n\n* [Consultar el SIEX](/cuaderno)\n\n* [Hablar con el equipo](/contacto)',
    link: '/contacto'
  },
  // BLOQUE: DESPEDIDA AMISTOSA
  {
    keywords: ['adios', 'chao', 'hasta luego', 'nos vemos', 'luego hablo', 'me voy', 'buenas noches', 'buen dia'],
    response: '¡Que tengas buena jornada! El campo no descansa, pero nosotros estamos aquí para que tú sí puedas hacerlo un poco más.\n\nSi te surge cualquier duda mientras estás en la finca, vuelve por aquí o pega un toque al equipo. ¡Hasta la próxima! 👋\n\n* [Dejar una consulta técnica](/contacto)',
    link: '/contacto'
  },
  // BLOQUE: REFRANERO Y TRABAJO (MAX PRIORIDAD)
  {
    keywords: [
      'inutil', 'inútil', 'estupido', 'estúpido', 'cabron', 'cabrón', 'gilipollas', 'mierda', 'basura', 'joder', 'puto', 'tonto', 'imbecil', 'imbécil', 'capullo', 'idiota', 'payaso', 'estafa', 'timo', 'robo', 'chorizos', 'mamon', 'mamón', 'pringao', 'subnormal', 'pendejo', 'gonorrea', 'hdp', 'vendehumos', 'mentira', 'engaño', 'pesado', 'callate', 'cállate', 'ijoputa', 'maricon', 'zorra', 'mongolo', 'atontao', 'paleto', 'cateto', 'ignorante', 'asqueroso', 'carajo', 'cojones', 'huevon',
      'inutiles', 'inútiles', 'estupidos', 'cabrones', 'gilipollas', 'mierdas', 'basuras', 'jodete', 'putos', 'tontos', 'imbeciles', 'capullos', 'idiotas', 'payasos', 'estafadores', 'timadores', 'robos', 'rateros', 'chorizos', 'mamones', 'pringaos', 'subnormales', 'pendejos', 'gonorreas', 'vendehumos', 'mentiroso', 'mentirosos', 'engaños', 'asquerosos', 'pesados', 'callame', 'ijoputes', 'maricones', 'zorras', 'mongolos', 'atontados', 'paletos', 'catetos', 'ignorantes', 'carajos', 'cojonazos', 'huevones',
      'pajuelo', 'majadero', 'zote', 'panoli', 'bobon', 'bobalicon', 'lerdo', 'besugo', 'cenutrio', 'alcornoque', 'zopenco', 'tarugo', 'zoquete', 'zopencos', 'lerdos', 'panolis', 'bobones', 'cenutrios', 'tarugos', 'gaznapira', 'gaznapiro', 'cazurro', 'cazurros',
      'pelagatos', 'mequetrefe', 'mindundi', 'pocacosa', 'estulto', 'necio', 'baboso', 'ruin', 'mezquino', 'miserable', 'desgraciado', 'desgraciados', 'canalla', 'golfo', 'jeta', 'jetas', 'sinvergueza', 'sinvergueenzas', 'mangante', 'ratero', 'ladron', 'ladrones',
      'caradura', 'perro', 'perros', 'cerdo', 'cerdos', 'marrano', 'marranos', 'puerco', 'puercos', 'desfachatado', 'deslenguado', 'bocachancla', 'bocazas', 'charlatan', 'embaucador', 'farsante', 'falsante', 'fariseo', 'hipocrita', 'basurero', 'asco de pagina', 'mierda de bot', 'puto bot', 'bot de mierda', 'bot inutil', ' asco '
    ],
    response: 'Insultar al bot no te va a quitar las multas del Ministerio ni te va a arreglar el riego. 🌾\n\nAquí venimos a trabajar. ¿En qué puedo ayudarte de verdad?\n\n* [Evitar Sanciones SIEX](/cuaderno)\n\n* [Asesoría Técnica](/contacto)',
  },
  // NUEVOS MÓDULOS DE PRIORIDAD ALTA
  {
    isTechnical: true,
    keywords: ['manchas', 'bichos', 'hoja amarilla', 'se seca', 'puntos negros', 'plaga', 'enfermedad', 'bicho'],
    response: 'Identificar una plaga por texto es arriesgado. Si notas decaimiento o manchas raras, suele ser estrés hídrico o falta de nutrientes. \n\nHazle una foto a la hoja y pásanosla por el [Formulario de Asesoría Técnica](/contacto). Nuestros ingenieros le echarán un ojo para darte una solución real.',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['cuanto ahorro', 'es rentable', 'vale la pena', 'amortizar', 'ganar dinero', 'ahorrar agua', 'ahorrar abono'],
    response: 'De media, nuestros sensores reducen el gasto en agua un 30% y en fertilizantes un 20%. \n\nEn una finca estándar, el equipo se paga solo en la primera campaña al evitar desperdicios. ¿Quieres que hagamos los números de tu parcela? [Calcular mi Ahorro Real](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    keywords: ['refran', 'dicho', 'tiempo', 'lluvia', 'nieve', 'marzo', 'abril', 'mayo'],
    response: 'Como decimos por aquí: Agua de mayo, pan para todo el año. 🌾 \n\nPero como el tiempo está loco, mejor que el agua de mayo la controlen nuestros Sensores de Clima. ¿Cómo va la previsión por tu zona? ¿Hay ganas de que llueva?',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['chino', 'amazon', 'barato', 'otra marca', 'comparar', 'mejor que', 'vendehumos'],
    response: 'Hay sensores que son juguetes. Los nuestros son ingeniería industrial calibrada para el suelo español. \n\nNo es lo mismo un sensor de 20€ que uno que te garantiza precisión para no recibir multas del SIEX. Lo barato sale caro en la cosecha.',
    link: '/sensores'
  },
  {
    isTechnical: true,
    keywords: ['plantar', 'instalar', 'clavar', 'meter', 'poner', 'montar', 'como se pone', 'como se instala', 'agujero', 'instalacion'],
    response: 'La instalación es sencilla pero clave para que los datos sean reales. 🛠️ \n\nNuestros ingenieros se encargan de todo: desplazamos el equipo a tu finca, realizamos la perforación con barrena para no perturbar el perfil del suelo y dejamos el sensor calibrado y conectado a tu móvil en el acto. \n\n¿Quieres ver cómo queda instalado? [Ver proceso de Instalación](/servicios/instalacion) o [Solicitar visita técnica](/contacto)',
    link: '/servicios/instalacion'
  },
  {
    isTechnical: true,
    keywords: ['solucion', 'soluciones', 'que me dais', 'que ofreceis', 'ayudar campo', 'mejorar finca'],
    response: 'Nuestra solución no es solo un sensor; es un sistema de toma de decisiones. \n\nTe damos la tecnología para medir, el software para cumplir con la ley (SIEX) y el asesoramiento de ingenieros para que sepas qué hacer con esos datos. \n\n¿Qué solución necesitas hoy? \n\n* [Soluciones para Agricultores](/soluciones/agricultores)\n\n* [Asesoría Técnica Especializada](/contacto)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['roto', 'no funciona', 'fallo', 'averia', 'ayuda tecnica', 'soporte'],
    response: 'Si tienes un problema técnico con un equipo instalado, no pierdas tiempo con el chat. 📞 \n\nLlámanos directamente al +34 621 26 22 86. Un ingeniero revisará la telemetría de tu nodo en remoto o se desplazará a tu finca si es necesario. El campo no espera y nosotros tampoco.',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: INSTALACIÓN Y FÍSICA (El 'Pincho') ---
  {
    isTechnical: true,
    keywords: ['pincho', 'clavar', 'meter', 'poner', 'tierra', 'agujero', 'hoyo', 'instalar', 'montar', 'hincar', 'clavo', 'estacion', 'barrena', 'perforar', 'profundidad', 'raices', 'suelo', 'piedra', 'duro'],
    response: 'No te preocupes por la instalación; no tienes que tocar un cable. 🛠️ \n\nNosotros vamos a tu finca, hacemos el agujero con barrena técnica para no estropear el terreno y dejamos el pincho (sensor) midiendo en el acto. Si la tierra tiene piedra o está dura como el hormigón, llevamos maquinaria para dejarlo perfecto. \n\n* [Ver proceso de instalación](/servicios/instalacion)\n\n* [Solicitar visita a mi finca](/contacto)',
    link: '/servicios/instalacion'
  },
  // --- BLOQUE TRANSVERSAL: SALUD Y PLAGAS (Hoja Fea y Mordidas) ---
  {
    isTechnical: true,
    keywords: ['mordidas', 'comido', 'agujeros', 'gusano', 'pulgon', 'araña', 'bichitos', 'que plaga es', 'saber que es', 'identificar', 'hoja', 'fea', 'amarilla', 'seca', 'mancha', 'punto', 'plaga', 'enferma', 'hongo', 'mosca', 'lacia', 'triste', 'decaida', 'peste'],
    response: 'Si ves mordidas o agujeros, tienes inquilinos no deseados en el cultivo. 🐛 \n\nNo podemos darte un diagnóstico 100% real por aquí, pero si nos envías una foto por WhatsApp o Formulario, nuestros ingenieros te ayudarán a identificar si es una plaga o una carencia nutricional antes de que se extienda. \n\n* [Identificar Plaga por Foto](/contacto)',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: EFICIENCIA Y ESCALA (Grandes Fincas) ---
  {
    isTechnical: true,
    keywords: ['hectareas', 'finca grande', 'latifundio', 'parcelas', 'eficiente', 'ahorrar mucho', 'explotacion', 'rentabilidad'],
    response: 'Gestionar grandes extensiones (100, 500 o 1000 hectáreas) sin sensores es como ir a ciegas. 🚜💨 \n\nNuestra tecnología te permite ver el estado hídrico de cada sector de riego desde el móvil, evitando que desperdicies miles de euros en agua y abono por culpa de una mala decisión. Para fincas de este tamaño, lo mejor es un plan de Ingeniería a Medida. \n\n* [Ver Soluciones de Escala](/soluciones/agricultores)\n* [Pedir Estudio de Rentabilidad](/herramientas/calculadora-roi)',
    link: '/soluciones/agricultores'
  },
  // --- BLOQUE TRANSVERSAL: DINERO Y RENTABILIDAD (El 'Timo') ---
  {
    isTechnical: true,
    keywords: ['precio', 'caro', 'vale', 'coste', 'dinero', 'rentable', 'ahorro', 'timo', 'robo', 'estafa', 'vendehumos', 'engañar', 'cuanto', 'presupuesto', 'barato', 'inversion', 'pagar', 'gratis'],
    response: 'Más caro es tirar el abono y el agua sin saber si la planta lo aprovecha. 💸 \n\nNuestros clientes ahorran un 30% en riego y un 20% en fertilizantes. El equipo se paga solo en una campaña al evitar desperdicios y multas del SIEX. \n\n* [¿Cuánto puedo ahorrar?](/herramientas/calculadora-roi)\n\n* [Hablar de números con un técnico](/contacto)',
    link: '/herramientas/calculadora-roi'
  },
  // --- BLOQUE TRANSVERSAL: CONTACTO Y PERSONA (Llamame) ---
  {
    keywords: ['llamame', 'telefono', 'hablar', 'persona', 'humano', 'jefe', 'encargado', 'ayuda', 'duda', 'llamar', 'oficina', 'contacto', 'donde', 'sede', 'ingeniero', 'agronomo'],
    response: 'Para hablar con una persona de carne y hueso, aquí tienes línea directa. 📞 \n\n* Teléfono: +34 621 26 22 86\n\n* Soporte: [Formulario de Contacto](/contacto)\n\nLlámanos y un ingeniero te atenderá sin rodeos ni máquinas.',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: CULTIVOS ESPECÍFICOS ---
  {
    isTechnical: true,
    keywords: ['olivo', 'aceituna', 'almendro', 'frutal', 'pistacho', 'viña', 'uva', 'tomate', 'invernadero', 'intensivo', 'superintensivo', 'secano', 'regadio'],
    response: 'Cada cultivo es un mundo. No es lo mismo un olivar tradicional que un almendro superintensivo. 🌳 \n\nTenemos soluciones específicas para optimizar el riego deficitario en leñosos y el control de estrés hídrico para que el fruto sea de máxima calidad. \n\n* [Soluciones por Cultivo](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  // --- BLOQUE TRANSVERSAL: INFRAESTRUCTURA Y RIEGO (La Tubería) ---
  {
    isTechnical: true,
    keywords: ['riego', 'goteo', 'goteros', 'agua', 'tuberia', 'bomba', 'presion', 'pozo', 'balsa', 'estanque', 'caudal', 'contador', 'valvula', 'electrovalvula', 'gotero', 'aspersor', 'regadio', 'deficitario'],
    response: 'Optimizar el riego no es solo abrir la llave; es saber cuándo cerrar. 💧 \n\nNuestros sondas detectan si el agua llega a la raíz o si se está perdiendo por filtración profunda. Te ayudamos a ahorrar hasta un 30% de agua manteniendo la planta en su punto óptimo de sazón. \n\n* [Optimizar mi Riego](/sensores/suelo)\n\n* [Ver Sensores de Humedad](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  // --- BLOQUE TRANSVERSAL: NUTRICIÓN Y ABONADO (El NPK) ---
  {
    isTechnical: true,
    keywords: ['abono', 'fertilizante', 'comida', 'nutriente', 'nitrato', 'fosforo', 'potasio', 'npk', 'urea', 'estiercol', 'quimica', 'echarle', 'abonado', 'fertirriego', 'conductividad', 'salinidad', 'sales'],
    response: 'Tirar abono "a ojo" es tirar el dinero al suelo. 💸 \n\nCon nuestros Sensores NPK medimos la conductividad y los nutrientes reales en la zona radicular. Así solo echas lo que la planta puede comer, evitando bloqueos y sales innecesarias. \n\n* [Ver Sensores de Nutrientes](/sensores/suelo)\n\n* [Calcular Ahorro en Abono](/herramientas/calculadora-roi)',
    link: '/sensores/suelo'
  },
  // --- BLOQUE TRANSVERSAL: CLIMA Y DESASTRES (El Tiempo) ---
  {
    isTechnical: true,
    keywords: ['helada', 'frio', 'calor', 'calima', 'viento', 'granizo', 'pedrisco', 'lluvia', 'nieve', 'temperatura', 'humedad aire', 'vpx', 'evapotranspiracion', 'clima', 'estacion meteorologica'],
    response: 'El tiempo está loco, pero que no te pille por sorpresa. ⛈️ \n\nNuestras estaciones miden la integral térmica y el riesgo de heladas en tiempo real, enviándote una alerta al móvil para que puedas actuar (activar riego anti-helada o mallas). \n\n* [Ver Estaciones Climatológicas](/sensores/clima)',
    link: '/sensores/clima'
  },
  // --- BLOQUE TRANSVERSAL: SUBVENCIONES Y DINERO (Kit Digital) ---
  {
    keywords: ['subvencion', 'ayuda', 'kit digital', 'fondos', 'europa', 'gratis', 'financiacion', 'pagar', 'cuota', 'precio', 'barato', 'fondos europeos'],
    response: 'La digitalización del campo está subvencionada. 🇪🇺 \n\nMuchos de nuestros equipos entran en el Kit Digital o planes de modernización de regadíos. Te asesoramos para que la inversión te salga lo más rentable posible. \n\n* [Consultar Ayudas Disponibles](/contacto)',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: MAQUINARIA Y TRACTOR (Dureza) ---
  {
    keywords: ['tractor', 'aperos', 'atomizador', 'cosechadora', 'vibrador', 'paraguas', 'golpe', 'romper', 'pisar', 'maquina', 'hierro', 'acero'],
    response: 'Nuestros equipos están hechos para el campo, no para una oficina. 💪 \n\nLas sondas van enterradas y los nodos protegidos para que no estorben al pasar con el tractor o el paraguas. Son "hierros" duros diseñados para aguantar sol, barro y vibraciones. \n\n* [Ver Robustez de los Equipos](/servicios/instalacion)',
    link: '/servicios/instalacion'
  },
  // --- BLOQUE TRANSVERSAL: GEOGRAFÍA Y CERCANÍA (¿Venís?) ---
  {
    keywords: ['donde', 'sede', 'oficina', 'españa', 'mapa', 'ubicacion', 'central', 'instaladores', 'venis', 'venis a mi zona', 'teneis tecnico'],
    response: 'Estamos donde tú estés. 📍 \n\nSomos una ingeniería española con técnicos en las principales zonas agrarias. Instalamos en toda la península y damos soporte presencial. No somos una empresa de internet que desaparece; estamos a pie de surco. \n\n* [Ver Red de Soporte](/contacto)',
    link: '/contacto'
  },
  // --- BLOQUE: QUEJAS DEL TIEMPO (Empatía) ---
  {
    keywords: ['no llueve', 'sequia', 'vaya calor', 'hace calor', 'vaya frio', 'vaya tiempo', 'se seca todo', 'esta la cosa mal', 'no cae una gota', 'poca agua', 'mucho sol', 'que asco de tiempo'],
    response: 'El tiempo no perdona y este año está apretando de lo lindo. ☀️🔥 \n\nPrecisamente porque el agua está escasa y el sol no da tregua, nuestras sondas son más necesarias que nunca: para que ni una gota de la que riegues se pierda y la planta aguante el tirón. \n\n¿Cómo está la tierra por tu zona? ¿Está muy apretada?',
    link: '/sensores/clima'
  },
  // --- BLOQUE: POLÍTICA Y BUROCRACIA (El 'Harto') ---
  {
    keywords: ['politicos', 'gobierno', 'ministerio', 'nos tienen fritos', 'vaya tela', 'siempre igual', 'solo quieren dinero', 'vaya robo', 'estoy harto', 'hasta los cojones', 'vaya mierda de leyes'],
    response: 'Te entiendo perfectamente. Entre papeles, leyes nuevas y exigencias del Ministerio, parece que el agricultor tiene que ser más administrativo que tractorista. 📋🚜 \n\nNosotros nacimos para eso: para que el Cuaderno SIEX se rellene casi solo y te dejen trabajar en paz, que es lo que sabes hacer. ¿Te ayudamos con el papeleo?',
    link: '/cuaderno'
  },
  // --- BLOQUE: SALUDOS Y CORTESÍA RURAL ---
  {
    keywords: ['buenos dias', 'buenas tardes', 'hola buenas', 'que tal', 'como va eso', 'ey', 'buenas', 'que pasa', 'como estais', 'quien hay'],
    response: '¡Buenas! Aquí estamos, al pie del surco digital. 👋 \n\n¿Cómo va la faena hoy? ¿En qué te puedo echar un cable para que la jornada sea más ligera? \n\n* [Ver soluciones técnicas](/soluciones/agricultores)\n\n* [Hablar con un ingeniero](/contacto)',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: CUE Y GEOLOCALIZACIÓN (Normativa Regional) ---
  {
    isTechnical: true,
    keywords: ['cue', 'cuaderno de explotacion', 'andalucia', 'extremadura', 'castilla', 'aragon', 'murcia', 'comunidad', 'mi zona', 'mi region', 'españa', 'comunidades'],
    response: 'Cumplimos con la normativa de todas las Comunidades Autónomas, incluida la gestión del **CUE (Cuaderno de Explotación)** bajo el estándar SIEX nacional. 📋 \n\nDa igual si estás en Andalucía, Extremadura o cualquier otra zona; nuestra plataforma adapta los trámites a lo que te pide tu consejería de agricultura. \n\n* [Ver trámites por Comunidad](/cuaderno)',
    link: '/cuaderno'
  },
  // --- BLOQUE TRANSVERSAL: CONSEJOS DE RIEGO (El 'Cómo regar') ---
  {
    isTechnical: true,
    keywords: ['como regar', 'cuando regar', 'cuanta agua', 'tiempo de riego', 'necesidad hidrica', 'momento de riego'],
    response: 'Para saber cómo regar de forma eficiente, lo primero es saber cuánta agua tiene tu suelo ahora mismo. 💧 \n\nCon nuestros sensores, dejas de regar por calendario y antes de que la planta tenga sed. Te avisamos al móvil cuando la humedad baje del punto crítico. \n\n* [Aprender a optimizar el riego](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  // --- BLOQUE: EL 'PREGUNTON' (Dudas de identidad) ---
  {
    keywords: ['eres un robot', 'eres persona', 'quien eres', 'con quien hablo', 'eres real', 'eres maquina', 'chatgpt'],
    response: 'Soy el asistente inteligente de Smart Fénix. No como ni duermo, pero sé de sensores y de la normativa SIEX casi más que mis creadores (que son ingenieros agrónomos). 🤖🌾 \n\nSi te cansas de hablar conmigo y quieres a una persona de carne y hueso, solo tienes que pedirlo: [Hablar con un humano](/contacto).',
    link: '/contacto'
  },
  // --- BLOQUE TRANSVERSAL: SIEX Y BUROCRACIA (Papeles - MAX PRIORIDAD) ---
  {
    isTechnical: true,
    keywords: ['cuaderno', 'siex', 'sies', 'ciex', 'cue', 'normativa', 'ley', 'rd1054', 'registro', 'obligatorio'],
    response: 'El **Cuaderno Digital (SIEX/CUE)** es obligatorio y el Ministerio no perdona. 📋 \n\nNuestra plataforma adapta los trámites a lo que te pide tu Comunidad Autónoma (Andalucía, Extremadura, etc.). Olvídate de los Excel; el sistema rellena los tratamientos automáticamente para que estés cubierto legalmente. \n\n* [Evitar multas SIEX](/cuaderno)\n\n* [Ver cómo funciona el Cuaderno](/cuaderno)',
    link: '/cuaderno'
  },
  // --- CAPA DE ESPECIALIZACIÓN REGIONAL (CUE/SIEX Segmentado) ---
  {
    isTechnical: true,
    keywords: ['andalucia', 'jaen', 'cordoba', 'sevilla', 'huelva', 'cadiz', 'malaga', 'almeria', 'granada'],
    response: 'En Andalucía, el **CUE** es fundamental por la normativa de la Junta. Nuestra plataforma integra todos los requisitos andaluces. \n\n* [Mi CUE en Andalucía](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['canarias', 'palma', 'tenerife', 'grancanaria', 'gomera', 'hierro', 'fuerteventura', 'lanzarote'],
    response: 'El REA y el **CUE** en Canarias tienen particularidades por su régimen especial. Estamos preparados para gestionar tu explotación en las islas. \n\n* [Mi CUE en Canarias](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['vasco', 'euskadi', 'vizcaya', 'guipuzcoa', 'alava'],
    response: 'Adaptamos el registro al **CUE** de Euskadi, cumpliendo con la normativa foral y el SIEX nacional. \n\n* [Mi CUE en Euskadi](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['castilla', 'leon', 'mancha', 'toledo', 'valladolid', 'ciudadreal', 'albacete', 'cuenca', 'guadalajara'],
    response: 'Gestionamos el **CUE** en ambas Castillas, optimizando los trámites para grandes explotaciones de secano y regadío. \n\n* [Mi CUE en Castilla](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['aragon', 'zaragoza', 'huesca', 'teruel', 'ebro'],
    response: 'El **CUE** en Aragón requiere precisión en los riegos del Ebro. Nuestra plataforma te cubre ante la DGA. \n\n* [Mi CUE en Aragón](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['madrid', 'valencia', 'murcia', 'galicia', 'asturias', 'cantabria', 'navarra', 'rioja', 'cataluña', 'baleares'],
    response: 'Damos soporte legal en tu comunidad, adaptando el **CUE/SIEX** a los plazos de tu administración regional. 📍 \n\n* [Ver trámites de mi zona](/cuaderno)',
    link: '/cuaderno'
  },
  // --- CAPA DE ESPECIALIZACIÓN TÉCNICA (Venta Directa) ---
  {
    isTechnical: true,
    keywords: ['humedad', 'agua', 'riego'],
    response: 'Para controlar el agua, necesitas nuestra **Sonda de Humedad Multicapa**. Mide a diferentes profundidades para que sepas dónde está la raíz bebiendo y ahorres hasta un 30% en riego. \n\n* [Ver Sonda de Humedad](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['npk', 'abono', 'nutrientes', 'fertilizante'],
    response: 'Nuestros **Sensores NPK** miden la concentración de nutrientes en tiempo real. Deja de abonar a ciegas y ajusta la nutrición a la demanda real de tu cultivo. \n\n* [Ver Sensor NPK](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['clima', 'estacion', 'viento', 'helada'],
    response: 'La **Estación Meteorológica Smart Fénix** te avisa de heladas y mide la integral térmica de tu parcela en tiempo real. Máxima precisión climática en tu móvil. \n\n* [Ver Estación Clima](/sensores/clima)',
    link: '/sensores/clima'
  }
];

export const POST: APIRoute = async ({ request }) => {
  let message = "";
  let chatHistory = [];

  try {
    const body = await request.json();
    message = body.message || "";
    chatHistory = body.chatHistory || [];
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const rawMsg = (message || "").toLowerCase();

  // LIMPIEZA AGRESIVA (Solicitada por Senior Developer)
  const rawClean = rawMsg
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quitar tildes
    .replace(/[.,?!¿¡]/g, '') // Quitar puntuación
    .replace(/\b(como|donde|cuando|pero|porque|y|o|el|la|los|las|un|una|que|k|de|mis|mi|a|en|por|con|para|del|al|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre|pues|mira|oye|digamos|sabes)\b/g, '')
    .trim()
    .replace(/\s+/g, ' ');

  // Padding de seguridad para detección por palabras (evita sub-palabras como asco en vasco)
  const cleanMsg = ' ' + rawClean + ' ';

  let foundMatch = null;
  let maxMatches = 0;

  // Lógica de Fuzzy Match Manual: quitar última letra de palabras largas (>5 chars)
  const fuzzyMsg = ' ' + rawClean.split(/\s+/).map((w: any) => w.length > 5 ? w.slice(0, -1) : w).join(' ') + ' ';

  // Lógica de búsqueda INVERSA (Prioridad Alta a los últimos elementos del array técnico)
  for (let i = LOCAL_KNOWLEDGE.length - 1; i >= 0; i--) {
    const item = LOCAL_KNOWLEDGE[i] as any;
    // Normalizamos también las keywords para comparar peras con peras (sin tildes)
    const matchCount = item.keywords.filter((kw: string) => {
      const normalizedKw = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return cleanMsg.includes(normalizedKw) || fuzzyMsg.includes(normalizedKw);
    }).length;

    // QA: Si el mensaje de usuario es muy corto (< 3 letras), ignoramos y vamos a Fallback/Saludo
    if (cleanMsg.trim().length < 3) continue;

    // QA: Si el mensaje es corto (< 15) e impreciso (< 2 matches), solo evitamos si es un bloque muy genérico
    // Eliminado el filtro restrictivo de item.isTechnical que bloqueaba respuestas directas segmentadas

    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      foundMatch = item;
    }
  }

  // SI ENCUENTRA COINCIDENCIA, DEVUELVE INMEDIATAMENTE SIN LLAMAR A LA IA
  if (foundMatch && maxMatches > 0) {
    return new Response(JSON.stringify({ text: foundMatch.response }), { status: 200 });
  }

  // PRIORIDAD 2: RESPALDO POR DEFECTO (FALLBACK MEJORADO)
  return new Response(JSON.stringify({
    text: "No te he pillado, pero seguro que quieres hablar de: \n\n1. El **Cuaderno SIEX**\n2. Los **Sensores** (pinchos)\n3. Hablar con un **Ingeniero**.\n\nSi tienes mucha prisa, llámanos al **+34 621 26 22 86**.\n\n[Ir a Contacto](/contacto)"
  }), { status: 200 });
};