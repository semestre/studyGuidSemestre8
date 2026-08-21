// Requerimientos flashcard data
// "definitions" = Taxonomía de Requerimientos (title = tipo, subtitle = clave, description = definición)
const REQUERIMIENTOS_DEFINITIONS = [
  { id: 1, title: "Requerimiento Funcional", subtitle: "FR", description: "Especifica una acción, función o servicio concreto que el sistema debe realizar (\"el sistema debe...\", \"permitir...\")." },
  { id: 2, title: "Requerimiento No Funcional", subtitle: "NFR", description: "Especifica un atributo de calidad de cómo debe comportarse el sistema: rendimiento, seguridad, disponibilidad, fiabilidad, escalabilidad, etc." },
  { id: 3, title: "Requerimiento de Usuario", subtitle: "UR", description: "Expresa una necesidad desde la perspectiva del usuario final, típicamente en primera persona (\"quiero...\", \"como usuario...\")." },
  { id: 4, title: "Requerimiento de Negocio", subtitle: "BR", description: "Refleja un objetivo estratégico o meta medible de la organización (aumentar ventas, reducir costos, expandirse a mercados)." },
  { id: 5, title: "Regla de Negocio", subtitle: "BRule", description: "Política, condición o umbral específico que gobierna una operación del negocio (límites, porcentajes, condiciones de elegibilidad)." },
  { id: 6, title: "Requerimiento de Dominio", subtitle: "DR", description: "Se deriva del conocimiento propio de un área o industria: terminología, cálculos o normas específicas del sector (no de un deseo directo del usuario)." },
  { id: 7, title: "Requerimiento de Interfaz / UX", subtitle: "UX", description: "Especifica cómo interactúa el usuario con el sistema: elementos visuales, diálogos, retroalimentación en pantalla." },
  { id: 8, title: "Requerimiento de Restricción / Técnico", subtitle: "TR", description: "Limitación impuesta al proyecto o al sistema por factores externos: tecnología obligatoria, presupuesto, personal, infraestructura, cumplimiento normativo." },
  { id: 9, title: "Requerimiento de Proceso / Metodológico", subtitle: "PR", description: "Define cómo debe gestionarse el desarrollo: métodos, herramientas de gestión, trazabilidad, prácticas ágiles." }
];

// "examples" = Requerimientos clasificados (1-50, orden numérico) with reasoning — pending PDF
const REQUERIMIENTOS_EXAMPLES = [];

// 1.2 Técnicas de Elicitación de Requerimientos
const REQUERIMIENTOS_TECNICAS_ELICITACION = [
  { id: 1, title: "Entrevistas", subtitle: "Diálogo directo (estructurado o no) entre el analista y el stakeholder mediante preguntas.", description: "Diálogo directo (estructurado o no) entre el analista y el stakeholder mediante preguntas. (Sommerville, 2011, cap. 4; Wiegers y Beatty, 2013, cap. 7)" },
  { id: 2, title: "JAD (Joint Application Design)", subtitle: "Sesiones grupales facilitadas para definir requerimientos de forma colaborativa.", description: "Sesiones grupales facilitadas donde usuarios, desarrolladores y stakeholders definen requerimientos de forma colaborativa e intensiva. Equivalen a los \"talleres facilitados\" que describen Wiegers y Beatty. (Wiegers y Beatty, 2013, cap. 7)" },
  { id: 3, title: "Cuestionario", subtitle: "Instrumento con preguntas cerradas/abiertas aplicado a un grupo amplio de usuarios.", description: "Instrumento con preguntas cerradas/abiertas aplicado a un grupo amplio de usuarios. (Wiegers y Beatty, 2013, cap. 7)" },
  { id: 4, title: "Etnografía (Observación)", subtitle: "El analista observa al usuario realizar sus tareas en su entorno real.", description: "El analista observa al usuario realizar sus tareas en su entorno real; útil cuando el usuario no puede explicar bien su propio proceso verbalmente. (Sommerville, 2011, cap. 4)" }
];

// 1.3 Ciclo de la Ingeniería de Requerimientos (Pressman) — 7 tareas, en orden
const REQUERIMIENTOS_CICLO_PRESSMAN = [
  { id: 1, title: "1. Concepción (Inception)", subtitle: "Se establece el alcance y la naturaleza general del problema.", description: "Se establece el alcance y la naturaleza general del problema. (Pressman, 2010, cap. 5)" },
  { id: 2, title: "2. Indagación / Elicitación", subtitle: "Se recopilan los requerimientos directamente de los stakeholders.", description: "Se recopilan los requerimientos directamente de los stakeholders. (Pressman, 2010, cap. 5)" },
  { id: 3, title: "3. Elaboración", subtitle: "Se refinan y detallan los requerimientos; se construyen modelos.", description: "Se refinan y detallan los requerimientos; se construyen modelos. (Pressman, 2010, cap. 5)" },
  { id: 4, title: "4. Negociación", subtitle: "Se resuelven conflictos entre requerimientos y se priorizan (ej. MoSCoW).", description: "Se resuelven conflictos entre requerimientos y se priorizan (ej. MoSCoW). (Pressman, 2010, cap. 5)" },
  { id: 5, title: "5. Especificación", subtitle: "Se documentan formalmente los requerimientos (ej. ERS/SRS).", description: "Se documentan formalmente los requerimientos (ej. ERS/SRS). (Pressman, 2010, cap. 5)" },
  { id: 6, title: "6. Validación", subtitle: "Se revisa que los requerimientos sean correctos, completos y consistentes.", description: "Se revisa que los requerimientos sean correctos, completos y consistentes. (Pressman, 2010, cap. 5)" },
  { id: 7, title: "7. Administración de Requerimientos", subtitle: "Se gestionan los cambios y la trazabilidad durante el proyecto.", description: "Se gestionan los cambios y la trazabilidad durante el proyecto. (Pressman, 2010, cap. 5)" }
];

// 1.4 Contenido de un Documento de Especificación (ERS/SRS)
const REQUERIMIENTOS_ERS_CONTENIDO = [
  { id: 1, title: "Introducción y alcance", subtitle: "Propósito del documento, alcance del sistema, definiciones generales.", description: "Propósito del documento, alcance del sistema, definiciones generales. (Wiegers y Beatty, 2013, cap. 10)" },
  { id: 2, title: "Requerimientos funcionales", subtitle: "Descripción detallada de lo que el sistema debe hacer.", description: "Descripción detallada de lo que el sistema debe hacer. (Wiegers y Beatty, 2013, cap. 10)" },
  { id: 3, title: "Atributos de calidad (no funcionales)", subtitle: "Rendimiento, seguridad, usabilidad, disponibilidad, etc.", description: "Rendimiento, seguridad, usabilidad, disponibilidad, etc. (Wiegers y Beatty, 2013, cap. 10)" },
  { id: 4, title: "Interfaces", subtitle: "Interfaces de usuario, hardware, software y comunicación.", description: "Interfaces de usuario, hardware, software y comunicación. (Wiegers y Beatty, 2013, cap. 10)" },
  { id: 5, title: "Modelos y glosario", subtitle: "Diagramas (casos de uso, entidad-relación) y definición de términos del dominio.", description: "Diagramas (casos de uso, entidad-relación) y definición de términos del dominio. (Wiegers y Beatty, 2013, cap. 10)" }
];

// 1.5 Criterios de Calidad de un Requerimiento (Validación)
const REQUERIMIENTOS_CRITERIOS_CALIDAD = [
  { id: 1, title: "Verificable", subtitle: "Se puede comprobar objetivamente si el requerimiento se cumple o no.", description: "Se puede comprobar objetivamente si el requerimiento se cumple o no. (Wiegers y Beatty, 2013, cap. 11)" },
  { id: 2, title: "Consistente", subtitle: "No contradice a otros requerimientos del mismo documento.", description: "No contradice a otros requerimientos del mismo documento. (Wiegers y Beatty, 2013, cap. 11)" },
  { id: 3, title: "Completo", subtitle: "Contiene toda la información necesaria, sin partes faltantes.", description: "Contiene toda la información necesaria, sin partes faltantes. (Wiegers y Beatty, 2013, cap. 11)" },
  { id: 4, title: "Factible", subtitle: "Es posible implementarlo con la tecnología y los recursos disponibles.", description: "Es posible implementarlo con la tecnología y los recursos disponibles. (Wiegers y Beatty, 2013, cap. 11)" },
  { id: 5, title: "Claro o inequívoco", subtitle: "Tiene una única interpretación posible; no da lugar a ambigüedad.", description: "Tiene una única interpretación posible; no da lugar a ambigüedad. (Wiegers y Beatty, 2013, cap. 11)" }
];
