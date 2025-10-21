import { useState } from 'react';

interface Circle {
  id: string;
  title: string;
  items: string[];
  color: string;
  x: number;
  y: number;
}

const circles: Circle[] = [
  {
    id: 'love',
    title: 'То, что ты любишь',
    items: ['Автомобили и автоспорт', 'Автособытия', 'Продуктовое мышление', 'Быстрые результаты'],
    color: '#ef4444',
    x: 35,
    y: 20
  },
  {
    id: 'good',
    title: 'То, в чём ты силён',
    items: ['Переговоры', 'Организация', 'Стратегия', 'Креатив', 'Системное мышление'],
    color: '#3b82f6',
    x: 65,
    y: 20
  },
  {
    id: 'world',
    title: 'То, что нужно миру',
    items: ['Инфраструктура для авто в ЦА и СНГ', 'Экосистемные решения', 'Растущий авторынок'],
    color: '#22c55e',
    x: 35,
    y: 60
  },
  {
    id: 'paid',
    title: 'То, за что будут платить',
    items: ['Удобство и экономия времени', 'Эмоции и статус', 'Безопасность'],
    color: '#eab308',
    x: 65,
    y: 60
  }
];

export default function IkigaiDiagram() {
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <svg
        viewBox="0 0 800 700"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
      >
        <defs>
          {circles.map((circle) => (
            <radialGradient key={`gradient-${circle.id}`} id={`gradient-${circle.id}`}>
              <stop offset="0%" stopColor={circle.color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={circle.color} stopOpacity="0.15" />
            </radialGradient>
          ))}
        </defs>

        {circles.map((circle, index) => (
          <g
            key={circle.id}
            className="transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredCircle(circle.id)}
            onMouseLeave={() => setHoveredCircle(null)}
            style={{
              animation: `pulse-glow 3s ease-in-out infinite`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            <circle
              cx={(circle.x / 100) * 800}
              cy={(circle.y / 100) * 700}
              r={hoveredCircle === circle.id ? 165 : 160}
              fill={`url(#gradient-${circle.id})`}
              stroke={circle.color}
              strokeWidth={hoveredCircle === circle.id ? 4 : 3}
              className="transition-all duration-300"
              style={{
                filter: hoveredCircle === circle.id ? `drop-shadow(0 0 20px ${circle.color})` : 'none'
              }}
            />
          </g>
        ))}

        <g className="animate-pulse-glow">
          <circle
            cx="400"
            cy="280"
            r="80"
            fill="url(#center-gradient)"
            stroke="#f97316"
            strokeWidth="4"
            className="transition-all duration-300"
          />
          <defs>
            <radialGradient id="center-gradient">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </g>

        <text
          x="400"
          y="265"
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="bold"
          className="pointer-events-none"
        >
          Твой Ikigai
        </text>
        <text
          x="400"
          y="290"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          className="pointer-events-none"
        >
          Drive Club
        </text>
        <text
          x="400"
          y="308"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          className="pointer-events-none"
        >
          Экосистема
        </text>

        {circles.map((circle) => (
          <text
            key={`label-${circle.id}`}
            x={(circle.x / 100) * 800}
            y={(circle.y / 100) * 700 - 180}
            textAnchor="middle"
            fill={circle.color}
            fontSize="18"
            fontWeight="bold"
            className="pointer-events-none"
          >
            {circle.title}
          </text>
        ))}
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {circles.map((circle, index) => (
          <div
            key={circle.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 animate-scale-in"
            style={{ 
              animationDelay: `${index * 150}ms`,
              borderColor: hoveredCircle === circle.id ? circle.color : 'rgb(51, 65, 85)'
            }}
            onMouseEnter={() => setHoveredCircle(circle.id)}
            onMouseLeave={() => setHoveredCircle(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: circle.color }}
              />
              <h3 className="text-lg font-bold text-white">{circle.title}</h3>
            </div>
            <ul className="space-y-2">
              {circle.items.map((item, i) => (
                <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                  <span style={{ color: circle.color }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
