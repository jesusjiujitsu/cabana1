export interface Review {
  name: string
  date: string
  occasion: string
  quote: string
}

export interface GalleryItem {
  src: string
  alt: string
}

export interface ExperienceChapter {
  number: string
  eyebrow: string
  title: string
  text: string
  image: string
  alt: string
}

export interface FactItem {
  iconName: 'Users' | 'BedDouble' | 'Bath' | 'Clock'
  label: string
  value: string
}

export interface AmenityItem {
  iconName: 'Waves' | 'Sun' | 'Flame' | 'ChefHat' | 'Wifi' | 'Car' | 'Heater' | 'WashingMachine'
  label: string
}

export interface CabinConfig {
  name: string
  locationShort: string
  locationFull: string
  hostName: string
  bookingUrl: string
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleEnd: string
    description: string
    image: string
    imageAlt: string
  }
  experience: {
    badge: string
    titleLead: string
    titleHighlight: string
    chapters: ExperienceChapter[]
  }
  moments: {
    badge: string
    titleLead: string
    titleHighlight: string
    description: string
    occasions: string[]
    images: {
      large: { src: string; alt: string }
      topRight: { src: string; alt: string }
      bottomRight: { src: string; alt: string }
    }
  }
  details: {
    badge: string
    title: string
    description: string
    facts: FactItem[]
    amenities: AmenityItem[]
    quote: string
  }
  finalCta: {
    badge: string
    titleLead: string
    titleHighlight: string
    description: string
    buttonText: string
    backgroundImage: string
  }
  reviews: Review[]
  gallery: GalleryItem[]
}

export const cabinConfig: CabinConfig = {
  name: 'Cabana Bruzamarello',
  locationShort: 'Viamão · Rio Grande do Sul',
  locationFull: 'Viamão · Rio Grande do Sul · Brasil',
  hostName: 'Karen Bruzamarello',
  bookingUrl: 'https://www.airbnb.com.br/rooms/1759699241268648857',

  hero: {
    badge: 'Um refúgio feito para dois',
    titleLead: 'Onde o tempo desacelera e ',
    titleHighlight: 'o amor',
    titleEnd: ' ganha vista.',
    description:
      'Uma cabana A-frame cercada de campo, com hidromassagem sob o teto de vidro, piscina e o pôr do sol acontecendo bem diante da sua varanda.',
    image: '/images/cabana-fachada.jpg',
    imageAlt: 'Cabana A-frame de madeira cercada de gramado e céu azul',
  },

  experience: {
    badge: 'A experiência',
    titleLead: 'Cada canto foi pensado para ser vivido ',
    titleHighlight: 'a dois',
    chapters: [
      {
        number: '01',
        eyebrow: 'A hidromassagem',
        title: 'Um banho quente sob o céu, com o campo inteiro do outro lado do vidro.',
        text: 'A banheira é grande — daquelas que os hóspedes fazem questão de citar. Teto de vidro, janelas amplas, duas taças e a luz dourada do fim de tarde. O resto do mundo pode esperar.',
        image: '/images/hidro-vista.jpg',
        alt: 'Hidromassagem com taças de vinho e vista para o verde',
      },
      {
        number: '02',
        eyebrow: 'A suíte',
        title: 'Acordar devagar, com a paisagem entrando pela parede de vidro.',
        text: 'Madeira aquecida, roupas de cama novas e uma janela que vai do chão ao teto. A cabana A-frame abraça o quarto como um esconderijo — e a vista faz o papel de obra de arte.',
        image: '/images/suite-panoramica.jpg',
        alt: 'Suíte com cama de casal e vista panorâmica do campo',
      },
      {
        number: '03',
        eyebrow: 'O entardecer',
        title: 'O pôr do sol acontece de frente para a varanda. Todos os dias.',
        text: 'Campos, montanhas ao longe e um silêncio que só o interior gaúcho sabe oferecer. A poucos minutos da cidade, mas longe o suficiente para você se desligar de verdade.',
        image: '/images/vista-campos.jpg',
        alt: 'Varanda de madeira com vista para campos e montanhas',
      },
      {
        number: '04',
        eyebrow: 'Ao ar livre',
        title: 'Piscina, pergolado e churrasqueira para dias sem pressa.',
        text: 'Um mergulho de tarde, um churrasco ao fim do dia, a mesa posta do lado de fora. Um dos poucos refúgios da região com piscina — e com espaço de sobra para aproveitar.',
        image: '/images/cabana-piscina.jpg',
        alt: 'Cabana com piscina, pergolado e área externa',
      },
    ],
  },

  moments: {
    badge: 'Momentos que ficam',
    titleLead: 'O cenário perfeito para dizer ',
    titleHighlight: '“sim”',
    description:
      'Pétalas sobre a cama, balões de coração, uma frase escrita para ser lembrada para sempre. A Cabana já foi palco de pedidos, aniversários e recomeços — e está pronta para guardar a sua história.',
    occasions: [
      'Pedidos de namoro',
      'Pedidos de casamento',
      'Aniversários',
      'Bodas',
      'Lua de mel',
      'Só porque sim',
    ],
    images: {
      large: {
        src: '/images/suite-namorar.jpg',
        alt: 'Cama com pétalas de rosa formando a frase Quer namorar comigo',
      },
      topRight: {
        src: '/images/decoracao-casa-comigo.jpg',
        alt: 'Suíte decorada com balões de coração e a frase Casa comigo',
      },
      bottomRight: {
        src: '/images/suite-pedido.jpg',
        alt: 'Detalhe romântico na cama',
      },
    },
  },

  details: {
    badge: 'O refúgio',
    title: 'Espaço inteiro, só para vocês.',
    description:
      'Uma cabana inteira em área rural tranquila de Viamão, na região metropolitana de Porto Alegre. Calma, cheia de estilo e pensada para quem quer aproveitar cada minuto com quem ama.',
    facts: [
      { iconName: 'Users', label: 'Hóspedes', value: '2 pessoas' },
      { iconName: 'BedDouble', label: 'Suíte', value: '1 quarto · cama de casal' },
      { iconName: 'Bath', label: 'Banheiros', value: '2 banheiros' },
      { iconName: 'Clock', label: 'Horários', value: 'Check-in 15h · Check-out 11h' },
    ],
    amenities: [
      { iconName: 'Waves', label: 'Banheira de hidromassagem' },
      { iconName: 'Sun', label: 'Piscina' },
      { iconName: 'Flame', label: 'Churrasqueira' },
      { iconName: 'ChefHat', label: 'Cozinha equipada' },
      { iconName: 'Wifi', label: 'Wi-Fi' },
      { iconName: 'Car', label: 'Estacionamento gratuito' },
      { iconName: 'Heater', label: 'Aquecedor' },
      { iconName: 'WashingMachine', label: 'Máquina de lavar' },
    ],
    quote: 'Um refúgio pensado nos mínimos detalhes para acolher histórias a dois.',
  },

  finalCta: {
    badge: 'Sua próxima memória',
    titleLead: 'Algumas viagens a gente faz. ',
    titleHighlight: 'Outras, a gente guarda.',
    description:
      'As datas são poucas e a cabana é só uma. Escolha o seu fim de semana e deixe o resto com a gente.',
    buttonText: 'Verificar datas disponíveis',
    backgroundImage: '/images/hidro-lareira.jpg',
  },

  reviews: [
    {
      name: 'Alana',
      date: 'Setembro de 2026',
      occasion: 'Aniversário a dois',
      quote:
        'Tive uma experiência muito especial ao passar meu aniversário nessa cabana. A hidro foi uma das nossas partes favoritas, assim como a vista maravilhosa e o pôr do sol, que deixaram tudo ainda mais encantador.',
    },
    {
      name: 'Ana Vitória',
      date: 'Setembro de 2026',
      occasion: 'Fim de semana',
      quote:
        'Cama confortável, roupas de cama e banho novas e limpas. Banheira enorme! Achamos que seria frio, mas o pôr do sol é de frente para a cabana. A Karen responde rápido e atendeu todos os nossos pedidos. Voltaremos!',
    },
    {
      name: 'Lívia',
      date: 'Outubro de 2026',
      occasion: 'Pausa da rotina',
      quote:
        'Perto da cidade, lugar calmo, perfeito para se desligar do agito sem ir para muito longe. Exatamente como nas fotos.',
    },
    {
      name: 'Fabianne',
      date: 'Setembro de 2026',
      occasion: 'Escapada romântica',
      quote:
        'Além de muito bonito e aconchegante por dentro, a área de fora também é linda. Amei estar lá e quero voltar mais vezes.',
    },
    {
      name: 'Milena',
      date: 'Outubro de 2026',
      occasion: 'Noite especial',
      quote:
        'Eu amei! Iremos voltar novamente, com certeza. A Karen é super gentil. Lugar muito lindo.',
    },
  ],

  gallery: [
    { src: '/images/hidro-vista.jpg', alt: 'Hidromassagem com taças de vinho diante das janelas de vidro' },
    { src: '/images/suite-panoramica.jpg', alt: 'Suíte com cama de casal e parede de vidro voltada para o campo' },
    { src: '/images/cabana-piscina.jpg', alt: 'Fachada da cabana A-frame com piscina e pergolado' },
    { src: '/images/vista-campos.jpg', alt: 'Vista da varanda para os campos e montanhas ao entardecer' },
    { src: '/images/hidro-lareira.jpg', alt: 'Hidromassagem sob o teto de vidro com luz dourada do fim de tarde' },
    { src: '/images/decoracao-te-amo.jpg', alt: 'Suíte decorada com balões de coração e pétalas sobre a cama' },
    { src: '/images/suite-luz.jpg', alt: 'Luz do sol entrando pela janela da suíte de madeira' },
    { src: '/images/banheiro.jpg', alt: 'Banheiro em mármore escuro com acabamento de madeira' },
    { src: '/images/cozinha.jpg', alt: 'Cozinha com bancada de madeira e janelas amplas' },
    { src: '/images/vista-varanda.jpg', alt: 'Céu azul e campo vistos através da porta de vidro da varanda' },
    { src: '/images/suite-namorar.jpg', alt: 'Cama com pétalas formando a frase Quer namorar comigo' },
    { src: '/images/cozinha-externa.jpg', alt: 'Área externa com geladeira, forno e bancada de tijolos' },
  ],
}

// Mantemos compatibilidade com exportações antigas
export const BOOKING_URL = cabinConfig.bookingUrl
export const reviews = cabinConfig.reviews
export const gallery = cabinConfig.gallery
