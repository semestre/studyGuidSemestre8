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
