import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Partner {
  id: number;
  name: string;
  category: string;
  discount: string;
  description: string;
  location: string;
  icon: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: 'AutoWash Premium',
    category: 'wash',
    discount: '20%',
    description: 'Комплексная мойка + химчистка салона',
    location: 'Мирабад',
    icon: 'Droplet'
  },
  {
    id: 2,
    name: 'ShinoMont Express',
    category: 'tire',
    discount: '15%',
    description: 'Шиномонтаж и балансировка колёс',
    location: 'Юнусабад',
    icon: 'Circle'
  },
  {
    id: 3,
    name: 'TechService Pro',
    category: 'service',
    discount: '25%',
    description: 'Диагностика и ремонт двигателя',
    location: 'Чиланзар',
    icon: 'Wrench'
  },
  {
    id: 4,
    name: 'Coffee & Drive',
    category: 'cafe',
    discount: '10%',
    description: 'Кофе и завтраки для автолюбителей',
    location: 'Сергели',
    icon: 'Coffee'
  },
  {
    id: 5,
    name: 'Clean Car Studio',
    category: 'wash',
    discount: '30%',
    description: 'Детейлинг и полировка кузова',
    location: 'Яшнабад',
    icon: 'Sparkles'
  },
  {
    id: 6,
    name: 'Auto Parts Plus',
    category: 'service',
    discount: '18%',
    description: 'Оригинальные запчасти со скидкой',
    location: 'Мирзо-Улугбек',
    icon: 'Settings'
  }
];

const categories = [
  { id: 'all', label: 'Все', icon: 'Grid3x3' },
  { id: 'wash', label: 'Мойки', icon: 'Droplet' },
  { id: 'service', label: 'СТО', icon: 'Wrench' },
  { id: 'tire', label: 'Шиномонтаж', icon: 'Circle' },
  { id: 'cafe', label: 'Кафе', icon: 'Coffee' }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
              <Icon name="Car" className="text-white" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Drive Club
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Эксклюзивные скидки и спецпредложения от лучших партнёров для членов клуба
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-5 w-full max-w-3xl mx-auto h-auto p-1 bg-white shadow-sm">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
              >
                <Icon name={cat.icon as any} size={20} />
                <span className="text-xs md:text-sm font-medium">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner, index) => (
            <Card
              key={partner.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      name={partner.icon as any} 
                      className="text-primary group-hover:text-white transition-colors" 
                      size={28} 
                    />
                  </div>
                  <Badge className="bg-primary text-white text-lg font-bold px-4 py-1">
                    -{partner.discount}
                  </Badge>
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {partner.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>{partner.location}</span>
                </div>
              </div>

              <div className="px-6 py-4 bg-secondary/50 border-t border-border">
                <button className="w-full text-primary font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  <span>Получить скидку</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Search" size={32} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">
              В этой категории пока нет партнёров
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
