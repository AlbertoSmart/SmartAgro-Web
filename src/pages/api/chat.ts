import type { APIRoute } from 'astro';

const LOCAL_KNOWLEDGE = [
  {
    keywords: [],
    response: '¡Bienvenido a **Smart Fénix**! Soy tu asesor virtual especializado en **agricultura de precisión**. Puedo informarte sobre:\n\n1. **Cuaderno SIEX** (Normativa y cumplimiento).\n\n2. **Sensores de Suelo y Planta** (NPK, Humedad, Dendrómetros).\n\n3. **Soluciones por Cultivo** (Olivo, Almendro, Frutales).\n\n4. **Identidad y Contacto** (Quiénes somos).\n\n¿Sobre qué tema quieres que hablemos hoy? [Ver Servicios](/soluciones/agricultores)',
    link: '/'
  },
  {
    isTechnical: true,
    keywords: ['chao', 'nos vemos', 'luego hablo', 'me voy', 'buen dia'],
    response: '¡Que tengas buena jornada! El campo no descansa, pero nosotros estamos aquí para que tú sí puedas hacerlo un poco más.\n\nSi te surge cualquier duda mientras estás en la finca, vuelve por aquí o pega un toque al equipo. ¡Hasta la próxima! 👋\n\n* [Dejar una consulta técnica](/contacto)',
    link: '/contacto'
  },
  {
    keywords: ['como va eso', 'ey', 'como estais', 'quien hay'],
    response: '¡Buenas! Aquí estamos, al pie del surco digital. 👋 \n\n¿Cómo va la faena hoy? ¿En qué te puedo echar un cable para que la jornada sea más ligera? \n\n* [Ver soluciones técnicas](/soluciones/agricultores)\n\n* [Hablar con un ingeniero](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: [],
    response: '¡Recibido! 🚜 \n\nSi cambias de opinión o te surge cualquier duda mientras estás en la linde o en el almacén, aquí me tienes. ¡A por la jornada!',
    link: '/'
  },
  {
    keywords: ['me parece bien', 'de acuerdo', 'entendido', 'comprendo'],
    response: 'Me alegra que te sirva la información. 👍\n\n¿Quieres que profundicemos en algún detalle técnico de eso o prefieres que veamos otro tema de tu finca?\n\n* [Ver más sobre este tema](/soluciones/agricultores)\n\n* [Volver al inicio](/)',
    link: '/'
  },
  {
    keywords: ['gracias mil', 'agradecido', 'buen trabajo', 'crack', 'util', 'me gusta', 'perfecto', 'genial', 'de nada', 'un placer', 'atiende bien'],
    response: '¡De nada! Es un placer ver que la tecnología te sirve de ayuda en el día a día. 🚜✨\n\nEn Smart Fénix nos apasiona que el campo sea más sencillo y rentable. Si necesitas profundizar en algún dato o que miremos algo juntos, ya sabes dónde encontrarme.\n\n**¿Seguimos con la faena?**\n\n* [Ver mis sensores](/sensores)\n\n* [Consultar el SIEX](/cuaderno)\n\n* [Hablar con el equipo](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['pincho', 'tierra', 'hoyo', 'hincar', 'clavo', 'estacion', 'barrena', 'perforar', 'profundidad', 'raices', 'piedra', 'duro'],
    response: 'No te preocupes por la instalación; no tienes que tocar un cable. 🛠️ \n\nNosotros vamos a tu finca, hacemos el agujero con barrena técnica para no estropear el terreno y dejamos el pincho (sensor) midiendo en el acto. Si la tierra tiene piedra o está dura como el hormigón, llevamos maquinaria para dejarlo perfecto. \n\n* [Ver proceso de instalación](/servicios/instalacion)\n\n* [Solicitar visita a mi finca](/contacto)',
    link: '/servicios/instalacion'
  },
  {
    isTechnical: true,
    keywords: ['dendrometro de fruto', 'calibre', 'maduracion', 'cosecha'],
    response: 'El **dendrómetro de fruto** permite monitorizar la curva de expansión y crecimiento del fruto en tiempo real con una resolución de 10µm.\n\nEsta herramienta es vital para fruticultores, ya que permite predecir el momento exacto de madurez comercial y maximizar el calibre final.\n\n[Ver Sensores de Planta](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['humectacion foliar', 'mojado de hoja', 'enfermedad fungica'],
    response: 'La aparición de patógenos fúngicos está íntimamente ligada a la presencia de agua libre en la epidermis celular. Nuestro sensor de humectación foliar emula la superficie de la hoja para detectar exactamente cuántas horas permanece mojada tras el rocío o la lluvia. Cruzando este dato en nuestro Cuaderno Digital, generamos modelos predictivos para Mildiu u Oídio, ahorrando aplicaciones fitosanitarias innecesarias. Más info en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['prescripcion digital', 'variable rate', 'mapa de aplicacion', 'ndvi', 'satelite', 'satélite'],
    response: 'A través de nuestro visor GIS, cargamos imágenes satelitales con resolución semanal de índices como el NDVI. Estas capas permiten identificar la variabilidad del vigor vegetativo intra-parcela y generar mapas de aplicación de tasa variable (Variable Rate). Esta receta se transfiere al procesador del tractor, permitiendo realizar prescriptiva digital, lo que supone aplicar el fitosanitario sólo donde hay masa foliar, logrando hasta un 40% de ahorro en insumos. [Más sobre prescriptiva](/herramientas/prescripcion).',
    link: '/herramientas/prescripcion'
  },
  {
    isTechnical: true,
    keywords: ['fieldbee', 'autoguiado', 'gps tractor', 'isobus', 'precision tractor'],
    response: 'La rentabilidad en campo requiere precisión tracto-mecánica. A través de nuestra sinergia con FieldBee, proveemos sistemas de autoguiado GPS y volantes motorizados con corrección RTK (2 cm de precisión). La vinculación directa con nuestros mapas GIS de prescripción genera aplicaciones de herbicidas y abonos a nivel sub-parcelario compatibles con conectividad ISOBUS, evitando solapamientos y reduciendo un 15% el coste de insumos químicos. Explóralo en [Sinergia FieldBee](/sinergias/fieldbee).',
    link: '/sinergias/fieldbee'
  },
  {
    isTechnical: true,
    keywords: ['plagas', 'manejo integrado', 'umbral economico', 'tratamiento fungicida'],
    response: 'Para el Manejo Integrado de Plagas (MIP), nos aliamos con IPMWise. El sistema integra en tiempo real los datos algorítmicos de nuestras Estaciones Meteorológicas con la biología y ciclo vital de patógenos e insectos. Determinamos umbrales económicos de daños y enviamos prescripciones de tratamiento únicamente cuando el riesgo sanitario supera el coste de aplicación, protegiendo tanto el ecosistema como el margen bruto de la cosecha. Toda la información en [Sinergia IPMWise](/sinergias/ipmwise).',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['consejo ingenieros', 'colegio oficial', 'certificacion', 'peritaje'],
    response: 'La ingeniería agronómica es la base dogmática de Smart Fénix. Nuestra alianza oficial con el Consejo de Ingenieros Agrónomos nos permite ofrecer peritajes de daños con máxima validez legal, planes de viabilidad económica certificados para integraciones en expedientes agro-bancarios y avales técnicos robustos frente a posibles inspecciones y contenciosos derivados del uso de la PAC. Un respaldo profesional inigualable. Conoce la alianza en [Consejo de Ingenieros Agrónomos](/sinergias/consejo).',
    link: '/sinergias/consejo'
  },
  {
    isTechnical: true,
    keywords: [],
    response: 'Si necesitas hablar con nuestro equipo técnico o con un responsable, estamos a tu disposición.\n\nNo es necesario que quieras comprar nada; estamos aquí para resolver tus dudas técnicas o ayudarte con el funcionamiento de la plataforma.\n\n* Teléfono Directo: +34 621 26 22 86\n* Formulario de Soporte: [Escríbenos aquí](/contacto)\n\nTe atenderá un ingeniero agrónomo en menos de 24 horas.',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['axfisia radicular'],
    response: 'El **aguacate** es el cultivo más implacable ante la asfixia radicular, antesala de la Phytophthora. Implementamos sondas de Oxígeno directamente en el estrato radicular.\n\nEstas sondas avisan cuando la porosidad del suelo pierde oxigenación, cortando de raíz el ambiente anaeróbico que mata al árbol.\n\n[Proteger mi Cultivo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['error en el sigpac', 'coeficiente incorrecto', 'declaracion pac error', 'superficie erronea'],
    response: 'Las discordancias topológicas entre parcelarios reales y la base institucional SIGPAC desembocan en multas punitivas masivas y la impugnación total de los expedientes de Ayuda Base Renta. Cuando un agricultor reporta graves problemas de coeficiente de admisibilidad de pastos excluidos o superficie de labranza usurpada, interviene obligatoriamente la Inteligencia Artificial del Visor satelital incorporada de Cuaderno. Generamos a un ritmo de procesador y en minutos archivos técnicos GIS (Shapefile) justificados documentales y periciales matemáticamente para forzar la rectificación ante el servicio técnico territorial. Obtienes un cobro europeo absolutamente íntegro.',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['junta de andalucía', 'sur', 'olivar andaluz'],
    response: 'Para gestionar el CUE en Andalucía es obligatorio el REAFA. Debes tramitar las autorizaciones mediante el Anexo IV de la Orden de 27 de octubre de 2019. Tienes el modelo PDF cumplimentable y el acceso a la sede electrónica en nuestro directorio. Asistencia oficial: 900 878 525. Consulta los detalles aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: [],
    response: 'En Aragón, el trámite se realiza a través del Procedimiento 9931 para entidades habilitadas. Es vital estar registrado en el REA del Gobierno de Aragón para acceder al CUE. Disponemos de manuales de apoyo para la inscripción. Contacto oficial: reacue@aragon.es. Toda la info en: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['reacyl', 'cyl'],
    response: 'Castilla y León utiliza el sistema REACYL. El acceso se realiza mediante la aplicación específica de la Junta de CyL. Es obligatorio el modelo de autorización de entidad por parte del titular. Para consultas técnicas oficiales: cuecyl@jcyl.es. Mira los enlaces directos aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['castilla-la mancha', 'clm'],
    response: 'En Castilla-La Mancha, el acceso de los agricultores se centraliza en el registro de explotaciones de la SGA. El sistema CUE-CLM requiere validación previa de la condición de entidad habilitada. Contacto de la Consejería mediante su formulario oficial en nuestro directorio: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['vlc', 'gva'],
    response: 'La Generalitat Valenciana exige la inscripción en el REGEPA y la declaración responsable de habilitación para el CUE. El soporte oficial se gestiona en cue@gva.es. Tienes los trámites de alta y modelos de seguridad aquí: [Directorio de Comunidades Autónomas](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['seguridad', 'valla', 'geofencing', 'vigilancia', 'alarma'],
    response: 'Protegemos tus activos mediante Geofencing (vallas virtuales). Si un tractor o sensor sale del perímetro marcado fuera del horario laboral, recibes una alerta de Nivel 1. Además, nuestras cámaras térmicas con Edge Computing distinguen entre fauna y personas, eliminando falsas alarmas. Detalles en: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['nivel freático', 'agua pozo'],
    response: 'Monitorizamos pozos en tiempo real mediante sensores de presión y caudalímetros ultrasónicos. Detectamos caídas del nivel freático o desviaciones del caudal nominal que podrían indicar agotamiento o avería inminente de la bomba, evitando el trabajo en seco. Control hídrico total en: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['asistencia', 'ayuda', 'ayudar', 'ayudame', 'soporte'],
    response: 'Si necesitas ayuda con tu explotación, nuestro equipo de Ingenieros Agrónomos puede asesorarte de forma personalizada. No somos un servicio genérico; analizamos tus datos de suelo, clima y planta para optimizar tu riego y nutrición. Para una consultoría técnica o dudas sobre el SIEX, lo mejor es que hablemos: +34 621 26 22 86 o escríbenos en [Contactar con un Ingeniero](/contacto).',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['siembra', 'que hago', 'cultivos'],
    response: 'Para optimizar tus cultivos (olivar, almendro, frutales, etc.), utilizamos tecnología de precisión que mide lo que la planta realmente necesita. Si tienes problemas de rendimiento o quieres lograr un masivo **ahorro de agua** y abono, consulta nuestras [Soluciones para Agricultores](/soluciones/agricultores) o solicita una demo técnica de nuestros sensores de suelo y planta.',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['que haces', 'para que sirves', 'funcionalidad'],
    response: 'Soy el experto virtual de **Smart Fénix**. Mi misión es ayudarte a digitalizar tu finca: gestiono tu **Cuaderno SIEX** para evitar multas y conecto tus cultivos con sensores de precisión para lograr un importante **ahorro de agua** y abono. ¿Qué te interesa más: la parte legal o la tecnología de campo?',
    link: '/'
  },
  {
    isTechnical: true,
    keywords: ['sensores', 'aparatos', 'medidores', 'tecnología', 'herramientas', 'maquinaria', 'zensor', 'sencor', 'receptor'],
    response: 'Nuestros sensores de precisión (**NPK**, humedad volumétrica multicapa, dendrómetros) miden exactamente lo que la planta necesita para que optimices costes de riego y fertilizante desde el primer día.\n\n[Catálogo de Sensores de Precisión](/sensores)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['trata', 'web', 'sitio', 'smart fenix', 'que es esto', 'empresa', 'agroai'],
    response: 'Smart Fénix es una herramienta de apoyo al agricultor. Digitalizamos los datos de tu campo (suelo, clima y planta) para que tengas toda la información en un solo lugar y cumplas con el Cuaderno SIEX de forma sencilla.\n\nEs tecnología hecha por ingenieros para facilitar el trabajo diario en el campo.\n\n[Conocer más sobre nosotros](/)',
    link: '/'
  },
  {
    isTechnical: true,
    keywords: ['entro', 'accedo', 'acceder', 'acceso'],
    response: 'Para entrar en la plataforma **SmartAgro**, usa el botón **Acceder a SmartAgro** arriba en el menú. Si no tienes claves, escríbenos al WhatsApp **+34 621 26 22 86**.',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['ayudas'],
    response: 'Existen diversas líneas de apoyo para la digitalización agraria. Aunque nos centramos en la ingeniería técnica, asesoramos a nuestros clientes sobre cómo nuestras herramientas encajan en planes de mejora y modernización de regadíos. Si buscas financiación para instalar sensores o el cuaderno, hablemos para ver qué convocatorias actuales se adaptan a tu finca: +34 621 26 22 86 o en [Solicitar Información](/contacto).',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['que dices', 'explicate', 'no comprendo', 'que me quieres decir', 'perdona'],
    response: 'Siento haberme puesto demasiado técnico, a veces a los ingenieros se nos va la mano con los datos. 😅\n\nEn resumen: te ayudamos a que tu finca sea más fácil de gestionar y más rentable.\n\n¿Qué parte te ha liado más? ¿El tema de los sensores o lo del papeleo del SIEX?\n\n* [Ver Resumen de Servicios](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['inutil', 'inútil', 'estupido', 'estúpido', 'cabron', 'cabrón', 'gilipollas', 'basura', 'joder', 'puto', 'tonto', 'imbecil', 'imbécil', 'capullo', 'idiota', 'payaso', 'chorizos', 'mamon', 'mamón', 'pringao', 'subnormal', 'pendejo', 'gonorrea', 'hdp', 'mentira', 'engaño', 'pesado', 'callate', 'cállate', 'ijoputa', 'maricon', 'zorra', 'mongolo', 'atontao', 'paleto', 'cateto', 'ignorante', 'asqueroso', 'carajo', 'huevon', 'inutiles', 'inútiles', 'estupidos', 'cabrones', 'gilipollas', 'mierdas', 'basuras', 'jodete', 'putos', 'tontos', 'imbeciles', 'capullos', 'idiotas', 'payasos', 'estafadores', 'timadores', 'robos', 'rateros', 'chorizos', 'mamones', 'pringaos', 'subnormales', 'pendejos', 'gonorreas', 'mentiroso', 'mentirosos', 'engaños', 'asquerosos', 'pesados', 'callame', 'ijoputes', 'maricones', 'zorras', 'mongolos', 'atontados', 'paletos', 'catetos', 'ignorantes', 'carajos', 'cojonazos', 'huevones', 'pajuelo', 'majadero', 'zote', 'panoli', 'bobon', 'bobalicon', 'lerdo', 'besugo', 'cenutrio', 'alcornoque', 'zopenco', 'tarugo', 'zoquete', 'zopencos', 'lerdos', 'panolis', 'bobones', 'cenutrios', 'tarugos', 'gaznapira', 'gaznapiro', 'cazurro', 'cazurros', 'pelagatos', 'mequetrefe', 'mindundi', 'pocacosa', 'estulto', 'necio', 'baboso', 'ruin', 'mezquino', 'miserable', 'desgraciado', 'desgraciados', 'canalla', 'golfo', 'jeta', 'jetas', 'sinvergueza', 'sinvergueenzas', 'mangante', 'ratero', 'ladron', 'ladrones', 'caradura', 'perro', 'perros', 'cerdo', 'cerdos', 'marrano', 'marranos', 'puerco', 'puercos', 'desfachatado', 'deslenguado', 'bocachancla', 'bocazas', 'charlatan', 'embaucador', 'farsante', 'falsante', 'fariseo', 'hipocrita', 'basurero', 'asco de pagina', 'mierda de bot', 'puto bot', 'bot de mierda', 'bot inutil'],
    response: 'Insultar al bot no te va a quitar las multas del Ministerio ni te va a arreglar el riego. 🌾\n\nAquí venimos a trabajar. ¿En qué puedo ayudarte de verdad?\n\n* [Evitar Sanciones SIEX](/cuaderno)\n\n* [Asesoría Técnica](/contacto)',
  },
  {
    isTechnical: true,
    keywords: ['refran', 'dicho', 'marzo', 'abril', 'mayo'],
    response: 'Como decimos por aquí: Agua de mayo, pan para todo el año. 🌾 \n\nPero como el tiempo está loco, mejor que el agua de mayo la controlen nuestros Sensores de Clima. ¿Cómo va la previsión por tu zona? ¿Hay ganas de que llueva?',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['llamame', 'telefono', 'hablar', 'persona', 'humano', 'jefe', 'encargado', 'llamar', 'contacto', 'ingeniero', 'agronomo'],
    response: 'Para hablar con una persona de carne y hueso, aquí tienes línea directa. 📞 \n\n* Teléfono: +34 621 26 22 86\n\n* Soporte: [Formulario de Contacto](/contacto)\n\nLlámanos y un ingeniero te atenderá sin rodeos ni máquinas.',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['subvencion', 'kit digital', 'fondos', 'europa', 'financiacion', 'cuota', 'fondos europeos'],
    response: 'La digitalización del campo está subvencionada. 🇪🇺 \n\nMuchos de nuestros equipos entran en el Kit Digital o planes de modernización de regadíos. Te asesoramos para que la inversión te salga lo más rentable posible. \n\n* [Consultar Ayudas Disponibles](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['tractor', 'aperos', 'atomizador', 'cosechadora', 'vibrador', 'paraguas', 'golpe', 'romper', 'pisar', 'maquina', 'acero'],
    response: 'Nuestros equipos están hechos para el campo, no para una oficina. 💪 \n\nLas sondas van enterradas y los nodos protegidos para que no estorben al pasar con el tractor o el paraguas. Son "hierros" duros diseñados para aguantar sol, barro y vibraciones. \n\n* [Ver Robustez de los Equipos](/servicios/instalacion)',
    link: '/servicios/instalacion'
  },
  {
    isTechnical: true,
    keywords: ['sede', 'oficina', 'mapa', 'ubicacion', 'central', 'instaladores', 'venis', 'venis a mi zona', 'teneis tecnico'],
    response: 'Estamos donde tú estés. 📍 \n\nSomos una ingeniería española con técnicos en las principales zonas agrarias. Instalamos en toda la península y damos soporte presencial. No somos una empresa de internet que desaparece; estamos a pie de surco. \n\n* [Ver Red de Soporte](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['no llueve', 'sequia', 'hace calor', 'se seca todo', 'no cae una gota', 'poca agua', 'mucho sol'],
    response: 'El tiempo no perdona y este año está apretando de lo lindo. ☀️🔥 \n\nPrecisamente porque el agua está escasa y el sol no da tregua, nuestras sondas son más necesarias que nunca: para que ni una gota de la que riegues se pierda y la planta aguante el tirón. \n\n¿Cómo está la tierra por tu zona? ¿Está muy apretada?',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['politicos', 'gobierno', 'ministerio', 'nos tienen fritos', 'vaya tela', 'siempre igual', 'solo quieren dinero', 'estoy harto', 'hasta los cojones'],
    response: 'Te entiendo perfectamente. Entre papeles, leyes nuevas y exigencias del Ministerio, parece que el agricultor tiene que ser más administrativo que tractorista. 📋🚜 \n\nNosotros nacimos para eso: para que el Cuaderno SIEX se rellene casi solo y te dejen trabajar en paz, que es lo que sabes hacer. ¿Te ayudamos con el papeleo?',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['eres un robot', 'eres persona', 'quien eres', 'con quien hablo', 'eres real', 'eres maquina', 'chatgpt'],
    response: 'Soy el asistente inteligente de Smart Fénix. No como ni duermo, pero sé de sensores y de la normativa SIEX casi más que mis creadores (que son ingenieros agrónomos). 🤖🌾 \n\nSi te cansas de hablar conmigo y quieres a una persona de carne y hueso, solo tienes que pedirlo: [Hablar con un humano](/contacto).',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['com va', 'bon dia', 'vull saber', 'ajuda', 'ajuda tecnica', 'el meu camp', 'precisio', 'quadern de camp', 'llibre dexplotacio', 'catalunya', 'girona', 'lleida', 'tarragona', 'barcelona', 'reg'],
    response: 'Benvingut a Smart Fénix! Sóc el teu assessor virtual d’agricultura de precisió. T’ajudem a orquestrar el teu **Quadern de Camp** (CUE/SIEX) i instal·lem sensors FDR per a l’estalvi massiu d’aigua a Catalunya.\n\nPodem parlar sobre:\n1. **Gestió del Reg** (Humedat multicapa).\n2. **Burocràcia SIEX** (REAFA i tràmits autonòmics).\n3. **Sanitat Vegatal** (Models de plaga per a l’olivera i vinya).\n\nCom puc ajudar la teva explotació avui?\n* [Accés al Portal CUE Catalunya](/cuaderno/comunidades/cataluna)\n* [Saber més sobre sensors](/sensores)',
    link: '/cuaderno/comunidades/cataluna'
  },
  {
    isTechnical: true,
    keywords: ['boas', 'ola', 'axuda', 'axuda tecnica', 'o meu campo', 'precisión', 'caderno de campo', 'xeaga', 'coruña', 'lugo', 'orense', 'pontevedra', 'rego', 'millo'],
    response: 'Benvido a Smart Fénix! Son o teu asesor virtual de agricultura de precisión en Galicia. Axudamos coa xestión do caderno **XEAGA** e optimizamos o rego en millo, viñedo e horta con tecnoloxía multiparamétrica.\n\nServizos destacados en Galicia:\n1. **Control de Nutrientes (NPK)**.\n2. **Tramitación Xeaga** (Documentación CUE).\n3. **Alertas de Mildiu** (Sonda de humectación foliar).\n\nEn que che podo botar unha man na túa leira?\n* [Acceso ao Portal CUE Galicia](/cuaderno/comunidades/galicia)\n* [Consultar sensores de solo](/sensores/suelo)',
    link: '/cuaderno/comunidades/galicia'
  },
  {
    isTechnical: true,
    keywords: ['kaixo', 'egun on', 'laguntza', 'laguntza teknikoa', 'nire soroa', 'precisioa', 'nekazaritza koadernoa', 'euskalerria', 'vitoria', 'bilbao', 'san sebastian', 'ureztatzea'],
    response: 'Ongi etorri Smart Fénix-era! Zeure nekazaritzako aholkulari birtuala naiz. **Nekazaritza-ustiategien koadernoa** (CUE/SIEX) kudeatzen laguntzen dizugu Euskadin, teknologia berritzaileen bitartez.\n\nZertan lagun diezazuket?\n1. **Ureztatze Optimizazioa**.\n2. **Nekazaritzako Burokrazia**.\n3. **Sentzoreak eta Telemetria**.\n\nHitz egin dezagun zure ustiategiaz:\n* [Acceso al Portal CUE Euskadi](/cuaderno/comunidades/pais-vasco)\n* [Saber más sobre SmartAgro](/contacto)',
    link: '/cuaderno/comunidades/pais-vasco'
  },
  {
    isTechnical: true,
    keywords: ['smartagro', 'login', 'claves', 'no puedo entrar', 'acesso', 'entrar', 'mi cuenta', 'contraseña'],
    response: 'El portal **SmartAgro** es tu centro de control privado. Si eres cliente y no tienes tus claves para ver tus sensores o el CUE, el proceso es este:\n\n1. **Verificación:** Tu nodo ya está enviando datos, solo falta vincular tu usuario.\n2. **Soporte:** Llámanos al [+34 621 26 22 86](https://wa.me/34621262286) y te habilitamos el acceso en 5 minutos.\n\n[Acceder a SmartAgro](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['mar menor', 'ley del ros', 'estacion murcia'],
    response: 'En la **Región de Murcia**, el cumplimiento de la Ley del Mar Menor es obligatorio. \n\nNuestros sensores están certificados para cumplir con la obligatoriedad de monitorización de sondas de humedad en la Zona 1. Generamos los informes trimestrales necesarios para la administración de forma automatizada, protegiendo tu explotación de sanciones medioambientales.\n\n[CUE Murcia / Mar Menor](/cuaderno/comunidades/murcia)',
    link: '/cuaderno/comunidades/murcia'
  },
  {
    isTechnical: true,
    keywords: ['larioja', 'doc rioja', 'cuaderno vendimia'],
    response: 'Para bodegas y viticultores de la **DOCa La Rioja**, integramos el Cuaderno de Vendimia con el SIEX. \n\nMonitorizamos las parcelas de Tempranillo y Graciano con estaciones propias para asegurar el cumplimiento de los estándares de calidad del consejo regulador, facilitando la trazabilidad desde la cepa hasta la botella.\n\n[Mi CUE en La Rioja](/cuaderno/comunidades/la-rioja)',
    link: '/cuaderno/comunidades/la-rioja'
  },
  {
    isTechnical: true,
    keywords: ['castilla la mancha', 'ciudad real'],
    response: 'Expertos en la digitalización de viñedo y olivar en **Castilla-La Mancha**. \n\nAyudamos con la gestión de la PAC en CLM, integrando los informes de ecorregímenes (P5 cubiertas vegetales) mediante seguimiento satelital NDVI. Aseguramos el cobro de las ayudas directas simplificando el papeleo de la Junta.\n\n[Mi CUE en Castilla-La Mancha](/cuaderno/comunidades/castilla-mancha)',
    link: '/cuaderno/comunidades/castilla-mancha'
  },
  {
    isTechnical: true,
    keywords: ['reafa', 'ayudas olivar'],
    response: 'En **Andalucía**, gestionamos el REAFA y las inspecciones de condicionalidad de la **Junta de Andalucía**. \n\nNuestra sede técnica en el sur ofrece soporte directo para la monitorización de riegos en olivar de Jaén y Córdoba. Verificamos que tus registros de fitosanitarios cumplan con el Real Decreto 1054/2022 antes de cualquier auditoría.\n\n[Mi CUE en Andalucía](/cuaderno/comunidades/andalucia)',
    link: '/cuaderno/comunidades/andalucia'
  },
  {
    isTechnical: true,
    keywords: ['ayudas pac', 'ecorregimenes', 'p5 cubiertas', 'p4 pastoreo', 'fondos feaga'],
    response: 'Los **Ecorregímenes de la PAC** suponen hasta el 25% de las ayudas directas. \n\nAyudamos a documentar el P5 (Cubiertas Vegetales) mediante fotos georreferenciadas y seguimiento satelital, asegurando que cumples con la normativa de mantenimiento de la cubierta espontánea o sembrada. Registramos todas las labores de siega o desbroce automáticamente en tu CUE.\n\n[CUE y PAC Inteligente](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['kit digital para agricultura', 'subvencion sensores', 'bono kit digital'],
    response: 'Somos **Agentes Digitalizadores** autorizados. Puedes canjear tu bono del **Kit Digital** para instalar nuestras estaciones de telemetría y el Cuaderno de Campo sin coste alguno. \n\nNos encargamos de toda la tramitación y justificación ante Red.es para que tú solo te preocupes de tu finca.\n\n[Solicitar Información](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['alfalfa', 'maiz aragon'],
    response: 'En **Aragón**, la modernización de regadíos en el valle del Ebro es nuestra prioridad. \n\nOptimizamos cultivos extensivos como el maíz y la alfalfa mediante telemetría de caudales y sondas de humedad a 60cm. Aseguramos que la dotación de agua de la comunidad de regantes se aproveche al máximo, evitando el estrés hídrico en los periodos de máximo calor de julio.\n\n[CUE Aragón / Riegos](/cuaderno/comunidades/aragon)',
    link: '/cuaderno/comunidades/aragon'
  },
  {
    isTechnical: true,
    keywords: ['oviedo', 'gijon', 'sidra', 'manzana asturias'],
    response: 'En **Asturias**, la agricultura de precisión se centra en la Pumarada y los pastos. \n\nUtilizamos sensores de temperatura y humedad para predecir la maduración de la manzana de sidra y controlar la sanidad vegetal frente a hongos por alta humedad ambiental. Optimizamos la fertilización de praderas para mejorar el rendimiento ganadero.\n\n[CUE Asturias](/cuaderno/comunidades/asturias)',
    link: '/cuaderno/comunidades/asturias'
  },
  {
    isTechnical: true,
    keywords: ['mallorca', 'menorca', 'ibiza', 'formentera', 'vinya mallorca'],
    response: 'En las **Islas Baleares**, la escasez de agua es el reto principal. \n\nInstalamos sistemas de microrriego controlados por sondas de succión en viñedos y almendros. La integración con el Cuaderno Digital de las Islas permite una gestión ágil de las subvenciones por ahorro hídrico y sostenibilidad insular.\n\n[CUE Baleares](/cuaderno/comunidades/baleares)',
    link: '/cuaderno/comunidades/baleares'
  },
  {
    isTechnical: true,
    keywords: ['las palmas', 'platano', 'aguacate canarias'],
    response: 'En **Canarias**, el cultivo del Plátano y el Aguacate requiere un control de sales milimétrico. \n\nNuestras sondas de conductividad (CE) monitorizan la calidad del agua de pozos y galerías, evitando que el sodio dañe las raíces. El control de la humedad multicapa permite espaciar los riegos en terrenos volcánicos de alta filtración.\n\n[CUE Canarias](/cuaderno/comunidades/canarias)',
    link: '/cuaderno/comunidades/canarias'
  },
  {
    isTechnical: true,
    keywords: ['santander', 'forraje', 'ganaderia cantabria'],
    response: 'En **Cantabria**, digitalizamos la gestión de forrajes y la ganadería extensiva. \n\nCruzamos datos meteorológicos locales con sensores de humedad de suelo para determinar el momento óptimo de siega y abonado de las praderas, garantizando la máxima calidad proteica del forraje para la cabaña ganadera cántabra.\n\n[CUE Cantabria](/cuaderno/comunidades/cantabria)',
    link: '/cuaderno/comunidades/cantabria'
  },
  {
    isTechnical: true,
    keywords: ['castilla y leon', 'burgos', 'remolacha cyl'],
    response: 'En **Castilla y León**, somos expertos en cultivos extensivos y remolacha. \n\nOptimizamos el riego por pivot mediante sensores de presión y telemetría avanzada. La integración con el SIEX de la Junta de Castilla y León facilita la declaración de superficies y el cumplimiento de los ecorregímenes de la PAC.\n\n[CUE Castilla y León](/cuaderno/comunidades/castilla-leon)',
    link: '/cuaderno/comunidades/castilla-leon'
  },
  {
    isTechnical: true,
    keywords: ['comunidad valenciana', 'alicante', 'castellon', 'citricos valencia'],
    response: 'En la **Comunidad Valenciana**, la agricultura de precisión en cítricos y caquis es fundamental. \n\nUtilizamos dendrómetros de fruto para monitorizar el engorde en tiempo real y evitar el rajado. El control de la salinidad en el suelo previene bloqueos nutricionales en regadíos tradicionales y modernizados del Júcar y el Segura.\n\n[CUE Comunidad Valenciana](/cuaderno/comunidades/comunitat-valenciana)',
    link: '/cuaderno/comunidades/comunitat-valenciana'
  },
  {
    isTechnical: true,
    keywords: ['badajoz', 'caceres', 'tomate extremadura', 'higo'],
    response: 'En **Extremadura**, lideramos la digitalización del tomate de industria y la fruticultura. \n\nNuestras sondas FDR ayudan a gestionar las dotaciones de agua de las Vegas del Guadiana. Optimizamos el cuajado del higo y la cereza del Jerte mediante estaciones agroclimáticas que alertan sobre riesgos de heladas o lluvias torrenciales.\n\n[CUE Extremadura](/cuaderno/comunidades/extremadura)',
    link: '/cuaderno/comunidades/extremadura'
  },
  {
    isTechnical: true,
    keywords: ['comunidad de madrid', 'olivo madrid', 'vino madrid'],
    response: 'En la **Comunidad de Madrid**, apoyamos la modernización del olivar y la viña de la zona sur. \n\nUtilizamos teledetección para optimizar las cubiertas vegetales exigidas por la PAC y monitorizamos el estrés hídrico de las parcelas para garantizar la calidad de los aceites y vinos con denominación de origen Madrid.\n\n[CUE Madrid](/cuaderno/comunidades/madrid)',
    link: '/cuaderno/comunidades/madrid'
  },
  {
    isTechnical: true,
    keywords: ['pamplona', 'huerta navarra', 'espárrago'],
    response: 'En **Navarra**, la tecnología se aplica al espárrago y a la huerta del Ebro. \n\nUtilizamos sensores de temperatura de suelo para predecir la brotación del espárrago y optimizar la recolección. En cultivos hortícolas, el control del riego por goteo mediante tensiómetros asegura la rentabilidad del agricultor navarro.\n\n[CUE Navarra](/cuaderno/comunidades/navarra)',
    link: '/cuaderno/comunidades/navarra'
  },
  {
    isTechnical: true,
    keywords: ['logroño', 'viñedo rioja', 'vino rioja'],
    response: 'En **La Rioja**, la viticultura de precisión es nuestra seña de identidad. \n\nMonitorizamos el estado hídrico de la vid para asegurar la calidad de la uva exigida por la DOCa Rioja. El cuaderno digital integrado permite registrar todas las operaciones de campo siguiendo los estándares de sostenibilidad y trazabilidad riojanos.\n\n[CUE La Rioja](/cuaderno/comunidades/la-rioja)',
    link: '/cuaderno/comunidades/la-rioja'
  },
  {
    isTechnical: true,
    keywords: ['ceuta', 'melilla', 'huertos urbanos', 'autonoma'],
    response: 'En **Ceuta y Melilla**, apoyamos los proyectos de agricultura urbana y autoabastecimiento. \n\nUtilizamos sistemas de riego inteligentes de bajo consumo para optimizar los recursos hídricos limitados de las ciudades autónomas, integrando tecnología de sensores en huertos comunitarios y zonas verdes.\n\n[Información General CUE](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['consejos', 'mejores practicas', 'exito', 'guia rapida', 'como mejorar'],
    response: 'Para triunfar con **Smart Fénix**, sigue estas 3 reglas de oro:\n\n1. **Mira tus sondas antes de regar:** No riegues por costumbre, riega cuando el bulbo lo pida.\n2. **Digitaliza al día:** No dejes el CUE para el final del mes, registra cada tratamiento al momento desde el móvil.\n3. **Usa el Modo Ingeniero:** Familiarízate con el VPD y la CE; son los datos que separan a un agricultor de un empresario agrícola de élite.\n\n[Ver Guía Completa de Éxito](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['exportacion', 'global gap', 'normativa residuos', 'mrl', 'limite maximo residuos'],
    response: 'Si exportas a Europa, el cumplimiento del **Global G.A.P.** es obligatorio. \n\nNuestra plataforma garantiza el control de los LMR (Límites Máximos de Residuos) al cruzar tus registros de tratamientos con el VADEMÉCUM oficial. Evitamos rechazos en destino por trazas de materias activas no autorizadas o tiempos de espera incumplidos.\n\n[Certificación y Trazabilidad](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['configuracion', 'ajustes', 'cambiar parametros', 'modificar alertas'],
    response: 'Para modificar los umbrales de tus alertas (ej: que te avise cuando la humedad baje del 20%): \n\n1. Entra en tu panel de **SmartAgro**.\n2. Ve a la sección **Configuración de Estaciones**.\n3. Selecciona el nodo y ajusta el **Trigger de Alerta**.\n\n[Ir a Configuraciones](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['multa fitosanitarios', 'error cuaderno', 'inspeccion siex', 'sancion agricultura'],
    response: '¿Tuviste una inspección y tienes errores en tu CUE? **Mantén la calma.** \n\n1. Entra en SmartAgro y genera el Informe de Validación de Errores.\n2. Llámanos al [+34 621 26 22 86](https://wa.me/34621262286).\n3. Nuestro equipo técnico revisará tus registros para subsanar omisiones antes de que la sanción sea firme. \n\n[Defensa Técnica CUE](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['inteligencia artificial', 'futuro agricultura', 'big data agro', 'machine learning'],
    response: 'La **IA de AgroAI** no solo reporta datos, los interpreta. \n\nEstamos entrenando modelos de Deep Learning para predecir la cosecha con un 95% de exactitud analizando solo la curva de transpiración y el engorde del fruto. El futuro no es regar más, sino regar con inteligencia para producir más con menos.\n\n[Unirse al Futuro](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['seguridad datos', 'privacidad finca', 'donde estan mis datos', 'proteccion lora'],
    response: 'Tus datos son de tu propiedad exclusiva. \n\nLa red **LoRaWAN de SmartAgro** utiliza cifrado AES-128 de extremo a extremo, garantizando que nadie pueda interceptar la información de tus sensores. Los servidores están alojados en España, cumpliendo estrictamente con el RGPD y asegurando la soberanía de tus datos agronómicos frente a terceros.\n\n[Política de Privacidad](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['finalizar', 'resumen total', 'ayuda final'],
    response: 'Soy tu **Socio Agronómico 24/7**. \n\nHe sido programado con el conocimiento de 17 comunidades, 40+ cultivos y las normativas SIEX/PAC más recientes. Mi objetivo es que tu explotación sea la más eficiente y rentable de la zona. \n\n¿Tienes alguna duda técnica específica? Pregúntame sobre cualquier métrica (VPD, CE, ETc) o cultivo. ¡Estamos aquí para ayudarte a crecer!\n\n[Contactar con Dirección Técnica](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['quienes sois', 'mision', 'porque elegir smart fenix', 'equipo tecnico'],
    response: 'En **Smart Fénix**, somos ingenieros con las botas manchadas. \n\nHemos nacido en el campo para servir al campo. Nuestra misión es poner la tecnología aeroespacial (LoRaWAN, Satélites, IA) al servicio del agricultor de a pie. No vendemos "hierros", ofrecemos soluciones para que tu legado agrícola sea rentable, sostenible y duradero.\n\n[Conoce a nuestro Equipo](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['8 en 1', 'bolsa'],
    response: 'Nuestro **sensor NPK 8 en 1** ayuda a monitorizar los niveles de nitrógeno, fósforo y potasio, además de pH y CE.\n\nEsto permite ajustar el fertilizante a lo que la planta realmente necesita, fomentando una nutrición más equilibrada y sostenible.\n\n[Ver Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['humedad del suelo', 'fdr', 'tdr', 'perfil', 'bulbo hídrico', 'mojado', 'seco', 'beber', 'humedales'],
    response: 'Medir la humedad superficial no basta. Nuestros **sensores tubulares multicapa** emplean tecnología FDR (Frequency Domain Reflectometry) para medir la humedad, temperatura y conductividad eléctrica a distintas profundidades del perfil del suelo (hasta 1 metro).\n\nEsto nos permite visualizar exactamente el desarrollo del bulbo hídrico, optimizando los tiempos de riego, garantizando un gran **ahorro de agua** (entre un 25% y un 40%) y evitando la asfixia radicular.\n\nConsulta nuestros [Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['ph', 'acidez', 'ph de alta precision', 'peache'],
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
    isTechnical: true,
    keywords: ['climáticos', '8 parámetros', 'lorawan', 'precipitación', 'viento', 'radiación', 'meteorología'],
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
  {
    isTechnical: true,
    keywords: ['estiercoles', 'purin', 'sandach', 'deyecciones', 'nitratos'], // 'sandach'
    response: 'La normativa de zonas vulnerables a nitratos es implacable. Nuestro módulo de gestión de estiércoles y subproductos SANDACH digitaliza todo el proceso, desde el origen de la deyección animal en granja hasta el reparto agronómico en parcela. Calculamos la dosis máxima legal de Nitrógeno por hectárea y validamos que el plan de abonado orgánico proteja los acuíferos subterráneos. Tienes toda la información organizativa en [Gestión de Estiércoles](/herramientas/estiercoles).',
    link: '/herramientas/estiercoles'
  },
  {
    isTechnical: true,
    keywords: ['trazabilidad gps', 'darp', 'gps', 'transporte purines', 'gestion de flotas'],
    response: 'El equipamiento GPS homologado (normativa DARP) es indispensable en el transporte de purines y material orgánico. Facilitamos la instalación de receptores GPS de alta frecuencia que trazan permanentemente el volumen de cisterna, coordenadas de carga/descarga y caudalímetro en tiempo real. Esta telemetría se acopla en el Cuaderno para superar cualquier inspección medioambiental gubernamental de forma automatizada. Infórmate sobre nuestra [Trazabilidad GPS](/herramientas/trazabilidad).',
    link: '/herramientas/trazabilidad'
  },
  {
    isTechnical: true,
    keywords: ['almazara', 'rendimiento graso'],
    response: 'El cultivo del **Olivar** exige optimizar tanto la producción como la lipogénesis (rendimiento graso).\n\nMediante nuestras estaciones climáticas y telemetría de suelo, ejecutamos estrategias de Riego Deficitario Controlado (RDC) que estabilizan la producción y mejoran la calidad del aceite.\n\n[Soluciones para Agricultores](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['leñosos', 'cuajado'],
    response: 'En el **Almendro** y otros frutos secos de alta rentabilidad, el déficit fenológico es crítico.\n\nUtilizando dendrometría de precisión y corrección satelital NDVI, podemos realizar podas selectivas y dosificar el abonado potásico vía fertirriego para asegurar un desarrollo homogéneo.\n\n[Casos de éxito en Almendro](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['estres hidrico viña'],
    response: 'En la Viticultura de precisión, el estrés hídrico moderado post-envero es necesario para concentrar azúcares (Grado Brix) y mejorar el perfil antociánico de la uva. Utilizamos nuestro sensor LWP (Leaf Water Potential) y dendrómetros para llevar a la viña al límite fisiológico óptimo, dictaminando automáticamente riegos quirúrgicos y ahorrando costes energéticos severos. Además el cuaderno registra el cuaderno de vendimia exigido por denominaciones de origen. Ve a [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['manzana'],
    response: 'Para Frutales de hueso y pepita y sistemas Hortícolas intensivos, el control climático es absoluto. Combinando nuestro sensor de Humectación Foliar y de Temperatura Infrarroja de Hoja, prevenimos ataques de Monilia o Botritis mediante Modelos de Alerta Temprana. En paralelo, los sensores de pH y CE de Alta Precisión mantienen la solución nutritiva perfectamente ecualizada, erradicando micro-carencias y elevando el porcentaje de destrío exportable. Detalles en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['macollado', 'espigado'],
    response: 'En el cultivo extensivo de cereal de invierno como trigo y cebada, la rentabilidad se juega en el abonado de cobertera. Utilizando imágenes satelitales NDVI y algoritmos propios, generamos mapas de prescripción variable (Variable Rate) para esparcidoras de abono. Detectamos zonas de bajo vigor donde aplicar nitrógeno extra durante el macollado y zonas ricas donde reducir la dosis. Esto elimina el sobrecoste de abono innecesario y homogeniza el rendimiento final de la parcela, reduciendo la factura de fertilizantes en un 20% anual. Mira más en [Soluciones para Agricultores](/soluciones/agricultores).',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['pivote', 'cobertera', 'nitrogeno'],
    response: 'El cultivo del maíz demanda un control hídrico y nutricional milimétrico, especialmente bajo riego por pivote. Instalamos sensores de humedad de suelo a 30cm, 60cm y 90cm para calibrar el tiempo óptimo de rotación del pivote sin incurrir en lixiviación de nitratos por exceso de agua. Sincronizamos estos sensores con la evapotranspiración diaria (ETc) para que aportes exactamente el agua que el cultivo consumió ayer. Esta precisión salva el coste energético del bombeo y previene asfixias radiculares en las etapas iniciales críticas. Revisa los [Sensores de Suelo](/sensores/suelo).',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['arroz', 'inundacion', 'marisma', 'nivel de agua'],
    response: 'La digitalización del arrozal implica una monitorización ininterrumpida de la pauta de inundación y, críticamente, la salinidad acumulada por intrusión marina. Implementamos sensores de conductividad eléctrica (CE) y nivel en columna de agua interconectados por LoRaWAN. El sistema genera alertas instantáneas en tu móvil si el nivel desciende del umbral ecológico o si la concentración de sales amenaza la asimilación de nutrientes de la planta. Previene mermas catastróficas del rendimiento y optimiza el bombeo de agua dulce antes de que los daños sean irreversibles. Más info en [Sensores de Agua](/sensores/agua-nivel).',
    link: '/sensores/agua-nivel'
  },
  {
    isTechnical: true,
    keywords: ['tomate de industria', 'hortícola intensivo', 'podredumbre apical', 'calcio', 'riego goteo'],
    response: 'En el **tomate de industria**, las principales pérdidas económicas provienen de desórdenes osmóticos como la podredumbre apical causada por fluctuaciones hídricas.\n\nDesplegamos tensiómetros digitales que garantizan que el bulbo húmedo se mantenga siempre en su punto óptimo, erradicando taras comerciales en cosecha.\n\n[Ver Sensores de Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['brócoli', 'coliflor', 'brásicas', 'abono de fondo'],
    response: 'Las **brásicas** como el brócoli tienen una altísima sensibilidad al lavado de nitrógeno. Nuestro sistema combina sensores NPK para mapear la reserva real de nitratos post-abonado.\n\nValidamos que el fertilizante persista en el rango radicular y no se lixivie, evitando sanciones medioambientales en Zonas Vulnerables.\n\n[Consultar Sensores NPK](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['lechuga', 'iceberg', 'horeca', 'estrés térmico'],
    response: 'La lechuga, de sistema radicular superficial y extrema sensibilidad a sales, exige que el bulbo de riego se controle al centímetro en los primeros 20 centímetros de suelo. Con nuestras sondas FDR compactas, te aseguras de no aplicar agua que migrará por debajo de la zona útil, desperdiciando agua y fertilizante. Simultáneamente, utilizamos radiómetros y sensores de temperatura foliar para recomendar micro-aspersiones climáticas en episodios de ola de calor, mitigando el estrés térmico, frenando el espigado prematuro y salvaguardando la calidad comercial del cultivo. Infórmate en [Sensores de Planta](/sensores/planta).',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['floracion', 'cuajado mango', 'subtropicales'],
    response: 'Para la rentabilidad del mango, orquestar una floración vigorosa y evitar la caída dramática de frutos en el cuajado son factores determinantes. Usamos estaciones meteorológicas avanzadas en el corazón del huerto para registrar la integral térmica (grados acumulados) y modelizar el estrés térmico, complementado con sensores de potencial mátrico. Estas métricas instruyen sistemas de riego de ultra-precisión que mantienen el ecosistema en picos fenológicos óptimos, evitando la abortación masiva de panículas provocada por choques climáticos y garantizando un calibre premium europeo.',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['frutos rojos', 'maceta', 'conductividad sustrato'],
    response: 'El cultivo del arándano y otros frutos rojos hidropónicos o en sustrato inerte (maceta) no perdona errores de conductividad o pH. Cada décima de grado en la disolución afecta la absorción catiónica. Equipamos las explotaciones de berries con sensores NPK y pH sumergibles de altísima frecuencia, auditando a tiempo real los valores de los drenajes. Así identificamos instantáneamente la acumulación de sales o los bloqueos por antagonismo (como potasio o calcio). La corrección inmediata de la sopa nutritiva se traduce en retornos de inversión espectaculares.',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['citrico', 'clemenules', 'verna', 'raja del fruto'],
    response: 'La agricultura citrícola moderna se enfrenta al tremendo desafío de la fisiopatía del temido rajado del fruto ("creasing" y "splitting") derivado de alteraciones bruscas de presión osmótica. Combatimos esto utilizando dendrómetros de fruto para observar en continuo la absorción hídrica del pericarpio y sensores multicapa volumétricos en suelo. Esto genera pautas de riego de alta frecuencia que estabilizan la curva de crecimiento del cítrico sin los típicos estrangulamientos hídricos de mediodía, maximizando la calidad de piel y la rentabilidad comercial general de la cosecha.',
    link: '/sensores/planta-dendrometro-fruto'
  },
  {
    isTechnical: true,
    keywords: ['picada olivo', 'ipmwise', 'plaga olivo'],
    response: 'Respecto a la temible mosca del olivo (Bactrocera oleae), tratar "a ciegas" es carísimo y fomenta resistencias perjudiciales. En sinergia con IPMWise, nuestra estación meteorológica recolecta datos hiperlocales de humedad y temperatura horaria. Nuestro algoritmo proyecta integral térmica y modeliza la biología larvaria del insecto en tiempo real. En lugar de aplicar insecticida rutinario, nuestro software de Inteligencia Agronómica te envía una notificación predictiva dictaminando, basándose en la integral fenológica exacta, el día preciso y el unbral económico dictaminado para tratar. Esto pulveriza costes reduciendo aplicaciones en más de un 60%.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['polilla del olivo', 'prays oleae', 'generacion antofaga', 'carpofaga'],
    response: 'El Prays del olivo exige tratamientos de letalidad absoluta focalizados en las generaciones clave: filófaga (hoja), antófaga (flor) y la crítica carpófaga (fruto). Utilizando tecnología Predictiva Satelital en combinación con los micro-sensores del clima en parcela, establecemos proyecciones matemáticas del vuelo de adultos y la posterior puesta de huevos en el cáliz. El Cuaderno Digital notifica con precisión quirúrgica el momento adecuado donde el uso del Bacillus thuringiensis resulta de mayor efectividad, abatiendo las poblaciones de eclosión temprana y salvando la campaña del olivar sin mermar la certificación ecológica.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['polilla del racimo', 'viña plaga', 'botrytis viña', 'generacion lobesia'],
    response: 'La Lobesia botrana (Polilla del racimo) es la causante encubierta de las catastróficas epidemias de Botrytis cinerea, cuyas heridas generan focos infecciosos irreversibles en la vid. El software de control biológico IPMWise, alimentado diariamente por nuestra red LoRaWAN climática, calcula las horas-grado acumuladas para decretar la fase temporal de penetración larvaria intra-grano en el racimo. De esta forma, ya sea mediante confusión sexual o formulaciones sintéticas convencionales, logras posicionar el tratamiento en la ventana técnica de máxima eficacia, antes de que el daño arruine los estándares de Denominación de Origen.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['tetranychus urticae', 'plaga sequia', 'defoliacion'],
    response: 'La Araña roja (Tetranychus urticae) detona invasiones letales precisamente por altas temperaturas asociadas con humedades relativas severamente bajas y déficit hídrico prolongado, originando defoliaciones fulminantes en la explotación. Con inteligencia de estaciones meteorológicas SenseCAP monitoreando el microclima a ras de suelo, nuestro asistente pronostica explosiones poblacionales y las correlaciona con la tensión de humedad foliar detectada. Nos anticipamos al colapso fisiológico antes de presenciar clorosis aguda en tejido verde, indicando aspersiones refrescantes preventivas o el momento óptimo para liberar depredadores controladores (Phytoseiulus persimilis).',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['aphididae', 'melaza', 'virus planta', 'hormigas'],
    response: 'Las explosiones masivas de pulgón no sólo chupan savia menguando fuertemente el vigor vegetativo; son los grandes transmisores de los temibles virus botánicos y precursores absolutos del hongo negrilla (Fumagina) que bloquea drásticamente la radiación PAR foliar. Analizando con algoritmos predictivos las tasas de multiplicación del afídido versus las condiciones termo-pluviométricas, nuestra matriz sugiere umbrales de tratamiento temprano focalizado en rebrotes jóvenes. Así logrando contener la colonización con dosis fitosanitarias reducidísimas y conservando el equilibrio trófico natural a lo largo de la campaña entera.',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['fastidiosa', 'bacteria olivo'],
    response: 'Contra la irreversible Xylella fastidiosa, el control de los insectos vectores transmisores y un confinamiento estricto resultan obligatorios. Como herramientas de bioseguridad suprema, nuestro visor satelital NDVI es capaz de identificar disminuciones dramáticas de turgencia (declinación de clorometria) a nivel localizado muy tempranamente, alertando indirectamente sobre problemas fatales de xilema. Además, este seguimiento se ampara sobre el Cuaderno Digital de Smart Fénix, que verifica con coordenadas GPS geocercadas el trazado seguro de maquinaria, operarios y flotas frente a potenciales inspecciones de Sanidad Vegetal del SEPRONA.',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['verticillium', 'marchitez olivar', 'hongo vascular', 'enfermedad raiz'],
    response: 'El Verticillium dahliae destruye producciones al ocluir el sistema vascular de los olivos produciendo marchitez irreversible. Como el hongo sobrevive e infecta primordialmente mediante las humedades residuales del suelo e inóculos microscópicos en raíces adyacentes, limitamos drásticamente el riesgo empleando Sensores Multicapa Tubulares; evitamos saturación patológica prolongada del perfil (encharcamiento), determinando que el agua nunca se acumule estacionalmente. Es el método profiláctico agronómico absoluto para disminuir dramáticamente las probabilidades de infección fúngica de la raíz en las costosas fincas de olivares modernos en plantación superintensiva.',
    link: '/sensores/suelo-tubular'
  },
  {
    isTechnical: true,
    keywords: ['hongo hoja', 'cobre olivo', 'defoliacion olivo'],
    response: 'El Repilo (Spilocaea oleaginea) produce defoliaciones severas que bloquean la inducción floral del año venidero, quebrando la productividad agrícola cíclica del productor. Empleamos el sensor revolucionario de Humectación Foliar Infrarroja y el control pluviométrico de precipitación acumulada, simulando fielmente la retención hídrica real en el epicarpio de la aceituna. Tras episodios intensos de rocío matinal o densas brumas continuadas en primavera, logramos determinar algorítmicamente exactamente si la espora logró germinar, programando rectas precisas en Cuaderno utilizando óxidos cuprosos únicamente cuando nos indique el mapa de riesgo.',
    link: '/sensores/planta-hoja-humectacion'
  },
  {
    isTechnical: true,
    keywords: ['multa', 'inspeccion', 'sancion', 'inspectores', 'condicionalidad'],
    response: 'Si has recibido una inspección de campo, una carta de condicionalidad del SEPRONA o un aviso de sanción que pone en juego las ayudas de la PAC íntegras, no entres en pánico bajo ningún concepto. Nuestra arquitectura legal de Cuaderno SIEX actúa operando como un peritaje jurídico inviolable. Los ingenieros agrónomos de Agreeable Altitude diseñaron validaciones lógico-matemáticas automáticas que impiden registrar ilegalidades (ej: saltarse el plazo de seguridad prescrito o sobredosificar una sustancia activa penalizada comercialmente). Auditamos y saneamos tus registros corrigendo todo desajuste antes de su envío oficial por vía telemática al Ministerio.',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['no entiendo', 'borrador', 'carga masiva', 'excel siex', 'lento software', 'caos administrativo'],
    response: 'El pánico inmanejable por los borradores fallidos inter-autonómicos, colapsos con las entidades Colaboradoras y el picado infinito de excels monstruosos se evapora contundentemente con nosotros. Acabamos de programar sistemas automatizados que liquidan tus angustias de la burocracia paralizante. Nuestro portal te permite volcar una carga digital, y entonces, de forma invisible, la API cruza tus hectáreas al ecosistema informático oficial nacional, detectando disyuntivas reglamentarias previas y confeccionado prolijas memorias técnicas validadas para presentarlas directamente a Agricultura de tu Junta. Nosotros resolvemos el 100% de la carga del agricultor.',
    link: '/soluciones/tecnicos'
  },
  {
    isTechnical: true,
    keywords: ['sonda oxigeno', 'oxigeno en suelo', 'o2 sustrato', 'ahogo raiz'],
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
    keywords: ['par', 'luz planta', 'mallas de sombreo', 'lux'],
    response: 'Asumir empíricamente el espectro solar es obsoleto, la energía del sol únicamente activa la bioenzimática en un rango medible asimilable de longitud lumínica. Distribuimos potentes Sensores de Radiación PAR (Radiación Fotosintéticamente Activa) compuestos con espectrómetros cuánticos ultra-frecuencia que revelan la incidencia fotónica real que acciona los meristemos. Dominando milimétricamente esta métrica logras decidir arquitectónicamente el cierre robótico automatizado de techos mallas en cultivo indoor e invernadero sofisticado controlando a antojo el letargo vegetativo para salvarte de quemaduras y abrasamiento oxidativos estivales crónicos en frutos primor.',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['pluviometro', 'pluviómetro', 'precipitacion resolucion', 'precipitación resolución', 'milimetros', 'lluvia caida', 'lluvia caída', 'cazoleta', 'balance hidrico', 'balance hídrico'],
    response: 'Delegar en pronósticos interpolados a docenas de kilómetros desata la ruina de los cálculos de fertirrigación. Las fincas aisladas poseen un micro-clima intrínseco. Distribuimos eficientes Pluviómetros Aerodinámicos High-Resolution con un calibre magnético de cazoleta oscilante extrema (0.1 mm), que captan escrupulosamente los rocíos de condensación minúscula matutina y transfiere a nuestra red el balance final. Cada centímetro cúbico que es almacenado es sumado activamente en la matriz agronómica, cortando la electro-válvula y bloqueando automáticamente dispendios tarifarios imperdonables de caudales hidroeléctricos de reserva. Amortizable de por vida.',
    link: '/sensores/clima-estacion'
  },
  {
    isTechnical: true,
    keywords: ['multicapa', 'tubular', 'sensor tubular', 'capas suelo', 'drenaje', 'perfil hidrico'],
    response: 'Inferir la profundidad hidráulica apoyándose un único estrato es un grave error operativo. Recomendamos integralmente los novedosos Sensores FDR de Diseño Tubular insertos hasta el primer metro profundo de perfil sin perturbar perfiles naturales estratigráficos. Proveen instrumentarias múltiples incorporando 10 nudos de termistor medidor, escaneando cada 10 centímetros de la profundidad volumétrica y evidenciando dinámicas intrincadas litológicas, detectando con altísima resolución estratos subyacentes impermeables impenetrables "suela de arado". Impediremos roturaciones y bloquearemos por aspersión escorrentías perjudicialmente lavadoras de abono nitrogenado previniendo una eutrofización ecologógica penal.',
    link: '/sensores/suelo-tubular'
  },
  {
    isTechnical: true,
    keywords: ['fuga', 'presión tubería', 'rotura', 'riego fallo', 'pérdida agua'],
    response: 'Nuestro sistema GIS monitoriza la red de riego. Si detecta una caída de presión o un exceso de flujo respecto al caudal nominal del sector, el sistema geolocaliza el tramo afectado y te envía una alarma al móvil para actuar antes de que la inundación o la falta de riego causen daños. Más info: [Cuaderno Digital](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['hemeroteca'],
    response: 'En nuestra **Hemeroteca Técnica** publicamos guías sobre la normativa SIEX, análisis de nuevas plagas y consejos de riego. Es el mejor sitio para estar al día de lo que exige el Ministerio y de las nuevas tecnologías. \n\n¿Quieres leer sobre algún cultivo en concreto? [Ver Hemeroteca Técnica](/blog)',
    link: '/blog'
  },
  {
    isTechnical: true,
    keywords: ['competencia', 'otros', 'por que vosotros'],
    response: 'Hay muchos sensores en el mercado, pero nosotros no vendemos "cacharros", vendemos **Ingeniería Agronómica Española**. Nuestros sensores están calibrados para suelos reales (arcillosos, calizos, pedregosos) y nuestro software cumple al 100% con el **SIEX Nacional**.\n\nNo te la juegues con equipos sin soporte técnico local. [Nuestras Soluciones](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['manchas', 'bichos', 'hoja amarilla', 'puntos negros', 'enfermedad', 'bicho'],
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
    isTechnical: true,
    keywords: ['chino', 'amazon', 'otra marca', 'comparar'],
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
    keywords: ['soluciones', 'que me dais', 'mejorar finca'],
    response: 'Nuestra solución no es solo un sensor; es un sistema de toma de decisiones. \n\nTe damos la tecnología para medir, el software para cumplir con la ley (SIEX) y el asesoramiento de ingenieros para que sepas qué hacer con esos datos. \n\n¿Qué solución necesitas hoy? \n\n* [Soluciones para Agricultores](/soluciones/agricultores)\n\n* [Asesoría Técnica Especializada](/contacto)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['roto', 'no funciona', 'fallo', 'averia', 'ayuda tecnica', 'soporte'],
    response: 'Si tienes un problema técnico con un equipo instalado, no pierdas tiempo con el chat. 📞 \n\nLlámanos directamente al +34 621 26 22 86. Un ingeniero revisará la telemetría de tu nodo en remoto o se desplazará a tu finca si es necesario. El campo no espera y nosotros tampoco.',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['mordidas', 'comido', 'agujeros', 'gusano', 'araña', 'bichitos', 'que plaga es', 'saber que es', 'identificar', 'hoja', 'fea', 'amarilla', 'seca', 'punto', 'enferma', 'hongo', 'mosca', 'lacia', 'triste', 'decaida', 'peste'],
    response: 'Si ves mordidas o agujeros, tienes inquilinos no deseados en el cultivo. 🐛 \n\nNo podemos darte un diagnóstico 100% real por aquí, pero si nos envías una foto por WhatsApp o Formulario, nuestros ingenieros te ayudarán a identificar si es una plaga o una carencia nutricional antes de que se extienda. \n\n* [Identificar Plaga por Foto](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['finca grande', 'latifundio', 'parcelas', 'eficiente', 'ahorrar mucho', 'rentabilidad'],
    response: 'Gestionar grandes extensiones (100, 500 o 1000 hectáreas) sin sensores es como ir a ciegas. 🚜💨 \n\nNuestra tecnología te permite ver el estado hídrico de cada sector de riego desde el móvil, evitando que desperdicies miles de euros en agua y abono por culpa de una mala decisión. Para fincas de este tamaño, lo mejor es un plan de Ingeniería a Medida. \n\n* [Ver Soluciones de Escala](/soluciones/agricultores)\n* [Pedir Estudio de Rentabilidad](/herramientas/calculadora-roi)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['precio', 'caro', 'vale', 'coste', 'dinero', 'rentable', 'ahorro', 'timo', 'robo', 'estafa', 'vendehumos', 'engañar', 'cuanto', 'presupuesto', 'barato', 'inversion', 'pagar', 'gratis'],
    response: 'Más caro es tirar el abono y el agua sin saber si la planta lo aprovecha. 💸 \n\nNuestros clientes ahorran un 30% en riego y un 20% en fertilizantes. El equipo se paga solo en una campaña al evitar desperdicios y multas del SIEX. \n\n* [¿Cuánto puedo ahorrar?](/herramientas/calculadora-roi)\n\n* [Hablar de números con un técnico](/contacto)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['aceituna', 'frutal', 'intensivo', 'secano'],
    response: 'Cada cultivo es un mundo. No es lo mismo un olivar tradicional que un almendro superintensivo. 🌳 \n\nTenemos soluciones específicas para optimizar el riego deficitario en leñosos y el control de estrés hídrico para que el fruto sea de máxima calidad. \n\n* [Soluciones por Cultivo](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['goteo', 'goteros', 'tuberia', 'bomba', 'presion', 'pozo', 'balsa', 'estanque', 'caudal', 'contador', 'valvula', 'electrovalvula', 'gotero', 'aspersor', 'regadio', 'deficitario'],
    response: 'Optimizar el riego no es solo abrir la llave; es saber cuándo cerrar. 💧 \n\nNuestros sondas detectan si el agua llega a la raíz o si se está perdiendo por filtración profunda. Te ayudamos a ahorrar hasta un 30% de agua manteniendo la planta en su punto óptimo de sazón. \n\n* [Optimizar mi Riego](/sensores/suelo)\n\n* [Ver Sensores de Humedad](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['comida', 'nutriente', 'nitrato', 'fosforo', 'urea', 'estiercol', 'quimica', 'echarle', 'abonado', 'fertirriego', 'salinidad', 'sales'],
    response: 'Tirar abono "a ojo" es tirar el dinero al suelo. 💸 \n\nCon nuestros Sensores NPK medimos la conductividad y los nutrientes reales en la zona radicular. Así solo echas lo que la planta puede comer, evitando bloqueos y sales innecesarias. \n\n* [Ver Sensores de Nutrientes](/sensores/suelo)\n\n* [Calcular Ahorro en Abono](/herramientas/calculadora-roi)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['frio', 'calor', 'calima', 'granizo', 'pedrisco', 'lluvia', 'nieve', 'temperatura', 'humedad aire'],
    response: 'El tiempo está loco, pero que no te pille por sorpresa. ⛈️ \n\nNuestras estaciones miden la integral térmica y el riesgo de heladas en tiempo real, enviándote una alerta al móvil para que puedas actuar (activar riego anti-helada o mallas). \n\n* [Ver Estaciones Climatológicas](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['extremadura', 'comunidad', 'mi zona', 'mi region', 'españa', 'comunidades'],
    response: 'Cumplimos con la normativa de todas las Comunidades Autónomas, incluida la gestión del **CUE (Cuaderno de Explotación)** bajo el estándar SIEX nacional. 📋 \n\nDa igual si estás en Andalucía, Extremadura o cualquier otra zona; nuestra plataforma adapta los trámites a lo que te pide tu consejería de agricultura. \n\n* [Ver trámites por Comunidad](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
  {
    isTechnical: true,
    keywords: ['como regar', 'cuando regar', 'cuanta agua', 'necesidad hidrica', 'momento de riego'],
    response: 'Para saber cómo regar de forma eficiente, lo primero es saber cuánta agua tiene tu suelo ahora mismo. 💧 \n\nCon nuestros sensores, dejas de regar por calendario y antes de que la planta tenga sed. Te avisamos al móvil cuando la humedad baje del punto crítico. \n\n* [Aprender a optimizar el riego](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['cuaderno', 'siex', 'sies', 'ciex', 'cue', 'normativa', 'ley', 'rd1054', 'registro', 'obligatorio'],
    response: 'El **Cuaderno Digital (SIEX/CUE)** es obligatorio y el Ministerio no perdona. 📋 \n\nNuestra plataforma adapta los trámites a lo que te pide tu Comunidad Autónoma (Andalucía, Extremadura, etc.). Olvídate de los Excel; el sistema rellena los tratamientos automáticamente para que estés cubierto legalmente. \n\n* [Evitar multas SIEX](/cuaderno)\n\n* [Ver cómo funciona el Cuaderno](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['andalucia', 'jaen', 'sevilla', 'cordoba', 'huelva', 'cadiz', 'malaga', 'granada'],
    response: 'En Andalucía, el **CUE** es fundamental por la normativa de la Junta. Nuestra plataforma integra todos los requisitos andaluces para olivar y frutales. \n\n* [Mi CUE en Andalucía](/cuaderno/comunidades/andalucia)',
    link: '/cuaderno/comunidades/andalucia'
  },
  {
    isTechnical: true,
    keywords: ['canarias', 'palma', 'tenerife', 'grancanaria', 'gomera', 'hierro', 'fuerteventura', 'lanzarote'],
    response: 'El REA y el **CUE en Canarias** tienen particularidades por su régimen especial (Islas). Estamos preparados para gestionar tu explotación en las islas (plátano, aguacate, viñedo) cumpliendo con la normativa regional.\n\n* [Mi CUE en Canarias](/cuaderno/comunidades/canarias)',
    link: '/cuaderno/comunidades/canarias'
  },
  {
    isTechnical: true,
    keywords: ['vasco', 'euskadi', 'vizcaya', 'guipuzcoa', 'alava'],
    response: 'Adaptamos el registro al **CUE de Euskadi**, cumpliendo con la normativa foral (Araba, Bizkaia, Gipuzkoa). Ofrecemos tecnología de precisión adaptada al clima y necesidades del agro vasco.\n\n* [Mi CUE en País Vasco](/cuaderno/comunidades/pais-vasco)',
    link: '/cuaderno/comunidades/pais-vasco'
  },
  {
    isTechnical: true,
    keywords: ['castilla', 'leon', 'mancha', 'toledo', 'valladolid', 'ciudadreal', 'albacete', 'cuenca', 'guadalajara'],
    response: 'Gestionamos el **CUE** en ambas Castillas, optimizando los trámites para grandes explotaciones de secano y regadío. Somos expertos en digitalización de cereales y viñedo a gran escala.\n\n* [Mi CUE en Castilla](/cuaderno/comunidades/castilla-leon)',
    link: '/cuaderno/comunidades/castilla-leon'
  },
  {
    isTechnical: true,
    keywords: ['aragon', 'zaragoza', 'huesca', 'teruel', 'ebro'],
    response: 'El **CUE en Aragón** requiere precisión en los riegos del Ebro. Nuestra plataforma te cubre ante la DGA y te ayuda a ahorrar agua mediante sensores de humedad multicapa.\n\n* [Mi CUE en Aragón](/cuaderno/comunidades/aragon)',
    link: '/cuaderno/comunidades/aragon'
  },
  {
    isTechnical: true,
    keywords: ['madrid', 'valencia', 'murcia', 'galicia', 'asturias', 'cantabria', 'navarra', 'rioja', 'cataluña', 'baleares'],
    response: 'Damos soporte legal en tu comunidad, adaptando el **CUE/SIEX** a los plazos de tu administración regional. 📍 \n\n* [Ver trámites de mi zona](/cuaderno/informacion-comunidades)',
    link: '/cuaderno/informacion-comunidades'
  },
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
    keywords: ['helada'],
    response: 'La **Estación Meteorológica Smart Fénix** te avisa de heladas y mide la integral térmica de tu parcela en tiempo real. Máxima precisión climática en tu móvil. \n\n* [Ver Estación Clima](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['cuales son', 'catalogo'],
    response: 'Tenemos la gama más completa de ingeniería agronómica para tu finca. Aquí tienes nuestro arsenal: \n\n1. **Sensores de Suelo:** Humedad multicapa (FDR), NPK 8 en 1, pH y Conductividad Salina. \n\n2. **Sensores de Planta:** Dendrómetros de tronco/fruto, Humectación foliar y Temperatura de hoja. \n\n3. **Sistemas de Clima:** Estaciones meteorológicas completas y sensores de Caudal/Agua. \n\n* [Ver Guía Técnica de Sensores](/guia-sensores)',
    link: '/guia-sensores'
  },
  {
    isTechnical: true,
    keywords: ['cuando es obligatorio', 'obligatoriedad', 'calendario siex', 'ley cuaderno', 'cuando empiezo', 'plazo ministerio', 'rd 1054', 'normativa siex', 'ley siex', 'exigencias siex'],
    response: 'La obligatoriedad del Cuaderno Digital (SIEX) es inminente. Según el calendario del Ministerio:\n\n1. **1 de Septiembre 2024:** Obligatorio para explotaciones de Secano > 30 Ha y Regadío > 10 Ha (y todas las de Invernadero/Hidroponia).\n2. **1 de Septiembre 2025:** Resto de explotaciones (fincas pequeñas).\n\n**Dime: ¿Cuántas hectáreas tiene tu explotación y qué cultivo principal trabajas?** Así te daré la hoja de ruta técnica exacta para evitar sanciones de condicionalidad en la PAC.\n\nManual detallado: [Guía de Obligatoriedad SIEX](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['plaga', 'hongos', 'sequia extrema', 'urgente', 'me han multado', 'socorro', 'emergencia', 'se muere', 'catastrofe', 'denuncia', 'crisis', 'tratamiento urgente', 'ayuda ingenieros'],
    response: '⚠️ **PROTOCOLO DE EMERGENCIA ACTIVADO** ⚠️\n\nNuestras estaciones han detectado un pico crítico de riesgo. Si estás ante una plaga fulminante o una inspección del SEPRONA/Agricultura, actúa así:\n\n1. **No apliques sin receta:** Podrías agravar el problema o registrar una ilegalidad en el CUE.\n2. **Canal Prioritario:** Llama o escribe ahora mismo a nuestro **WhatsApp de Guardia de Ingeniería**: [+34 621 26 22 86](https://wa.me/34621262286).\n\nTenemos un ingeniero agrónomo listo para validar tu caso mediante telemetría en tiempo real. \n\n[Formulario de Intervención Técnica](/contacto)',
    link: 'https://wa.me/34621262286'
  },
  {
    isTechnical: true,
    keywords: ['aguacate', 'palto', 'subtropical', 'axfisia', 'oxigeno', 'phytophthora'],
    response: 'El **Aguacate** es extremadamente sensible a la anoxia radicular. Para evitar la Phytophthora, instalamos:\n\n- **Sonda de Oxígeno (O2):** Mide la aireación del suelo en tiempo real.\n- **Sonda Multicapa (90cm):** Controlamos que el bulbo no se encharque en la zona de pelos absorbentes.\n\n[Guía para Subtropicales](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['olivo', 'olivar', 'aceite', 'picual', 'arbequina', 'superintensivo'],
    response: 'En el **Olivar Superintensivo**, la clave es el Riego Deficitario Controlado (RDC). Recomendamos:\n\n- **Sonda FDR Multicapa (60cm):** Para monitorizar el consumo diario en cada estrato.\n- **Dendrómetro de Tronco:** Mide la contracción del árbol para saber exactamente cuándo tiene sed antes de que se vea en la hoja.\n\n[Soluciones para Olivar](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['viñedo', 'viña', 'uva', 'enologia', 'bodega', 'grado brix'],
    response: 'Para una **Bodega de Calidad**, el estrés hídrico post-envero es necesario. Controlamos:\n\n- **Sonda de Potencial Hídrico (LWP):** Para medir la tensión del agua en la planta.\n- **Imágenes Satelitales NDVI:** Identificamos la variabilidad de vigor para podas y abonados selectivos.\n\n[Precisión en Viticultura](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['almendro', 'frutos secos', 'potasio'],
    response: 'En **Frutos Secos**, el cuajado y el engorde requieren un control nutricional milimétrico. Recomendamos:\n\n- **Sensores NPK 8 en 1:** Para asegurar que el potasio está disponible durante la lipogénesis.\n- **Pluviómetro Digital:** Para registrar el balance hídrico real de la parcela.\n\n[Maximizar Rendimiento en Leñosos](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['citricos', 'naranja', 'limon', 'mandarina', 'splitting', 'rajado'],
    response: 'El rajado del fruto (**Splitting**) en cítricos se debe a cambios bruscos de presión osmótica. Lo evitamos con:\n\n- **Dendrómetro de Fruto:** Monitorizamos la curva de expansión del cítrico 24/7.\n- **Sonda de Conductividad (CE):** Para controlar la salinidad que bloquea la absorción de calcio.\n\n[Proteger Cítricos](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['berries', 'fresa', 'arandano', 'frambuesa', 'sustrato', 'hidroponia'],
    response: 'El cultivo en **Sustrato** no tiene inercia; un error de pH mata la planta en horas. Instalamos:\n\n- **Sensores de Sustrato pH/CE:** Lectura continua de los drenajes para ajustar el fertirriego al minuto.\n- **Sensores PAR:** Medimos la radiación real bajo malla para evitar quemaduras.\n\n[Berries de Precisión](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['tomate', 'hortícola', 'invernadero'],
    response: 'En **Invernaderos e Intensivos**, el control del clima es absoluto. Recomendamos:\n\n- **Sensores de Humectación Foliar:** Para tratar solo cuando hay riesgo real de hongos.\n- **Tensiómetros Digitales:** Para mantener el sustrato en el rango de saturación óptimo (cbars).\n\n[Control de Invernaderos](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['maiz', 'cereal', 'trigo', 'cebada', 'extensivo'],
    response: 'Para **Cultivos Extensivos**, optimizamos el abonado de cobertera. Ofrecemos:\n\n- **Mapas de Prescripción NDVI:** Dosificación variable de Nitrógeno con FieldBee.\n- **Caudalímetros Ultrasónicos:** Para auditar el gasto de agua por pivote.\n\n[Ahorro en Extensivos](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['modo ingeniero', 'datos tecnicos', 'conductividad', 'vpx', 'fotosintesis', 'matricial', 'cbars', 'porosidad', 'lixiviacion', 'osmosis', 'estoma'],
    response: '💻 **SISTEMA DE INGENIERÍA AGRONÓMICA ACTIVO (DEEP TECH)**\n\nBienvenido al núcleo de Smart Fénix. Estamos procesando los siguientes vectores de decisión:\n\n- **Déficit de Presión de Vapor (VPD):** Gestionamos el clima para evitar el cierre estomático y maximizar la fotosíntesis neta.\n- **Tensión Matricial (cbars):** Determinamos el esfuerzo de succión radicular real (Punto de Marchitez vs Capacidad de Campo).\n- **Salinidad (mS/cm):** Calculamos la fracción de lavado para evitar la toxicidad por cloruros y sodio en el bulbo.\n- **Integrales Térmicas:** Predecimos el vuelo de plagas basándonos en grados-día acumulados.\n\n¿Deseas una demo de la telemetría RAW o prefieres ver la curva de evapotranspiración (ETc) de ayer?\n\n* [Acceder a Telemetría Avanzada SmartAgro](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['suelo', 'analisis de suelo', 'litologia', 'textura', 'arcilla', 'arena', 'limo'],
    response: 'Cada sensor debe calibrarse según la **Textura del Suelo**. Un suelo arcilloso retiene el agua por tensión matricial, mientras que uno arenoso drena por gravedad. Configuramos nuestras sondas FDR con curvas de calibración específicas para cada parcela, garantizando un error < 1% en la lectura volumétrica.\n\n[Ver Ciencia del Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['riego deficitario', 'rdc', 'ahorro agua', 'eficiencia hídrica', 'wue'],
    response: 'La **Eficiencia de Uso del Agua (WUE)** es nuestro dogma. Aplicamos Riego Deficitario Controlado (RDC) en fases fenológicas no críticas (ej: post-cosecha en frutales) para ahorrar hasta el 40% del agua sin afectar al rendimiento comercial de la campaña siguiente.\n\n[Optimizar mi Riego](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['bactrocera', 'verticilium', 'xylella', 'lobesia'],
    response: 'Nuestra plataforma integra **Modelos Predictivos de Plagas**. Cruzamos la humedad foliar y la temperatura del aire para avisarte 48h antes de que el hongo se instale.\n\n- **Mildiu/Oídio:** Controlamos el mojado de hoja para evitar tratamientos preventivos innecesarios.\n- **Pests:** Calculamos el "momento de vuelo" para que el insecticida sea 100% efectivo.\n\n[Ver Alertas de Sanidad Vegetal](/sinergias/ipmwise)',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['pistacho', 'kerman', 'sirora', 'larnaka', 'portainjerto', 'ucb1'],
    response: 'En el cultivo del **Pistacho**, la gestión del agua en el tercer año es crítica para la formación de la estructura. \n\nInstalamos sondas FDR multicapa para asegurar que el bulbo hídrico alcance el sistema radicular del portainjerto (habitualmente UCB1) sin generar encharcamientos que favorezcan el decaimiento radicular. Controlamos la dotación hídrica para evitar el binomio sequía-estrés que provoca frutos vacíos.\n\n[Optimizar Pistacho](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['almendro superintensivo', 'seto', 'sh_2', 'lauranne', 'soleta'],
    response: 'El **Almendro en Seto** (Superintensivo) demanda una fertirrigación de alta frecuencia. \n\nUtilizamos sensores NPK para monitorizar la curva de absorción de Nitrógeno y Potasio, evitando picos de salinidad que detengan el crecimiento vegetativo. La dendrometría de precisión nos permite ajustar el riego para controlar el vigor del seto, facilitando la recolección con cabalgadora.\n\n[Ver Sensores para Almendro](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['viñedo de tinto', 'tempranillo', 'cabernet', 'syrah', 'merlot'],
    response: 'Para **Variedades Tintas**, el objetivo es la síntesis de polifenoles y antocianos. \n\nProvocamos un estrés hídrico moderado controlado mediante sensores de potencial hídrico foliar (LWP), asegurando que la planta concentre sus recursos en el fruto tras el cierre del racimo, elevando el Grado Brix y el color de forma natural.\n\n[Viticultura de Precisión](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['viñedo de blanco', 'albarariño', 'verdejo', 'chardonnay', 'godello'],
    response: 'En **Variedades Blancas**, prima la frescura y la acidez málica. \n\nEvitamos el estrés hídrico severo mediante estaciones meteorológicas que calculan el VPD (Déficit de Presión de Vapor) en tiempo real. Esto permite mantener los estomas abiertos y la planta fresca, preservando los precursores aromáticos volátiles que definen la calidad del vino blanco premium.\n\n[Gestión de Blancos](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['ajo', 'cebolla', 'liliaceas', 'bulbo', 'salinidad ajo'],
    response: 'El **Ajo** y la **Cebolla** tienen sistemas radiculares muy superficiales y alta sensibilidad a la salinidad. \n\nInstalamos sondas de conductividad (CE) a 15-20cm para asegurar que la zona del bulbo no acumule sales que frenen el engorde. El control hídrico mediante tensiómetros digitales previene la aparición de enfermedades fúngicas de cuello y raíz.\n\n[Proteger Cultivos Hortícolas](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['frutales de hueso', 'melocoton', 'nectarina', 'paraguayo', 'ciruelo'],
    response: 'En **Frutales de Hueso**, el calibre comercial es el factor determinante. \n\nEl uso de dendrómetros de fruto permite observar la tasa de crecimiento diaria. Si la curva se aplana, el sistema genera una alerta de riego automática para recuperar la turgencia, maximizando el porcentaje de fruta de categoría Extra y eliminando el destrío por falta de calibre.\n\n[Ver Dendrómetros de Fruto](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['frutales de pepita', 'manzano', 'pera', 'conferencia', 'golden'],
    response: 'Para el manzano y el peral, el control de la temperatura foliar es vital para evitar el asolado del fruto. \n\nCombinamos sensores de temperatura infrarroja con micro-aspersión climática, activando riegos refrescantes cuando el sensor detecta que la hoja supera los 32ºC, protegiendo la epidermis del fruto y manteniendo la calidad organoléptica.\n\n[Sensores de Planta](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['remolacha azucarera', 'sacarosa', 'digestion'],
    response: 'En la **Remolacha**, la rentabilidad depende de la riqueza (azúcar). \n\nUtilizamos imágenes satelitales NDVI para detectar zonas de falta de vigor y ajustar el abonado nitrogenado, evitando excesos que favorezcan la masa foliar en detrimento de la acumulación de sacarosa en la raíz. El control del riego evita el estrés hídrico que detiene la acumulación de reservas.\n\n[Optimizar Remolacha](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['arrozal', 'delta', 'marismas', 'inundacion controlada'],
    response: 'La gestión del **Arrozal** moderno requiere telemetría de nivel de agua y conductividad. \n\nNuestras sondas LoRaWAN detectan la intrusión salina en las tablas y notifican al agricultor para renovar el agua de inundación. Esto protege el cultivo en las fases críticas de ahijado y paniculación, garantizando un rendimiento homogéneo en toda la superficie.\n\n[Sensores para Arroz](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['mango', 'chirimoya', 'tropicales', 'costa tropical', 'axarquia'],
    response: 'Los **Cultivos Tropicales** en la península exigen un control térmico riguroso. \n\nMonitoreamos la Integral Térmica para predecir los picos de floración y cuajado. Los sensores de humedad foliar detectan la saturación ambiental que favorece la aparición de hongos en flores, permitiendo tratamientos quirúrgicos y profilácticos de alta eficacia.\n\n[Gestión de Tropicales](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['pimiento', 'berenjena', 'invernadero intensivo', 'almeria'],
    response: 'En el **Poniente Almeriense**, la integración de sensores de sustrato y clima es la norma. \n\nControlamos el drenaje volumétrico y la CE del lixiviado para que la planta de pimiento o berenjena nunca sufra bloqueos nutricionales. La automatización del clima basada en sensores PAR y VPD garantiza una producción constante durante todo el invierno.\n\n[Sistemas para Invernadero](/sensores/planta)',
    link: '/sensores/planta'
  },
  {
    isTechnical: true,
    keywords: ['xylella fastidiosa', 'seca del olivo', 'chicharrita', 'vector'],
    response: 'La lucha contra la **Xylella** es preventiva. \n\nUtilizamos teledetección satelital para identificar "stress" hídrico temprano en parcelas de olivar y almendro, permitiendo a los servicios de sanidad vegetal actuar antes de que los síntomas sean visuales. El cuaderno digital vincula los tratamientos contra el vector (el Philaenus spumarius) con coordenadas GPS exactas.\n\n[Más sobre Bioseguridad](/cuaderno)',
    link: '/cuaderno'
  },
  {
    isTechnical: true,
    keywords: ['verticilosis', 'verticillium dahliae', 'olivar seco'],
    response: 'El **Verticillium** se propaga por el agua y el suelo. \n\nNuestras sondas de humedad multicapa detectan zonas de saturación hídrica prolongada (encharcamiento), que son el caldo de cultivo ideal para el hongo. Al optimizar el riego y evitar el exceso de humedad radicular, reducimos drásticamente la tasa de infección y propagación del hongo vascular.\n\n[Prevención de Verticilosis](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['repilo del olivo', 'spilocaea oleaginea', 'caida de hoja'],
    response: 'El control del **Repilo** se basa en el sensor de humectación foliar. \n\nEl hongo necesita horas de hoja mojada y temperaturas suaves para germinar. El sistema calcula el riesgo real tras cada lluvia o rocío denso, notificando al agricultor si es necesario aplicar cobre o fungicidas sistémicos, eliminando aplicaciones innecesarias en años secos.\n\n[Alertas de Repilo](/sinergias/ipmwise)',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['plasmopara viticola', 'ceniza viña'],
    response: 'En el **Viñedo**, el Mildiu y el Oídio son las amenazas constantes. \n\nIPMWise utiliza los datos de nuestras estaciones meteorológicas para modelizar la germinación de esporas según la regla de los "3 dieces". Recibe alertas preventivas para proteger tu viña solo cuando el clima lo exige, ahorrando costes y mejorando la sostenibilidad de la bodega.\n\n[Modelos Predictivos Viñedo](/sinergias/ipmwise)',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['tetranychus', 'acaros'],
    response: 'La **Araña Roja** detona con baja humedad relativa y altas temperaturas. \n\nNuestras estaciones de clima detectan las condiciones de explosión demográfica del ácaro antes de ver la defoliación. Esto permite aplicar tratamientos de contacto o liberar fauna auxiliar en el momento exacto de máxima vulnerabilidad de la plaga.\n\n[Control de Ácaros](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['pulgon', 'aphids', 'negrilla'],
    response: 'El **Pulgón** se monitoriza mediante la detección de brotes tiernos y clima favorable. \n\nEl sistema integra datos de crecimiento vegetativo vía satélite (NDVI) con temperaturas medias, alertando sobre zonas con alta probabilidad de colonización. La intervención temprana evita la aparición de la negrilla y la transmisión de virus fitopatógenos.\n\n[Alertas de Plagas](/sinergias/ipmwise)',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['potencial hidrico', 'lwp', 'leaf water potential'],
    response: 'El **Potencial Hídrico de Tallo/Hoja** es el "estándar de oro" de la fisiología vegetal. \n\nIndica la tensión real con la que la planta retiene el agua. Valores inferiores a -1.2 MPa en olivar indican inicio de estrés. Cruzamos este dato con la humedad del suelo para determinar el "punto de riego" fisiológico exacto, maximizando la eficiencia hídrica.\n\n[Consultoría Técnica](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['conductividad electrica', 'ce', 'salinidad suelo', 'ms/cm'],
    response: 'La **CE (Conductividad Eléctrica)** en el extracto saturado mide la carga de sales del bulbo. \n\nNuestras sondas de suelo calculan la CE aparente y la convierten en CE de poro. Si los valores superan los 2.0 mS/cm en cultivos sensibles (como frambuesa), el sistema recomienda un riego de lavado con mayor volumen para desplazar las sales fuera de la rizosfera.\n\n[Ver Sensores NPK/CE](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['deficit presion vapor', 'vpd', 'humedad relativa', 'transpiracion'],
    response: 'El **VPD (Vapor Pressure Deficit)** es el motor de la transpiración. \n\nValores de VPD superiores a 3 kpa bloquean los estomas de la mayoría de cultivos leñosos, deteniendo la fotosíntesis aunque haya agua en el suelo. Utilizamos este dato para recomendar riegos por pulsos que refresquen el microclima y mantengan el árbol productivo durante las horas centrales del día.\n\n[Estaciones Climáticas](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['evapotranspiracion', 'et0', 'kc'],
    response: 'Calculamos la **ETc (Evapotranspiración del cultivo)** basándonos en la ET0 de referencia multiplicada por el Kc fenológico específico. \n\nEsto nos dice exactamente cuántos litros ha consumido tu parcela hoy. Ajustamos el riego para reponer solo la pérdida hídrica calculada, evitando la lixiviación de fertilizantes y el desperdicio de agua por filtración profunda.\n\n[Calculadora Hídrica](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['acumulacion calor', 'gda'],
    response: 'La **Integral Térmica** (Grados Día Acumulados) dicta el desarrollo biológico. \n\nDesde el fin del letargo invernal, sumamos las temperaturas eficaces para predecir con un error < 48h el momento de floración, cuajado o eclosión de plagas. Es la base de la agricultura predictiva moderna.\n\n[Modelos Agronómicos](/sinergias/ipmwise)',
    link: '/sinergias/ipmwise'
  },
  {
    isTechnical: true,
    keywords: ['solucion nutritiva', 'hidroponia formulacion', 'solucion madre', 'nitrato potasico', 'sulfato magnesico', 'quelato hierro'],
    response: 'La formulación de **Soluciones Nutritivas** en hidroponía requiere el control de la relación Nitrógeno/Potasio. \n\nPara cultivo de tomate, una solución estándar balanceada incluye: Nitrato Potásico (700g/m3), Sulfato Magnésico (500g/m3) y Quelato de Hierro EDDHA (20g/m3). Nuestras sondas de inyección controlan que la CE de la solución final se mantenga en 2.2-2.5 mS/cm, evitando la precipitación de sales y garantizando la biodisponibilidad de micronutrientes.\n\n[Formulación Avanzada](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['ph del agua', 'acidificacion', 'acido nitrico', 'acido fosforico'],
    response: 'El **pH del agua de riego** ideal para la mayoría de cultivos oscila entre 5.8 y 6.2. \n\nSi el agua es alcalina (carbonatos), recomendamos la inyección de ácido nítrico o fosfórico. Un pH superior a 7.5 bloquea la absorción de Fósforo y Hierro, provocando clorosis férrica. Nuestras sondas de pH integradas en el cabezal de riego automatizan esta corrección para mantener el equilibrio químico del suelo.\n\n[Control de pH](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['triangulo de texturas', 'suelo franco', 'arcilloso', 'limoso', 'arenoso'],
    response: 'El **Triángulo de Texturas de la USDA** clasifica los suelos según su porcentaje de Arena, Limo y Arcilla. \n\n- **Suelo Arenoso:** Drenaje rápido, baja retención de nutrientes. Requiere riegos cortos y frecuentes.\n- **Suelo Arcilloso:** Alta retención hídrica, peligro de asfixia radicular (anoxia). Requiere riegos largos y espaciados.\n- **Suelo Franco:** El equilibrio ideal para la mayoría de leñosos.\n\nConfiguramos la capacidad de campo y el punto de marchitez permanente (PMP) en tu SmartAgro según tu análisis de laboratorio.\n\n[Analizar mi Suelo](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['capacidad de intercambio cationico', 'cic', 'absorcion nutrientes'],
    response: 'La **Capacidad de Intercambio Catiónico (CIC)** mide la habilidad del suelo para retener cationes (K+, Ca++, Mg++, NH4+). \n\nSuelos con alta CIC (arcillosos o con mucha materia orgánica) actúan como una despensa de nutrientes. Monitoreamos la lixiviación mediante sondas de succión para asegurar que los fertilizantes no se pierdan por debajo de la zona radicular, protegiendo los acuíferos y tu bolsillo.\n\n[Ingeniería de Suelos](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['radiacion par', 'fotosintesis activa', 'micromoles', 'lujo solar', 'dli'],
    response: 'La **Radiación Fotosintéticamente Activa (PAR)** se mide en micromoles por metro cuadrado por segundo (µmol/m²/s). \n\nPara un cultivo de pimiento bajo plástico, el DLI (Daily Light Integral) óptimo es de 20-30 mol/m²/día. Si el sensor PAR detecta exceso de radiación, el sistema recomienda el uso de mallas de sombreo para evitar el estrés térmico y la inhibición de la fotosíntesis.\n\n[Sensores PAR](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['co2 invernadero', 'enriquecimiento carbónico', 'partes por millón'],
    response: 'El **Enriquecimiento con CO2** en invernaderos cerrados puede aumentar el rendimiento hasta un 30%. \n\nMantenemos niveles de 800-1000 ppm de CO2 durante las horas de máxima radiación, siempre monitorizando que el VPD no sea excesivo, para asegurar que los estomas están abiertos y la planta puede asimilar el carbono inyectado.\n\n[Control Atmosférico](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['caudalímetro', 'gestión de agua', 'telemetría riego'],
    response: 'La instalación de **Caudalímetros de Pulsos** es vital para auditar tu sistema de riego. \n\nCruzamos el dato de litros reales inyectados con la humedad detectada por las sondas FDR. Si hay mucha agua aplicada pero poca humedad registrada, el sistema genera una alerta por rotura de tubería o filtración profunda fuera del bulbo radicular. \n\n[Auditoría Hídrica](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['pmp', 'capacidad de campo', 'fraccion de lavado'],
    response: 'La zona de **Agua Útil (AU)** se encuentra entre la Capacidad de Campo y el Punto de Marchitez. \n\nEn agricultura de precisión, regamos cuando nos acercamos al 50% del Agua Útil para evitar que la planta realice un esfuerzo de succión excesivo. Calculamos la Fracción de Lavado necesaria según la calidad del agua de tu pozo para desplazar el frente de sales.\n\n[Calculadora Agrológica](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['camara frigorifica', 'etileno', 'calidad postcosecha'],
    response: 'La **Conservación en Frío** de fruta de hueso requiere el control del etileno. \n\nMonitorizamos la temperatura del aire y la humedad relativa dentro de la cámara para evitar la deshidratación del fruto (pérdida de peso). Un control preciso del punto de rocío previene la condensación sobre la fruta, foco principal de podredumbres de post-cosecha.\n\n[Sensores de Almacenamiento](/sensores/clima)',
    link: '/sensores/clima'
  },
  {
    isTechnical: true,
    keywords: ['problema sensor', 'no envía datos', 'fallo lectura', 'error telemetría', 'lora no conecta', 'batería baja'],
    response: 'Si un sensor ha dejado de informar a SmartAgro, sigue este protocolo de ingeniería:\n\n1. **Verificación de Enlace:** Comprueba si el Gateway LoRaWAN está encendido y tiene conexión a internet. El 90% de los fallos se deben a microcortes de corriente en la finca.\n2. **Inspección Visual:** Verifica que el sensor no haya sido golpeado por maquinaria o que el cable de la sonda FDR no esté dañado.\n3. **Carga de Batería:** En periodos de niebla prolongada, el panel solar podría no cargar lo suficiente. Consulta el nivel de voltaje en tu panel de control.\n\n[Guía de Soporte Técnico](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['calibracion sensor', 'ajuste lectura', 'error humedad'],
    response: 'La **Calibración de Campo** es vital para ajustar el sensor a la densidad aparente de tu suelo. \n\nSi detectas que la lectura de humedad "no se mueve" tras un riego, es posible que haya bolsas de aire en la instalación. Recomendamos compactar el suelo alrededor de la sonda o reinstalarla con lodo de la propia finca para garantizar un contacto íntimo entre el sensor y el terreno.\n\n[Manual de Instalación](/guia-sensores)',
    link: '/guia-sensores'
  },
  {
    isTechnical: true,
    keywords: ['humedad muy alta', 'suelo encharcado', 'asfixia radicular'],
    response: 'Una **Humedad Constante en Saturación** (cercana a capacidad de campo) durante más de 48h es peligrosa para leñosos. \n\nIndica falta de drenaje o exceso de riego. La falta de oxígeno detiene la respiración radicular, provocando la muerte de los pelos absorbentes y favoreciendo patógenos como la Rosellinia o Phytophthora. Te recomendamos detener el riego inmediatamente y abrir calicatas para verificar el estado de las raíces.\n\n[Ver Sensores de Oxígeno](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['humedad muy baja', 'punto de marchitez', 'estrés hídrico severo'],
    response: 'Si la lectura cae por debajo del **Punto de Marchitez Permanente (PMP)**, el daño puede ser irreversible. \n\nLa planta entra en plasmólisis y pierde la capacidad de recuperar la turgencia. En estos casos, el riego de socorro debe ser pausado (pulsos cortos) para permitir que el suelo recupere su capacidad de imbibición sin generar escorrentía superficial.\n\n[Calculadora de Riego](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['mantenimiento estaciones', 'limpieza pluviometro', 'limpieza sensores'],
    response: 'El **Mantenimiento Preventivo** asegura la precisión de tus datos:\n\n1. **Pluviómetros:** Deben limpiarse de hojas, insectos o suciedad una vez cada trimestre para evitar lecturas falsas.\n2. **Sensores de Planta:** Verifica que el dendrómetro no esté estrangulando el tronco por el crecimiento del árbol.\n3. **Paneles Solares:** Límpialos de polvo o excrementos de pájaros para garantizar la autonomía energética.\n\n[Plan de Mantenimiento Anual](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['glosario', 'diccionario tecnico', 'que significa', 'terminos'],
    response: 'Aquí tienes los conceptos clave que manejamos en Smart Fénix:\n\n- **FDR (Frequency Domain Reflectometry):** Tecnología de nuestras sondas para medir humedad.\n- **LoRaWAN:** Protocolo de comunicación de largo alcance y bajo consumo.\n- **NDVI:** Índice de vegetación que mide el vigor de la planta mediante satélite.\n- **Fertirrigación:** Aplicación de abonos a través del agua de riego.\n- **Bulbo Hídrico:** Zona de suelo que se humedece bajo el gotero.\n\n[Explorar Biblioteca Técnica](/guia-sensores)',
    link: '/guia-sensores'
  },
  {
    isTechnical: true,
    keywords: ['tabla npk', 'necesidades nitrogeno', 'necesidades potasio', 'necesidades fosforo'],
    response: 'Aquí tienes la tabla de necesidades de extracción de macronutrientes (kg/t de cosecha) para los principales cultivos:\n\n- **Olivo:** N (15), P2O5 (5), K2O (20)\n- **Almendro:** N (25), P2O5 (7), K2O (35)\n- **Cítricos:** N (18), P2O5 (6), K2O (22)\n- **Tomate:** N (2.5), P2O5 (0.8), K2O (4.0)\n\nRecuerda ajustar estos valores según el coeficiente de aprovechamiento de tu sistema de riego y la riqueza de tu suelo.\n\n[Calculadora Fertirrigación](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['tabla tension suelo', 'kilopascales', 'centibares', 'estres hidrico tabla'],
    response: 'Interpretación de niveles de succión en **Tensiómetros (kPa/cb):**\n\n- **0-10 kPa:** Suelo saturado (peligro de asfixia).\n- **10-30 kPa:** Capacidad de campo (ideal para la mayoría de cultivos).\n- **30-60 kPa:** Inicio de estrés moderado (momento de riego en hortícolas).\n- **60-100 kPa:** Estrés severo (límite para leñosos en fase crítica).\n- **>200 kPa:** Suelo seco (peligro de muerte radicular).\n\n[Ver Sensores de Tensión](/sensores/suelo-tensio-precision)',
    link: '/sensores/suelo-tensio-precision'
  },
  {
    isTechnical: true,
    keywords: ['grados dia', 'integral termica', 'modelo plagas', 'predecir plaga'],
    response: 'El **Cálculo de Grados-Día (GD)** permite predecir el ciclo biológico de las plagas:\n\n- **Prays del Olivo:** El pico de generación carpófaga se produce a los 400 GD (Base 10ºC).\n- **Lobesia botrana (Polilla vid):** Inicio de vuelo a los 120 GD desde el 1 de enero.\n- **Ceratitis capitata (Mosca fruta):** Desarrollo óptimo a 25ºC, detención a <10ºC.\n\nMonitorizamos la temperatura horaria para que recibas la alerta de tratamiento justo antes de que se produzca el daño.\n\n[Servicio de Alertas](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['plagas olivar', 'mosca del olivo', 'bactrocera oleae', 'prays', 'repilo'],
    response: 'La **Mosca del Olivo** (*Bactrocera oleae*) es la plaga más limitante. \n\nRecomendamos el trampeo electrónico para monitorizar la curva de vuelo. Si la Integral Térmica supera los 250 GD, el riesgo de picada aumenta. Para el **Repilo**, la clave es el sensor de humedad foliar; si detecta más de 12h de hoja mojada con >15ºC, aplica un tratamiento preventivo cúprico. \n\n[Protección de Olivares](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['plagas viñedo', 'mildiu', 'oidio', 'botrytis', 'filoxera'],
    response: 'En el **Viñedo**, el **Mildiu** y el **Oídio** se gestionan mediante modelos predictivos. \n\nConfiguramos alertas de "Regla de los tres dieces" para Mildiu (10cm de brote, 10ºC temp, 10mm lluvia). Para la **Botrytis**, el control del vigor mediante NDVI es fundamental; un exceso de masa foliar impide la aireación del racimo, creando el microclima ideal para el hongo. \n\n[Viticultura Sanitaria](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['plagas citricos', 'piojo rojo california', 'araña roja', 'trips citricos'],
    response: 'Los **Cítricos** sufren el ataque del **Piojo Rojo de California**. \n\nLa suelta de fauna útil (*Aphytis*) es más efectiva si la monitorizamos con estaciones climáticas que aseguren que la temperatura no baja de 15ºC, momento en que el caracol es activo. El control del estrés hídrico mediante sondas FDR reduce la caída de frutos por ataque de araña roja en verano.\n\n[Citricultura de Precisión](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['plagas almendro', 'mancha bacteriana', 'avispilla almendro', 'monilia'],
    response: 'La **Avispilla del Almendro** requiere un control riguroso del momento de emergencia. \n\nUtilizamos sensores de temperatura acumulada para determinar la salida de los adultos de las almendras "momificadas". Para la **Monilia**, el control de la humedad ambiental durante la floración mediante estaciones LoRaWAN permite realizar tratamientos quirúrgicos de alta eficacia.\n\n[Sanidad en Almendro](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['plagas aguacate', 'cristalina', 'acaros aguacate', 'phytophthora cinnamomi'],
    response: 'En **Aguacate**, la **Phytophthora** es el enemigo número uno. \n\nEs fundamental que el suelo nunca alcance la saturación prolongada. Nuestras sondas a 30 y 60cm nos alertan si el drenaje es deficiente. El control de la salinidad evita la quemadura de las puntas de las hojas, que debilita al árbol frente a los ácaros cristalinos.\n\n[Gestión de Tropicales](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['fao 56', 'penman-monteith', 'evapotranspiracion ref', 'eto', 'etc', 'coeficiente cultivo'],
    response: 'El modelo **FAO-56 Penman-Monteith** es el estándar mundial para el cálculo de la Evapotranspiración de Referencia (ETo). \n\nCalculamos la ETc (Evapotranspiración del Cultivo) multiplicando la ETo por el Kc (coeficiente de cultivo) específico de cada fase fenológica. Esto permite determinar la lámina de riego teórica necesaria para reponer exactamente lo que la planta ha transpirado, optimizando el uso de energía y agua.\n\n[Calculadora ETc](/herramientas/calculadora-roi)',
    link: '/herramientas/calculadora-roi'
  },
  {
    isTechnical: true,
    keywords: ['agua util', 'agua disponible', 'capacidad de campo tabla', 'textura y agua'],
    response: 'Capacidad de Retención de Agua según **Textura del Suelo (mm/m):**\n\n- **Arena:** 30 - 60 mm/m\n- **Franco Arenoso:** 60 - 100 mm/m\n- **Franco:** 100 - 180 mm/m\n- **Franco Arcilloso:** 140 - 210 mm/m\n- **Arcilla:** 160 - 250 mm/m\n\nConfiguramos estos coeficientes en tu sistema Smart Fénix para que las alertas de riego se ajusten a la reserva real de tu parcela.\n\n[Ingeniería de Suelos](/sensores/suelo)',
    link: '/sensores/suelo'
  },
  {
    isTechnical: true,
    keywords: ['productividad del agua', 'water productivity', 'kg por m3', 'eficiencia uso agua'],
    response: 'La **Productividad del Agua (WP)** mide cuántos kilos de cosecha produces por cada metro cúbico bombeado. \n\nEn el almendro de alta densidad, pasar de una WP de 0.8 kg/m3 a 1.2 kg/m3 puede suponer la diferencia entre la rentabilidad y las pérdidas. Monitorizamos el consumo real mediante telemetría para que puedas presumir de una huella hídrica mínima y una rentabilidad máxima.\n\n[Optimizar Rendimiento](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['compactacion suelo', 'resistencia penetracion', 'suelo sellado', 'costra superficial'],
    response: 'La **Compactación del Suelo** impide el desarrollo radicular y la infiltración. \n\nSi tus sensores de humedad muestran que el agua no baja de los primeros 10cm tras un riego largo, tienes un problema de compactación o sellado superficial. Recomendamos el uso de descompactadores o la incorporación de materia orgánica para mejorar la porosidad y permitir que el aire llegue a las raíces.\n\n[Consultoría de Suelos](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['extracto saturado', 'ce de extracto', 'salinidad radicular'],
    response: 'La **Conductividad Eléctrica del Extracto de Saturación (CEe)** es la medida real de la salinidad que "siente" la raíz. \n\nNuestras sondas de succión permiten extraer agua del suelo para analizar la concentración de sales en el laboratorio de campo. Mantener la CEe por debajo del umbral crítico de tu cultivo (ej: 2.5 dS/m en cítricos) evita la toxicidad por cloruros y el estrés osmótico.\n\n[Ver Sondas de Succión](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['perdida de carga', 'presion riego', 'darcy-weisbach', 'hazen-williams', 'calculo tuberias'],
    response: 'El cálculo de la **Pérdida de Carga** es esencial para dimensionar tu red de riego. \n\nUtilizamos la fórmula de **Hazen-Williams** para estimar la fricción en tuberías de PVC y PE. Si la presión en punta de rama cae por debajo de 1 bar, los goteros autocompensantes dejarán de ser uniformes. Monitorizamos la presión a la salida del cabezal para detectar obturaciones en filtros o fugas importantes en la red principal.\n\n[Auditoría de Presión](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['potencia bomba', 'eficiencia bombeo', 'consumo electrico riego', 'kw h'],
    response: 'La **Eficiencia Energética** del bombeo depende del punto de trabajo de la bomba. \n\nCalculamos la Potencia Absorbida (kW) en función del caudal (Q) y la Altura Manométrica Total (HMT). Integrar variadores de frecuencia controlados por nuestros sensores de presión permite ahorrar hasta un 40% en tu factura eléctrica al ajustar el bombeo a la demanda real de los sectores de riego.\n\n[Optimizar Bombeo](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['compatibilidad abonos', 'mezcla tanques', 'precipitacion calcio', 'sulfato y calcio'],
    response: 'La **Compatibilidad de Fertilizantes** en el tanque de mezcla es crítica. \n\nNunca mezcles Nitrato de Calcio con Sulfatos o Fosfatos en concentraciones altas, ya que precipitará Yeso (Sulfato Cálcico) o Fosfato Cálcico, obstruyendo irreversiblemente tus goteros. Recomendamos el uso de tanques separados (A y B) y un control estricto del pH en el tanque de mezcla para mantener las sales en solución.\n\n[Guía de Mezclas](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: true,
    keywords: ['agricultura regenerativa', 'suelo vivo', 'microbiologia suelo', 'materia organica'],
    response: 'La **Agricultura Regenerativa** busca restaurar la salud del ecosistema del suelo. \n\nNo solo medimos la humedad, sino que fomentamos la microbiología activa mediante el uso de cubiertas vegetales y abonos orgánicos fermentados. Un suelo con alto contenido en materia orgánica retiene hasta un 20% más de agua, reduciendo el estrés hídrico y la dependencia de fertilizantes de síntesis química.\n\n[Regenerar mi Finca](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
  },
  {
    isTechnical: true,
    keywords: ['secuestro de carbono', 'huella de carbono agro', 'bonos de carbono'],
    response: 'Tu explotación puede ser un sumidero de **Carbono**. \n\nLa fijación de carbono orgánico en el suelo mediante el "No Laboreo" y las cubiertas permanentes permite acceder al mercado de bonos de carbono. Monitorizamos la evolución de la estructura del suelo para cuantificar estas capturas y certificar tu contribución a la lucha contra el cambio climático.\n\n[Certificación de Carbono](/contacto)',
    link: '/contacto'
  },
  {
    isTechnical: true,
    keywords: ['algoritmo fertirriego', 'dosificacion variable', 'prescripcion fertilizado', 'cuaderno siex', 'real decreto nutricion sostenible', 'gestion siex', 'asesoramiento siex'],
    response: 'Nuestros **Algoritmos de Prescripción** calculan la dosis exacta de NPK basándose en:\n\n1. Análisis previo de suelo.\n2. Extracciones según previsión de cosecha.\n3. Aportes del agua de riego (nitratos/sulfatos).\n\nEsto evita el lavado de nitratos y optimiza el coste por kilo producido, cumpliendo estrictamente con el Real Decreto de Nutrición Sostenible de Suelos Agrarios y facilitando la gestión de tu **Cuaderno de Campo Digital (SIEX)**.\n\n[Optimizar Fertirriego](/sensores/suelo-ph-precision)',
    link: '/sensores/suelo-ph-precision'
  },
  {
    isTechnical: false,
    keywords: ['servicios', 'que haceis', 'asesoramiento', 'consultoria', 'ingenieria', 'proyectos'],
    response: 'En Smart Fénix ofrecemos soluciones integrales para la agricultura de precisión:\n\n- **Sensores:** Monitorización avanzada de suelo, clima y planta.\n- **Software:** Plataforma intuitiva para la toma de decisiones.\n- **Ingeniería Agronómica:** Asesoramiento experto y personalizado.\n- **Instalación y Mantenimiento:** Servicio técnico garantizado.\n\nNuestro objetivo es maximizar tu rentabilidad y sostenibilidad.\n\n[Ver todos los Servicios](/soluciones/agricultores)',
    link: '/soluciones/agricultores'
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
    .replace(/\b(como|donde|cuando|pero|porque|y|o|el|la|los|las|un|una|que|k|de|mis|mi|a|en|por|con|para|del|al|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre|pues|mira|oye|digamos|sabes|quiero|saber|dime|ver|hay|son|claro|si|vale)\b/g, '')
    .trim()
    .replace(/\s+/g, ' ');

  // Padding de seguridad para detección por palabras (evita sub-palabras como asco en vasco)
  const cleanMsg = ' ' + rawClean + ' ';

  let foundMatch = null;
  let maxMatches = 0;

  // Lógica de Fuzzy Match Manual: quitar última letra de palabras largas (>5 chars)
  const fuzzyMsg = ' ' + rawClean.split(/\s+/).map((w: any) => w.length > 5 ? w.slice(0, -1) : w).join(' ') + ' ';

  const NOISE_WORDS = ['de', 'la', 'el', 'en', 'por', 'con', 'para', 'mi', 'me', 'te', 'se', 'lo', 'los', 'las', 'un', 'una', 'unos', 'unas', 'que', 'si', 'y', 'o', 'u', 'a', 'al', 'del', 'su', 'sus', 'tu', 'tus', 'hola', 'buenas', 'tardes', 'dias', 'noches', 'adios', 'hasta', 'luego', 'ayuda', 'ayudar', 'informacion', 'necesito', 'necesitar', 'donde', 'duda', 'saber', 'quiero', 'ver', 'dime', 'sobre', 'mas', 'esta', 'cosa', 'mal', 'asco', 'tiempo', 'vaya', 'mierda', 'leyes', 'inicio', 'todos', 'lista', 'cuales', 'ofreceis', 'modelos', 'variedad', 'stock', 'gama', 'tipos', 'aprender', 'novedades', 'blog', 'leer', 'articulos', 'noticias', 'actualidad', 'finca', 'campo', 'agricola', 'fincas', 'problema', 'que hago', 'solucion', 'gracias', 'tema', 'favor', 'puedes', 'hacer', 'algo', 'tal', 'pasa', 'buen', 'buenos', 'mejor', 'tengo', 'tiene', 'tienes', 'hectareas', 'hectarea', 'cuantas', 'muchas', 'pocas', 'explotacion', 'explotaciones', 'cultivo', 'trabajas', 'manzano', 'manzanos'];

  const normalize = (text: string) => {
    return text.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[.,?!¿¡]/g, '')
      .replace(/\b(como|donde|cuando|pero|porque|y|o|el|la|los|las|un|una|que|k|de|mis|mi|a|en|por|con|para|del|al|lo|su|sus|tu|tus|te|se|me|sin|sobre|desde|hasta|hacia|contra|ante|bajo|entre|pues|mira|oye|digamos|sabes|quiero|saber|dime|ver|hay|son|claro|si|vale)\b/g, '')
      .trim()
      .replace(/\s+/g, ' ');
  };

  // Lógica de búsqueda INVERSA (Prioridad Alta a los últimos elementos del array técnico)
  for (let i = LOCAL_KNOWLEDGE.length - 1; i >= 0; i--) {
    const item = LOCAL_KNOWLEDGE[i] as any;
    // Calibración de Scoring: Priorizamos palabras más largas y específicas
    let score = 0;
    item.keywords.forEach((kw: string) => {
      const normalizedKw = normalize(kw);
      if (!normalizedKw) return;
      
      if (cleanMsg.includes(' ' + normalizedKw + ' ') || fuzzyMsg.includes(' ' + normalizedKw + ' ')) {
        // Usamos el máximo para asegurar que la palabra más específica gana, no la suma de pequeñas
        let kwScore = Math.pow(normalizedKw.length, 2);
        // Penalizamos palabras auxiliares que podrían opacar términos técnicos específicos (ej: "ayúdame con mi cue")
        if (['ayuda', 'ayudame', 'ayudar', 'asistencia', 'soporte', 'informacion', 'necesito'].includes(normalizedKw)) {
          kwScore = 1; 
        }
        if (kwScore > score) score = kwScore;
      }
    });

    // QA: Si el mensaje de usuario es muy corto (< 3 letras), ignoramos y vamos a Fallback/Saludo
    // Pero permitimos si es una palabra técnica corta si coincide exactamente
    if (rawClean.length < 3 && !item.keywords.some((kw: string) => normalize(kw) === rawClean)) {
      continue;
    }

    // Mejora del scoring: isTechnical da un pequeño extra si hay empate en longitud
    const technicalBoost = item.isTechnical ? 1 : 0;
    const finalScore = score > 0 ? score + technicalBoost : 0;

    if (finalScore > maxMatches && finalScore > 0) {
      maxMatches = finalScore;
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