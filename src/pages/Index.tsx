import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const ikigaiData = {
  love: {
    title: 'То, что ты любишь',
    items: ['Автомобили и автоспорт', 'Автособытия', 'Продуктовое мышление', 'Быстрые результаты', 'Улучшение процессов'],
    color: 'bg-red-500',
    icon: 'Heart'
  },
  good: {
    title: 'То, в чём ты силён',
    items: ['Переговоры', 'Организация', 'Стратегия', 'Креатив', 'Системное мышление'],
    color: 'bg-blue-500',
    icon: 'Award'
  },
  world: {
    title: 'То, что нужно миру',
    items: ['Инфраструктура для авто в ЦА и СНГ', 'Экосистемные решения', 'Сервисы для владельцев', 'Растущий авторынок'],
    color: 'bg-green-500',
    icon: 'Globe'
  },
  paid: {
    title: 'То, за что будут платить',
    items: ['Удобство и экономия времени', 'Эмоции и статус', 'Безопасность', 'Сервис премиум-класса'],
    color: 'bg-yellow-500',
    icon: 'DollarSign'
  }
};

const leanCanvas = {
  problem: ['Нет доверия к СТО', 'Нет платформы для энтузиастов', 'Партнёры не знают как найти клиентов'],
  solution: ['Проверенные партнёры', 'Клубные события', 'Единая платформа'],
  uniqueValue: 'Автоэкосистема: клуб + сервис + эмоции',
  advantage: ['Опыт из Яндекс Plus', 'Нет аналогов в ЦА/РФ', 'Эффект сети'],
  segments: ['Владельцы 25-45 лет', 'Энтузиасты тюнинга', 'Бренды и партнёры'],
  channels: ['Telegram', 'Авто-ивенты', 'Сарафан', 'Партнёры'],
  revenue: ['Подписка 500-1000₽/мес', 'B2B партнёрство', 'Ивенты', 'Реклама', 'Data-as-Service'],
  costs: ['Разработка', 'Маркетинг', 'Ивенты', 'Команда']
};

const roadmap = [
  { stage: 'MVP', city: 'Ташкент/Алматы/Москва', action: '10 партнёров + 300 участников', status: 'current' },
  { stage: 'B2B масштаб', city: 'Автоцентры', action: 'Дилеры + бренд-коллаборации', status: 'next' },
  { stage: 'Подписка', city: 'Drive+ членство', action: 'Cashback + закрытые ивенты', status: 'future' },
  { stage: 'Расширение', city: 'КЗ/КГ/РФ', action: 'Мультигородская сеть', status: 'future' },
  { stage: 'Data Layer', city: 'AI', action: 'Персонализация + аналитика', status: 'future' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('ikigai');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50">
              <Icon name="Target" className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Drive Club Ikigai
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Визуализация смысла жизни и бизнес-модели автомобильной экосистемы будущего
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto h-auto p-1 bg-slate-800 border border-slate-700">
            <TabsTrigger
              value="ikigai"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all text-slate-300"
            >
              <Icon name="Target" size={20} />
              <span className="font-semibold">Ikigai</span>
            </TabsTrigger>
            <TabsTrigger
              value="canvas"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all text-slate-300"
            >
              <Icon name="Layout" size={20} />
              <span className="font-semibold">Lean Canvas</span>
            </TabsTrigger>
            <TabsTrigger
              value="roadmap"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all text-slate-300"
            >
              <Icon name="Map" size={20} />
              <span className="font-semibold">Roadmap</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ikigai" className="mt-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-orange-500/30 mb-4">
                <p className="font-bold text-lg">Автоэкосистема: удобство + эмоции + статус + комьюнити</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {Object.entries(ikigaiData).map(([key, data], index) => (
                <Card
                  key={key}
                  className="group bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${data.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon name={data.icon as any} className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{data.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {data.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <Icon name="ArrowRight" size={16} className="mt-1 text-orange-400 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 shadow-2xl shadow-orange-500/50">
              <div className="p-8 text-center">
                <Icon name="Sparkles" className="text-white mx-auto mb-4" size={48} />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Твоя ось Ikigai
                </h2>
                <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
                  Создание и масштабирование автомобильных сервисов, объединяющих удобство, эмоции и статус, с элементами коммьюнити и продукта
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="canvas" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="AlertCircle" className="text-red-400" size={20} />
                    <h3 className="font-bold text-white">Проблемы</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.problem.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Lightbulb" className="text-yellow-400" size={20} />
                    <h3 className="font-bold text-white">Решение</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.solution.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-yellow-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 border-0 md:col-span-2">
                <div className="p-5 text-center flex flex-col items-center justify-center h-full">
                  <Icon name="Zap" className="text-white mb-2" size={32} />
                  <h3 className="font-bold text-white mb-2">Уникальная ценность</h3>
                  <p className="text-white/90 font-semibold text-lg">{leanCanvas.uniqueValue}</p>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Shield" className="text-green-400" size={20} />
                    <h3 className="font-bold text-white">Преимущества</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.advantage.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Users" className="text-blue-400" size={20} />
                    <h3 className="font-bold text-white">Сегменты ЦА</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.segments.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Radio" className="text-purple-400" size={20} />
                    <h3 className="font-bold text-white">Каналы</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.channels.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="TrendingUp" className="text-green-400" size={20} />
                    <h3 className="font-bold text-white">Выручка</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.revenue.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="DollarSign" className="text-orange-400" size={20} />
                    <h3 className="font-bold text-white">Расходы</h3>
                  </div>
                  <ul className="space-y-2">
                    {leanCanvas.costs.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-orange-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-slate-700"></div>
                
                <div className="space-y-6">
                  {roadmap.map((item, index) => (
                    <div
                      key={index}
                      className="relative pl-20 animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`absolute left-5 w-6 h-6 rounded-full border-4 ${
                        item.status === 'current' 
                          ? 'bg-orange-500 border-orange-300 shadow-lg shadow-orange-500/50' 
                          : item.status === 'next'
                          ? 'bg-red-500 border-red-300'
                          : 'bg-slate-700 border-slate-600'
                      }`}></div>
                      
                      <Card className={`${
                        item.status === 'current'
                          ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/50'
                          : 'bg-slate-800/50 border-slate-700'
                      } backdrop-blur-sm hover:scale-[1.02] transition-all`}>
                        <div className="p-5">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">{item.stage}</h3>
                              <p className="text-orange-400 text-sm font-semibold">{item.city}</p>
                            </div>
                            {item.status === 'current' && (
                              <Badge className="bg-orange-500 text-white">Сейчас</Badge>
                            )}
                          </div>
                          <p className="text-slate-300 mt-2">{item.action}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Rocket" className="text-orange-400" size={28} />
                    <h3 className="text-xl font-bold text-white">Модель монетизации</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    <span className="font-semibold text-orange-400">Подписка + B2B партнёрство + ивенты</span>
                  </p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-400 mt-1" />
                      <span>Устойчиво и масштабируемо</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-400 mt-1" />
                      <span>Модель Яндекс Плюс для авто-контента</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-400 mt-1" />
                      <span>Франшизирование в города</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
