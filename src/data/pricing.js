export const BASE_PROJECTS = [
  {
    id: 'landing-basic',
    name: 'Landing Page básica',
    description: 'Presencia online profesional y rápida para tu negocio.',
    price: 250000,
    badge: null,
    icon: 'Globe',
  },
  {
    id: 'landing-premium',
    name: 'Landing Premium',
    description: 'Diseño avanzado, animaciones y conversión optimizada.',
    price: 450000,
    badge: 'Más elegido',
    icon: 'Star',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Tienda online con catálogo, carrito y checkout integrado.',
    price: 950000,
    badge: null,
    icon: 'ShoppingCart',
  },
  {
    id: 'turnos',
    name: 'Sistema de Turnos',
    description: 'Reservas y gestión de citas online con recordatorios.',
    price: 700000,
    badge: 'Más elegido',
    icon: 'Calendar',
  },
  {
    id: 'stock',
    name: 'Sistema de Stock',
    description: 'Control de inventario y movimientos en tiempo real.',
    price: 850000,
    badge: null,
    icon: 'Package',
  },
  {
    id: 'crm',
    name: 'CRM Simple',
    description: 'Gestión de clientes, ventas y seguimiento comercial.',
    price: 1000000,
    badge: null,
    icon: 'Users',
  },
]

export const MODULES = [
  { id: 'contact-form', name: 'Formulario de contacto avanzado', price: 40000, icon: 'MessageSquare' },
  { id: 'whatsapp', name: 'Integración WhatsApp', price: 25000, icon: 'MessageCircle' },
  { id: 'blog', name: 'Blog / noticias', price: 80000, icon: 'FileText' },
  { id: 'admin-panel', name: 'Panel administrador', price: 150000, icon: 'LayoutDashboard' },
  { id: 'user-login', name: 'Login de usuarios', price: 120000, icon: 'Lock' },
  { id: 'mercadopago', name: 'Pasarela de pagos Mercado Pago', price: 100000, icon: 'CreditCard' },
  { id: 'afip', name: 'Integración AFIP / facturación', price: 285000, icon: 'Receipt' },
  { id: 'live-chat', name: 'Chat en vivo', price: 50000, icon: 'Headphones' },
  { id: 'seo', name: 'SEO inicial', price: 90000, icon: 'Search' },
  { id: 'hosting', name: 'Hosting + deploy inicial', price: 60000, icon: 'Server' },
]

export const EXTRAS = [
  { id: 'ux-design', name: 'Diseño UX/UI personalizado', price: 200000, icon: 'Palette' },
  { id: 'branding', name: 'Branding básico', price: 120000, icon: 'Pen' },
  { id: 'automations', name: 'Automatizaciones (email, recordatorios, etc.)', price: 150000, icon: 'Zap' },
  { id: 'analytics', name: 'Dashboard analytics', price: 130000, icon: 'BarChart3' },
]

export const IVA_RATE = 0.21
export const CONSULTING_THRESHOLD = 1500000

export const formatARS = (amount) =>
  `ARS ${new Intl.NumberFormat('es-AR').format(Math.round(amount))}`
