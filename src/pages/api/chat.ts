import type { APIRoute } from 'astro';

const LOCAL_KNOWLEDGE = [
  // BLOQUE SALUDO (Prioridad MÍNIMA, índice 0 - Se revisa de último en loop inverso)
  {
    keywords: ['hola', 'buenas', 'inicio'],
    response: '¡Bienvenido a **Smart Fénix**! Soy tu asesor virtual especializado en **agricultura de precisión**. Puedo informarte sobre:\n\n1. **Cuaderno SIEX** (Normativa y cumplimiento).\n2. **Sensores de Suelo y Planta** (NPK, Humedad, Dendrómetros).\n3. **Soluciones por Cultivo** (Olivo, Almendro, Frutales).\n4. **Identidad y Contacto** (Quiénes somos).\n\n¿Sobre qué tema quieres que hablemos hoy?',
    link: '/'
  },
  // BLOQUE SENSORES (SUELO, PLANTA, CLIMA)
  {
    keywords: ['npk', '8 en 1', 'nutrientes', 'nitrógeno', 'fósforo', 'potasio', 'conductividad', 'salinidad'],
    response: 'Nuestro sensor NPK 8 en 1 es la herramienta definitiva para la nutrición de precisión. Utiliza tecnología de espectroscopía de impedancia para monitorizar niveles de nitrógeno, fósforo y potasio, además de pH y CE. Esto permite al agricultor ajustar el fertirriego a la demanda real de la planta, reduciendo el gasto en fertilizantes hasta un 30% y asegurando el cumplimiento de la normativa de nutrición sostenible de suelos. Puedes verlo en acción aquí: [Catálogo de Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    keywords: ['humedad del suelo', 'fdr', 'tdr', 'tubular', 'multicapa', 'perfil', 'bulbo hídrico'],
    response: 'Medir la humedad superficial no basta. Nuestros **sensores tubulares multicapa** emplean tecnología FDR (Frequency Domain Reflectometry) para medir la humedad, temperatura y conductividad eléctrica a distintas profundidades del perfil del suelo (hasta 1 metro). Esto nos permite visualizar exactamente el desarrollo del bulbo hídrico, optimizando los tiempos de riego, garantizando un gran **ahorro de agua** (entre un 25% y un 40%) y evitando la asfixia radicular. Consulta nuestros [Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    keywords: ['ph', 'acidez', 'hidroponia', 'invernadero', 'ph de alta precision'],
    response: 'El control del pH es crítico para asegurar la biodisponibilidad de los nutrientes y evitar bloqueos radiculares. Nuestro sensor de pH de Alta Precisión ofrece una resolución de 0.01 pH y está fabricado con IP68 sumergible. Es el estándar industrial para hidroponía, agricultura de alto rendimiento y fertirrigación de precisión, donde pequeñas variaciones de acidez suponen pérdidas económicas severas. Conócelo en la sección de [Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    keywords: ['dendrometro', 'tronco', 'tallo', 'contraccion', 'micras', 'estres hidrico', 'crecimiento'],
    response: 'Para una gestión del riego basada en la planta, el dendrómetro de tronco es insuperable. Mide las micro-contracciones diarias del tallo con una precisión milimétrica (1 micra). Al cruzar estos datos con el déficit de presión de vapor, podemos detectar estrés hídrico incipiente días antes de que existan síntomas visuales en el cultivo, permitiendo un Riego Deficitario Controlado (RDC) perfecto y optimizando calibre. Descúbrelos en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    keywords: ['dendrometro de fruto', 'calibre', 'maduracion', 'cosecha', 'manzana', 'melocoton', 'citrico'],
    response: 'El dendrómetro de fruto permite monitorizar la curva de expansión y crecimiento del fruto en tiempo real con una resolución de 10µm. Esta herramienta es vital para fruticultores, ya que cruzar la tasa de crecimiento diario con la curva térmica permite predecir el momento exacto de madurez comercial, maximizando el calibre final y aumentando el retorno por hectárea (ROI). Todos los detalles en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    keywords: ['humectacion foliar', 'mojado de hoja', 'enfermedad fungica', 'hongo', 'mildiu', 'oidio', 'botrytis'],
    response: 'La aparición de patógenos fúngicos está íntimamente ligada a la presencia de agua libre en la epidermis celular. Nuestro sensor de humectación foliar emula la superficie de la hoja para detectar exactamente cuántas horas permanece mojada tras el rocío o la lluvia. Cruzando este dato en nuestro Cuaderno Digital, generamos modelos predictivos para Mildiu u Oídio, ahorrando aplicaciones fitosanitarias innecesarias. Más info en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    keywords: ['clima', 'estacion meteorologica', '8 parametros', 'lorawan', 'precipitacion', 'pluviometro', 'viento', 'radiacion'],
    response: 'La toma de decisiones agrarias arranca con datos microclimáticos precisos. Nuestra estación meteorológica SenseCAP S2120 de 8 parámetros registra temperatura, humedad, presión, radiación solar, precipitación y velocidad/dirección del viento. Con comunicación LoRaWAN (IP66), integra los datos directamente en el Cuaderno Digital para calcular la evapotranspiración (ET0) y ajustar los coeficientes de riego del cultivo, ahorrando costes estructurales masivos. Míralo en [Sensores de Clima](/sensores/clima).',
    link: '/sensores/clima'
  },
  // BLOQUE CUADERNO Y NORMATIVA
  {
    keywords: ['siex', 'real decreto 1054/2022', 'cuaderno general', 'explotacion', 'cumplimiento', 'normativa', 'cuaderno', 'digital', 'registro', 'explotación', 'trámites', 'papeles'],
    response: 'El **Cuaderno Digital Agrícola** responde a la exigencia del **SIEX** y el Real Decreto 1054/2022. Nuestro software está hiperoptimizado para evitar multas de condicionalidad. Genera el registro de tratamientos fitosanitarios y fertilizantes en los plazos legales, bloqueando automáticamente recolecciones si detecta que se vulnera el plazo de seguridad de la materia activa. Es el escudo legal de tu explotación. Conócelo en nuestro [Cuaderno Digital](/cuaderno).',
    link: '/cuaderno'
  },
  {
    keywords: ['dat', 'ropo', 'transporte', 'documento acompañamiento', 'carne aplicador'],
    response: 'La gestión de operarios y mercancías es crítica. Integramos utilidades de Administración Integral como la generación automatizada del DAT (Documento de Acompañamiento al Transporte) para la trazabilidad de la cosecha, así como la validación cruzada con el ROPO (Registro Oficial de Productores y Operadores). Si un operario tiene el carné de aplicador caducado, el sistema bloquea su asignación al tratamiento fitosanitario. Entra en [Cuaderno Digital](/cuaderno) para saber más.',
    link: '/cuaderno'
  },
  {
    keywords: ['pac', 'ecorregimen', 'p3', 'p4', 'siembra directa', 'rotacion', 'carbono', 'ayuda directa'],
    response: 'Para capturar el 23% del presupuesto de ayudas directas de la PAC, debes justificar los Ecorregímenes. Nuestro módulo específico audita el cumplimiento de prácticas como el P3 (Rotación de cultivos con especies mejorantes para aumentar materia orgánica) y el P4 (Siembra Directa). Monitorizamos que el suelo permanezca cubierto el 100% del tiempo para maximizar el secuestro de carbono y la retención hídrica. Toda la información en la [Guía de Ecorregímenes](/cuaderno/guia-pac-ecorregimenes).',
    link: '/cuaderno/guia-pac-ecorregimenes'
  },
  {
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
    keywords: ['estiercol', 'estiercoles', 'purin', 'sandach', 'deyecciones', 'nitratos'], // 'sandach'
    response: 'La normativa de zonas vulnerables a nitratos es implacable. Nuestro módulo de gestión de estiércoles y subproductos SANDACH digitaliza todo el proceso, desde el origen de la deyección animal en granja hasta el reparto agronómico en parcela. Calculamos la dosis máxima legal de Nitrógeno por hectárea y validamos que el plan de abonado orgánico proteja los acuíferos subterráneos. Tienes toda la información organizativa en [Gestión de Estiércoles](/herramientas/estiercoles).',
    link: '/herramientas/estiercoles'
  },
  {
    keywords: ['trazabilidad gps', 'darp', 'gps', 'transporte purines', 'gestion de flotas'],
    response: 'El equipamiento GPS homologado (normativa DARP) es indispensable en el transporte de purines y material orgánico. Facilitamos la instalación de receptores GPS de alta frecuencia que trazan permanentemente el volumen de cisterna, coordenadas de carga/descarga y caudalímetro en tiempo real. Esta telemetría se acopla en el Cuaderno para superar cualquier inspección medioambiental gubernamental de forma automatizada. Infórmate sobre nuestra [Trazabilidad GPS](/herramientas/trazabilidad).',
    link: '/herramientas/trazabilidad'
  },
  // BLOQUE SOLUCIONES POR CULTIVO
  {
    keywords: ['olivar', 'olivo', 'aceite', 'picual', 'almazara', 'rendimiento graso'],
    response: 'El cultivo del Olivar exige optimizar tanto la producción como la lipogénesis (rendimiento graso). Mediante las estaciones climáticas y la telemetría de humedad a 60cm de profundidad (FDR), ejecutamos estrategias de Riego Deficitario Controlado (RDC) antes del envero. Esto ahorra hasta un 35% de dotación hídrica sin comprometer el calibre, incrementando el extractable del aceite y la concentración de polifenoles. Calcula tu ROI en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    keywords: ['almendro', 'pistacho', 'frutos secos', 'leñosos', 'cuajado'],
    response: 'En el Almendro y otros frutos secos de alta rentabilidad, el déficit fenológico es crítico. Utilizando dendrometría de precisión para detectar micro-variaciones del tallo en floración y cuajado, junto con la corrección satelital NDVI, podemos realizar podas selectivas y dosificar el abonado potásico vía fertirriego. El retorno de inversión (ROI) en plantaciones superintensivas es inferior a un año operativo. Mira casos de éxito en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    keywords: ['viñedo', 'viña', 'uva', 'enologia', 'bodega', 'grado brix', 'estres hidrico viña'],
    response: 'En la Viticultura de precisión, el estrés hídrico moderado post-envero es necesario para concentrar azúcares (Grado Brix) y mejorar el perfil antociánico de la uva. Utilizamos nuestro sensor LWP (Leaf Water Potential) y dendrómetros para llevar a la viña al límite fisiológico óptimo, dictaminando automáticamente riegos quirúrgicos y ahorrando costes energéticos severos. Además el cuaderno registra el cuaderno de vendimia exigido por denominaciones de origen. Ve a [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
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
    keywords: ['contacto', 'presupuesto', 'precio', 'coste', 'demo', 'llamar', 'telefono', 'comprar', 'donde', 'cita', 'hablar', 'duda', 'ayuda', 'soporte', 'asistencia', 'oficina', 'dirección'],
    response: 'Dada la hiper-especialización de nuestra tecnología, necesitamos evaluar tu matriz de cultivo y extensión parcelaria para definir un presupuesto y el ROI proyectado. Puedes solicitarnos una demo técnica o volcar tus datos preliminares en el [formulario de contacto](/contacto). Alternativamente, nuestro equipo de ingenieros te atenderá en el **+34 621 26 22 86** de manera inmediata.',
    link: '/contacto'
  },
  // BLOQUE SOLUCIONES POR CULTIVO (MICRONICHOS)
  {
    keywords: ['cereal', 'trigo', 'cebada', 'secano', 'extensivo', 'macollado', 'espigado'],
    response: 'En el cultivo extensivo de cereal de invierno como trigo y cebada, la rentabilidad se juega en el abonado de cobertera. Utilizando imágenes satelitales NDVI y algoritmos propios, generamos mapas de prescripción variable (Variable Rate) para esparcidoras de abono. Detectamos zonas de bajo vigor donde aplicar nitrógeno extra durante el macollado y zonas ricas donde reducir la dosis. Esto elimina el sobrecoste de abono innecesario y homogeniza el rendimiento final de la parcela, reduciendo la factura de fertilizantes en un 20% anual. Mira más en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    keywords: ['maiz', 'cultivo de maiz', 'pivote', 'cobertera', 'nitrogeno', 'evapotranspiracion'],
    response: 'El cultivo del maíz demanda un control hídrico y nutricional milimétrico, especialmente bajo riego por pivote. Instalamos sensores de humedad de suelo a 30cm, 60cm y 90cm para calibrar el tiempo óptimo de rotación del pivote sin incurrir en lixiviación de nitratos por exceso de agua. Sincronizamos estos sensores con la evapotranspiración diaria (ETc) para que aportes exactamente el agua que el cultivo consumió ayer. Esta precisión salva el coste energético del bombeo y previene asfixias radiculares en las etapas iniciales críticas. Revisa los [Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    keywords: ['arroz', 'inundacion', 'salinidad', 'delta', 'marisma', 'arrozal', 'nivel de agua'],
    response: 'La digitalización del arrozal implica una monitorización ininterrumpida de la pauta de inundación y, críticamente, la salinidad acumulada por intrusión marina. Implementamos sensores de conductividad eléctrica (CE) y nivel en columna de agua interconectados por LoRaWAN. El sistema genera alertas instantáneas en tu móvil si el nivel desciende del umbral ecológico o si la concentración de sales amenaza la asimilación de nutrientes de la planta. Previene mermas catastróficas del rendimiento y optimiza el bombeo de agua dulce antes de que los daños sean irreversibles. Más info en [Sensores de Agua](/sensores/agua-nivel).',
    link: '/sensores/agua-nivel'
  },
  {
    keywords: ['tomate de industria', 'tomate', 'horticola intensivo', 'podredumbre apical', 'calcio', 'riego goteo'],
    response: 'En el tomate de industria, las principales pérdidas económicas provienen de desórdenes osmóticos como la podredumbre apical (Blossom End Rot) causada por fluctuaciones hídricas extremas que bloquean el calcio. Desplegamos tensiómetros digitales de alta resolución que garantizan que el bulbo húmedo se mantenga siempre dentro de la capacidad de campo ideal, sin llegar a punto de marchitez ni encharcamiento. Este monitoreo constante del potencial mátrico eleva brutalmente las toneladas útiles exportables al asegurar frutos homogéneos, macizos y sin taras comerciales al momento de cosecha.',
    link: '/sensores/suelo'
  },
  {
    keywords: ['brocoli', 'coliflor', 'brassicas', 'horticola', 'abono de fondo', 'nitrato'],
    response: 'Las brásicas como el brócoli y la coliflor tienen una altísima sensibilidad al lavado de nitrógeno, especialmente en suelos arenosos. Nuestro sistema combina sensores NPK de espectroscopía para mapear la reserva real de nitratos del suelo post-abonado de fondo. Validamos que el fertilizante persista en el rango radicular y no se lixivie por riegos excesivos, evitando sanciones medioambientales en Zonas Vulnerables. Además, programamos alertas de riesgo fúngico basadas en la persistencia de humectación en hoja, protegiendo el vigor de la pella para exportación.',
    link: '/sensores/suelo'
  },
  {
    keywords: ['lechuga', 'iceberg', 'horeca', 'salinidad', 'osmosis', 'estres termico'],
    response: 'La lechuga, de sistema radicular superficial y extrema sensibilidad a sales, exige que el bulbo de riego se controle al centímetro en los primeros 20 centímetros de suelo. Con nuestras sondas FDR compactas, te aseguras de no aplicar agua que migrará por debajo de la zona útil, desperdiciando agua y fertilizante. Simultáneamente, utilizamos radiómetros y sensores de temperatura foliar para recomendar micro-aspersiones climáticas en episodios de ola de calor, mitigando el estrés térmico, frenando el espigado prematuro y salvaguardando la calidad comercial del cultivo. Informate en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    keywords: ['aguacate', 'subtropical', 'axfisia radicular', 'palto', 'oxigeno en suelo', 'phytophthora'],
    response: 'El aguacate es el cultivo más implacable ante la asfixia radicular, que es la antesala directa de los ataques devastadores por Phytophthora cinnamomi. Implementamos exclusivamente sondas de Oxígeno directamente instaladas en el estrato radicular del bulbo húmedo. Estas sondas avisan al agricultor cuando la porosidad del suelo pierde oxigenación por causa de un riego excesivo, cortando de raíz el ambiente anaeróbico que mata al árbol. Monitorizar este gas resulta ser el seguro de vida más barato para salvaguardar tu inversión en fincas de subtropicales.',
    link: '/sensores/suelo'
  },
  {
    keywords: ['mango', 'floracion', 'cuajado mango', 'subtropicales', 'axarquia', 'costa tropical'],
    response: 'Para la rentabilidad del mango, orquestar una floración vigorosa y evitar la caída dramática de frutos en el cuajado son factores determinantes. Usamos estaciones metereológicas avanzadas en el corazón del huerto para registrar la integral térmica (grados acumulados) y modelizar el estrés térmico, complementado con sensores de potencial mátrico. Estas métricas instruyen sistemas de riego de ultra-precisión que mantienen el ecosistema en picos fenológicos óptimos, evitando la abortación masiva de panículas provocada por choques climáticos y garantizando un calibre premium europeo.',
    link: '/sensores/clima'
  },
  {
    keywords: ['arandano', 'frutos rojos', 'berries', 'huelva', 'maceta', 'sustrato', 'conductividad sustrato'],
    response: 'El cultivo del arándano y otros frutos rojos hidropónicos o en sustrato inerte (maceta) no perdona errores de conductividad o pH. Cada décima de grado en la disolución afecta la absorción catiónica. Equipamos las explotaciones de berries con sensores NPK y pH sumergibles de altísima frecuencia, auditando a tiempo real los valores de los drenajes. Así identificamos instantáneamente la acumulación de sales o los bloqueos por antagonismo (como potasio o calcio). La corrección inmediata de la sopa nutritiva se traduce en retornos de inversión espectaculares.',
    link: '/sensores/suelo-ph-precision'
  },
  {
    keywords: ['citrico', 'naranja', 'limon', 'mandarina', 'clemenules', 'verna', 'raja del fruto'],
    response: 'La agricultura citrícola moderna se enfrenta al tremendo desafío de la fisiopatía del temido rajado del fruto ("creasing" y "splitting") derivado de alteraciones bruscas de presión osmótica. Combatimos esto utilizando dendrómetros de fruto para observar en continuo la absorción hídrica del pericarpio y sensores multicapa volumétricos en suelo. Esto genera pautas de riego de alta frecuencia que estabilizan la curva de crecimiento del cítrico sin los típicos estrangulamientos hídricos de mediodía, maximizando la calidad de piel y la rentabilidad comercial general de la cosecha.',
    link: '/sensores/planta-dendrometro-fruto'
  },
  // BLOQUE PLAGAS Y ENFERMEDADES (Sinergia IPMWise)
  {
    keywords: ['mosca del olivo', 'bactrocera oleae', 'picada olivo', 'ipmwise', 'plaga olivo'],
    response: 'Respecto a la temible mosca del olivo (Bactrocera oleae), tratar "a ciegas" es carísimo y fomenta resistencias perjudiciales. En sinergia con IPMWise, nuestra estación meteorológica recolecta datos hiperlocales de humedad y temperatura horaria. Nuestro algoritmo proyecta integral térmica y modeliza la biología larvaria del insecto en tiempo real. En lugar de aplicar insecticida rutinario, nuestro software de Inteligencia Agronómica te envía una notificación predictiva dictaminando, basándose en la integral fenológica exacta, el día preciso y el umbral económico dictaminado para tratar. Esto pulveriza costes reduciendo aplicaciones en más de un 60%.',
    link: '/sinergias/ipmwise'
  },
  {
    keywords: ['prays', 'polilla del olivo', 'prays oleae', 'generacion antofaga', 'carpofaga'],
    response: 'El Prays del olivo exige tratamientos de letalidad absoluta focalizados en las generaciones clave: filófaga (hoja), antófaga (flor) y la crítica carpófaga (fruto). Utilizando tecnología Predictiva Satelital en combinación con los micro-sensores del clima en parcela, establecemos proyecciones matemáticas del vuelo de adultos y la posterior puesta de huevos en el cáliz. El Cuaderno Digital notifica con precisión quirúrgica el momento adecuado donde el uso del Bacillus thuringiensis resulta de mayor efectividad, abatiendo las poblaciones de eclosión temprana y salvando la campaña del olivar sin mermar la certificación ecológica.',
    link: '/sinergias/ipmwise'
  },
  {
    keywords: ['lobesia', 'polilla del racimo', 'viña plaga', 'botrytis viña', 'generacion lobesia'],
    response: 'La Lobesia botrana (Polilla del racimo) es la causante encubierta de las catastróficas epidemias de Botrytis cinerea, cuyas heridas generan focos infecciosos irreversibles en la vid. El software de control biológico IPMWise, alimentado diariamente por nuestra red LoRaWAN climática, calcula las horas-grado acumuladas para decretar la fase temporal de penetración larvaria intra-grano en el racimo. De esta forma, ya sea mediante confusión sexual o formulaciones sintéticas convencionales, logras posicionar el tratamiento en la ventana técnica de máxima eficacia, antes de que el daño arruine los estándares de Denominación de Origen.',
    link: '/sinergias/ipmwise'
  },
  {
    keywords: ['araña roja', 'tetranychus urticae', 'acaros', 'plaga sequia', 'defoliacion'],
    response: 'La Araña roja (Tetranychus urticae) detona invasiones letales precisamente por altas temperaturas asociadas con humedades relativas severamente bajas y déficit hídrico prolongado, originando defoliaciones fulminantes en la explotación. Con inteligencia de estaciones meteorológicas SenseCAP monitoreando el microclima a ras de suelo, nuestro asistente pronostica explosiones poblacionales y las correlaciona con la tensión de humedad foliar detectada. Nos anticipamos al colapso fisiológico antes de presenciar clorosis aguda en tejido verde, indicando aspersiones refrescantes preventivas o el momento óptimo para liberar depredadores controladores (Phytoseiulus persimilis).',
    link: '/sensores/clima-estacion'
  },
  {
    keywords: ['pulgon', 'aphididae', 'negrilla', 'melaza', 'virus planta', 'hormigas'],
    response: 'Las explosiones masivas de pulgón no sólo chupan savia menguando fuertemente el vigor vegetativo; son los grandes transmisores de los temibles virus botánicos y precursores absolutos del hongo negrilla (Fumagina) que bloquea drásticamente la radiación PAR foliar. Analizando con algoritmos predictivos las tasas de multiplicación del afídido versus las condiciones termo-pluviometrícas, nuestra matriz sugiere umbrales de tratamiento temprano focalizado en rebrotes jóvenes. Así logrando contener la colonización con dosis fitosanitarias reducidísimas y conservando el equilibrio trófico natural a lo largo de la campaña entera.',
    link: '/sinergias/ipmwise'
  },
  {
    keywords: ['xylella', 'fastidiosa', 'bacteria olivo', 'seca del olivo', 'chicharrita'],
    response: 'Contra la irreversible Xylella fastidiosa, el control de los insectos vectores transmisores y un confinamiento estricto resultan obligatorios. Como herramientas de bioseguridad suprema, nuestro visor satelital NDVI es capaz de identificar disminuciones dramáticas de turgencia (declinación de clorometria) a nivel localizado muy tempranamente, alertando indirectamente sobre problemas fatales de xilema. Además, este seguimiento se ampara sobre el Cuaderno Digital de Smart Fénix, que verifica con coordenadas GPS geocercadas el trazado seguro de maquinaria, operarios y flotas frente a potenciales inspecciones de Sanidad Vegetal del SEPRONA.',
    link: '/cuaderno'
  },
  {
    keywords: ['verticilosis', 'verticillium', 'marchitez olivar', 'hongo vascular', 'enfermedad raiz'],
    response: 'El Verticillium dahliae destruye producciones al ocluir el sistema vascular de los olivos produciendo marchitez irreversible. Como el hongo sobrevive e infecta primordialmente mediante las humedades residuales del suelo e inóculos microscópicos en raíces adyacentes, limitamos drásticamente el riesgo empleando Sensores Multicapa Tubulares; evitamos saturación patológica prolongada del perfil (encharcamiento), determinando que el agua nunca se acumule estacionalmente. Es el método profiláctico agronómico absoluto para disminuir dramáticamente las probabilidades de infección fúngica de la raíz en las costosas fincas de olivares modernos en plantación superintensiva.',
    link: '/sensores/suelo-tubular'
  },
  {
    keywords: ['repilo', 'spilocaea oleaginea', 'hongo hoja', 'cobre olivo', 'defoliacion olivo'],
    response: 'El Repilo (Spilocaea oleaginea) produce defoliaciones severas que bloquean la inducción floral del año venidero, quebrando la productividad agrícola cíclica del productor. Empleamos el sensor revolucionario de Humectación Foliar Infrarroja y el control pluviométrico de precipitación acumulada, simulando fielmente la retención hídrica real en el epicarpio de la aceituna. Tras episodios intensos de rocío matinal o densas brumas continuadas en primavera, logramos determinar algorítmicamente exactamente si la espora logró germinar, programando rectas precisas en Cuaderno utilizando óxidos cuprosos únicamente cuando nos indique el mapa de riesgo.',
    link: '/sensores/planta-hoja-humectacion'
  },
  // BLOQUE CASUÍSTICA LEGAL, PROBLEMAS Y MULTAS SIEX
  {
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
    keywords: ['no entiendo', 'borrador', 'carga masiva', 'excel siex', 'lento software', 'caos administrativo'],
    response: 'El pánico inmanejable por los borradores fallidos inter-autonómicos, colapsos con las entidades Colaboradoras y el picado infinito de excels monstruosos se evapora contundentemente con nosotros. Acabamos de programar sistemas automatizados que liquidan tus angustias de la burocracia paralizante. Nuestro portal te permite volcar una carga digital, y entonces, de forma invisible, la API cruza tus hectáreas al ecosistema informático oficial nacional, detectando disyuntivas reglamentarias previas y confeccionado prolijas memorias técnicas validadas para presentarlas directamente a Agricultura de tu Junta. Nosotros resolvemos el 100% de la carga del agricultor.',
    link: '/soluciones/tecnicos'
  },
  // BLOQUE HARDWARE MILIMÉTRICO HIPER-ESPECÍFICO
  {
    keywords: ['sonda oxigeno', 'oxigeno en suelo', 'asfixia radicular', 'o2 sustrato', 'ahogo raiz'],
    response: 'A nivel microscópico, las raíces exclusivamente asimilan cationes y aniones fertilizantes cuando "respiran" oxígeno disuelto en los áridos capilares (utilizando la cadena de ciclo de Krebs). Si aniquilas y colapsas la porosidad con el aporte de goteo en exceso, originas asfixia, matando todo cultivo arbóreo intensivo. Por ello hemos introducido exclusivas Sondas de Oxígeno subterráneo, implantadas a 30cm del bulbo hídrico emitiendo concentración volumétrica de gas en porcentaje. Preservas siempre el ambiente aeróbico de los pelos absorbentes optimizando al máximo tus fertilizantes N-P-K de cobertera inyectados.',
    link: '/sensores/suelo-oxigeno'
  },
  {
    keywords: ['co2 suelo', 'dioxido de carbono suelo', 'respiracion raiz', 'microorganismos suelo'],
    response: 'El secuestro de carbono es el epicentro mundial de las Políticas Verdes Modernas y certifica tu explotación, pero irónicamente las tierras yermadas han perdido vitalidad microbiológica tras años de glifosato. Instalamos pioneramente Detectores de Flujo Continuo de CO2 Edáfico (Sonda CO2 Suelo). Medir científicamente en continuo el eflujo microscópico liberado constata paramétricamente la carga y salud microbiana y rizosférica del lecho sembrado, posibilitando a los agrónomos cobrar generosas bonificaciones por esquemas y créditos orgánicos del nuevo Carbon Farming que paga con gran éxito la nueva PAC.',
    link: '/sensores/suelo-co2'
  },
  {
    keywords: ['par', 'fotosintesis', 'radiacion par', 'luz planta', 'mallas de sombreo', 'lux'],
    response: 'Asumir empíricamente el espectro solar es obsoleto, la energía del sol únicamente activa la bioenzimática en un rango medible asimilable de longitud lumínica. Distribuimos potentes Sensores de Radiación PAR (Radiación Fotosintéticamente Activa) compuestos con espectrómetros cuánticos ultra-frecuencia que revelan la incidencia fotónica real que acciona los meristemos. Dominando milimetricamente esta métrica logras decidir arquitectónicamente el cierre robótico automatizado de techos mallas en cultivo indoor e invernadero sofisticado controlando a antojo el letargo vegetativo para salvarte de quemaduras y abrasamiento oxidativos estivales crónicos en frutos primor.',
    link: '/sensores/clima-estacion'
  },
  {
    keywords: ['pluviometro', 'precipitacion resolucion', 'milimetros', 'lluvia caida', 'cazoleta', 'balance hidrico'],
    response: 'Delegar en pronósticos interpolados a docenas de kilómetros desata la ruina de los cálculos de fertirrigación. Las fincas aisladas poseen un micro-clima intrínseco. Distribuimos eficientes Pluviómetros Aerodinámicos High-Resolution con un calibre magnético de cazoleta oscilante extrema (0.1 mm), que captan escrupulosamente los rocíos de condensación minúscula matutina y transfiere a nuestra red el balance final. Cada centímetro cúbico que es almacenado es sumado activamente en la matriz agronómica, cortando la electro-válvula y bloqueando automáticamente dispendios tarifarios imperdonables de caudales hidroeléctricos de reserva. Amortizable de por vida.',
    link: '/sensores/clima-estacion'
  },
  {
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
    keywords: ['fuga', 'presión tubería', 'rotura', 'riego fallo', 'pérdida agua'],
    response: 'Nuestro sistema GIS monitoriza la red de riego. Si detecta una caída de presión o un exceso de flujo respecto al caudal nominal del sector, el sistema geolocaliza el tramo afectado y te envía una alarma al móvil para actuar antes de que la inundación o la falta de riego causen daños. Más info: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  // BLOQUE DUDAS FRECUENTES
  {
    keywords: ['obligatorio', 'ley', 'tengo que', 'normativa', 'siex', 'obligatoriedad'],
    response: 'El Cuaderno Digital (SIEX) es estrictamente obligatorio según el RD 1054/2022. No llevarlo al día implica sanciones de condicionalidad y el riesgo de perder los pagos de Ecorregímenes de la PAC. Smart Fénix actúa como tu escudo legal, automatizando el registro para que cumplas la ley sin carga administrativa. Info legal: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
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
    keywords: ['sensor', 'sensores', 'humedad', 'suelo', 'npk', 'fdr', 'aparatos', 'medidores', 'tecnología', 'precisión', 'herramientas', 'maquinaria'],
    response: 'Nuestros sensores de precisión (NPK, humedad volumétrica multicapa, dendrómetros) miden exactamente lo que la planta necesita para que optimices costes de riego y fertilizante desde el primer día. Descúbrelos: [Catálogo de Sensores](/sensores)',
    link: '/sensores/suelo'
  },
  {
    keywords: ['normativa', 'ley', 'obligatorio', 'siex', 'boe', 'regla'],
    response: 'El **Cuaderno Digital (SIEX)** es estrictamente obligatorio según el RD 1054/2022. No llevarlo al día implica severas sanciones de condicionalidad. Actuamos como tu escudo legal automatizando el registro completo. Info legal: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  // BLOQUE: IDENTIDAD (¿Qué es esta página?)
  {
    keywords: ['trata', 'pagina', 'web', 'sitio', 'smart fenix', 'quienes sois', 'que es esto', 'empresa', 'agroai'],
    response: '**Smart Fénix** es una plataforma de Inteligencia Agronómica de alto rendimiento. Nos dedicamos a digitalizar explotaciones mediante sensores de precisión (suelo, planta y clima) y un **Cuaderno Digital (SIEX)** automatizado. Nuestro objetivo es que el agricultor tome decisiones basadas en datos reales para maximizar su producción y cumplir con la normativa sin esfuerzo manual.',
    link: '/'
  },
  // BLOQUE: ACCESO Y REGISTRO
  {
    keywords: ['accedo', 'entrar', 'login', 'registro', 'cuenta', 'conectar', 'plataforma', 'smart agro'],
    response: 'Para acceder a la plataforma de gestión **Smart Agro** y visualizar los datos de tus sensores o completar tu **Cuaderno SIEX**, utiliza el botón de "Acceso Clientes" en el menú superior. Si aún no tienes credenciales, contacta con nuestro equipo técnico para la instalación de los dispositivos y el alta en el sistema: [Contactar con un Ingeniero](/contacto)',
    link: '/contacto'
  },
  // BLOQUE: AYUDAS Y SUBVENCIONES
  {
    keywords: ['ayuda', 'subvencion', 'fondos', 'dinero', 'financiacion', 'gratis', 'ayudas'],
    response: 'Existen diversas líneas de apoyo para la digitalización agraria. Aunque nos centramos en la ingeniería técnica, asesoramos a nuestros clientes sobre cómo nuestras herramientas encajan en planes de mejora y modernización de regadíos. Si buscas financiación para instalar sensores o el cuaderno, hablemos para ver qué convocatorias actuales se adaptan a tu finca: +34 621 26 22 86 o en [Solicitar Información](/contacto).',
    link: '/contacto'
  },
  // BLOQUE: BLOG Y ACTUALIDAD
  {
    keywords: ['blog', 'noticias', 'actualidad', 'leer', 'articulos', 'novedades'],
    response: 'En nuestra Hemeroteca Agro-Tech publicamos guías sobre la normativa **SIEX**, análisis de cultivos y comparativas de sensores. Es el sitio ideal para estar al día de las exigencias del MAPA y las nuevas tecnologías de riego. [Ver Hemeroteca Técnica](/blog)',
    link: '/blog'
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

  // Limpieza agresiva de signos de puntuación e interrogación
  let cleanMsg = rawMsg.replace(/[.,!?¿¡]/g, '');

  // Limpieza de preposiciones, artículos y stopwords sueltas para flexibilizar la búsqueda
  const stopWordsRegex = /\b(de|la|el|un|una|que|como|mis|mi|y|a|en|por|con|para|los|las|del|al|unos|unas|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre)\b/g;
  cleanMsg = cleanMsg.replace(stopWordsRegex, ' ');

  // Limpiar espacios múltiples generados y preparar los bordes
  cleanMsg = ' ' + cleanMsg.replace(/\s+/g, ' ').trim() + ' ';

  let foundMatch = null;
  let maxMatches = 0;

  // Lógica de búsqueda INVERSA (Prioridad Alta a los últimos elementos del array técnico)
  for (let i = LOCAL_KNOWLEDGE.length - 1; i >= 0; i--) {
    const item = LOCAL_KNOWLEDGE[i];
    const matchCount = item.keywords.filter(kw => cleanMsg.includes(kw)).length;
    if (matchCount > maxMatches) {
      maxMatches = matchCount;
      foundMatch = item;
    }
  }

  // SI ENCUENTRA COINCIDENCIA, DEVUELVE INMEDIATAMENTE SIN LLAMAR A LA IA
  if (foundMatch && maxMatches > 0) {
    return new Response(JSON.stringify({ text: foundMatch.response }), { status: 200 });
  }

  // PRIORIDAD 2: RESPALDO POR DEFECTO (ELIMINADA LA DEPENDENCIA DE IA EXTERNA)
  return new Response(JSON.stringify({
    text: "No entiendo esa consulta. ¿Te interesa hablar sobre:\n\n1. **Identidad** (Quiénes somos).\n2. **Sensores de Precisión**.\n3. **Normativa SIEX**.\n4. Hablar con un Ingeniero en la sección de [Contacto](/contacto)?"
  }), { status: 200 });
};