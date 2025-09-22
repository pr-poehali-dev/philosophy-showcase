import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index: React.FC = () => {
  const [activeQuality, setActiveQuality] = useState('modern');

  const qualities = [
    {
      id: 'modern',
      title: 'Современный',
      description: 'Основанный на последних трендах конструктивных и цветовых решений. Вкладывайте в современный комфорт, чтобы не жалеть о потраченных деньгах на устаревшие решения.',
      features: ['Актуальные профили ручек Gola', 'Матовые эмали и шпонированные панели', 'Проектирование ниш с точностью до миллиметра']
    },
    {
      id: 'ergonomic',
      title: 'Эргономичный',
      description: 'Проработка эргономики на основе вашей индивидуальной антропометрии и привычек. Перестанете терять вещи благодаря интуитивно понятной организации пространства.',
      features: ['Точные замеры под ваш рост', 'Фурнитура полного выдвижения', 'Система хранения под ваши привычки']
    },
    {
      id: 'tech',
      title: 'Технологичный',
      description: 'Забудете о вздутых столешницах и поврежденном корпусе даже после протечки воды. Станки ЧПУ гарантируют идеальную геометрию и исключают ошибки сборки.',
      features: ['Производство на станках ЧПУ', 'Согласование техдокументации', 'Защита от воды Kleiberit PUR 555.6']
    },
    {
      id: 'practical',
      title: 'Практичный',
      description: 'Мебель из материалов EGGER не выцветает, фасады не выгорают, фурнитура не подвержена царапинам. Сохраняет первозданный вид долгие годы.',
      features: ['Материалы EGGER', 'Высокие эксплуатационные характеристики', 'Обработка составом PUR']
    },
    {
      id: 'safe',
      title: 'Безопасный',
      description: 'Будете спокойны за ребенка и домашних питомцев. Крепление "антиопрокидывание", система soft-close, скрытый монтаж подсветки.',
      features: ['Система "антиопрокидывание"', 'Фурнитура с мягким закрытием', 'Скругленные края столешниц']
    }
  ];

  const teamMembers = [
    {
      name: 'Анна Королева',
      role: 'Главный дизайнер',
      experience: '12 лет опыта',
      description: 'Эксперт в создании современных интерьерных решений'
    },
    {
      name: 'Михаил Соколов',
      role: 'Технолог производства',
      experience: '15 лет опыта',
      description: 'Контролирует качество на всех этапах производства'
    },
    {
      name: 'Елена Васильева',
      role: 'Эргономист',
      experience: '8 лет опыта',
      description: 'Обеспечивает максимальный комфорт каждого изделия'
    }
  ];

  const clientTraits = [
    'Цените качество выше количества — инвестируете в долгосрочный комфорт',
    'Понимаете разницу между ценой и стоимостью — ищете разумную инвестицию',
    'Выбираете вещи, которые служат десятилетиями — против культуры одноразовости',
    'Предпочитаете функциональность показной роскоши — практичность превыше всего',
    'Заботитесь о здоровье и комфорте семьи — безопасность как приоритет',
    'Цените время и хотите предсказуемый результат без стресса и переделок',
    'Строите карьеру в 28-45 лет — активно создаете качественную жизнь',
    'Владеете недвижимостью — видите мебель как инфраструктуру своей жизни'
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-2xl text-charcoal">
              AUTEN
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#philosophy" className="text-charcoal hover:text-warmwood transition-colors">Философия</a>
              <a href="#qualities" className="text-charcoal hover:text-warmwood transition-colors">Качества</a>
              <a href="#team" className="text-charcoal hover:text-warmwood transition-colors">Команда</a>
              <Button variant="outline" className="border-warmwood text-warmwood hover:bg-warmwood hover:text-white">
                Связаться
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Intro */}
      <section className="relative bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-montserrat text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Наша 
                <span className="text-warmwood"> философия</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы не просто производим мебель. Мы <strong className="text-charcoal">системно улучшаем качество жизни</strong> 
                через организацию вашего пространства. Создаем достойную среду обитания — 
                <strong className="text-warmwood">основу для развития, комфорта и спокойствия</strong>.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-warmwood hover:bg-charcoal text-white px-8 py-3">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
                <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-3">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/7f9d4831-572c-4094-8c8a-d277cfe24cbe.jpg" 
                alt="Современная мебель"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-charcoal bg-opacity-20 rounded-lg flex items-center justify-center">
                <Button size="lg" className="bg-white bg-opacity-90 text-charcoal hover:bg-white">
                  <Icon name="Play" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portrait Section */}
      <section id="philosophy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat text-4xl font-bold text-charcoal mb-8">
                Мы создаем мебель для Вас, если вы — «Осознанный Прагматик»
              </h2>
              <div className="mb-6 p-4 bg-gradient-to-r from-warmwood/10 to-wood/10 rounded-lg border-l-4 border-warmwood">
                <p className="text-lg text-charcoal font-semibold italic">
                  "Я строю жизнь, которую заслуживаю"
                </p>
                <p className="text-gray-600 mt-2">
                  Вы не ждете лучшего будущего — создаете его через обдуманные, прагматичные решения
                </p>
              </div>
              <div className="space-y-4">
                {clientTraits.map((trait, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="w-6 h-6 bg-warmwood rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{trait}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-cream rounded-lg">
                <p className="text-lg text-charcoal font-medium">
                  <Icon name="Quote" className="inline mr-2 text-warmwood" size={20} />
                  Узнали себя? Тогда вы — наш "Осознанный Прагматик". Мы говорим на одном языке!
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/b1279667-1507-4d9c-98ac-2e161eda0928.jpg" 
                alt="Осознанный прагматик"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five Qualities Section */}
      <section id="qualities" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-charcoal mb-6">
              Наши 5 качеств
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Идеология осознанного потребления в 5 качествах: Современный, Эргономичный, Технологичный, Практичный, Безопасный
            </p>
          </div>

          <Tabs value={activeQuality} onValueChange={setActiveQuality} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-white">
              {qualities.map((quality) => (
                <TabsTrigger 
                  key={quality.id} 
                  value={quality.id}
                  className="font-montserrat font-medium data-[state=active]:bg-warmwood data-[state=active]:text-white"
                >
                  {quality.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {qualities.map((quality) => (
              <TabsContent key={quality.id} value={quality.id} className="animate-fade-in">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="font-montserrat text-3xl font-bold text-charcoal mb-4">
                          {quality.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {quality.description}
                        </p>
                        <div className="space-y-3">
                          {quality.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-4 h-4 bg-warmwood rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <span className="text-charcoal font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg">
                        <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon name="Image" size={48} className="text-gray-400" />
                          <span className="ml-3 text-gray-500">Демонстрация качества</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-charcoal mb-6">
              Наша команда — эксперты, а не продавцы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы ищем сотрудников, для которых проектирование — не работа, а призвание. 
              <strong className="text-charcoal">Преданность делу, а не плану продаж</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-in" 
                    style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-warmwood to-wood rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-charcoal mb-2">
                    {member.name}
                  </h3>
                  <p className="text-warmwood font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="/img/647b7d8b-c14c-4fe8-a974-a2b423a4bb3f.jpg" 
              alt="Команда экспертов"
              className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-4xl font-bold mb-6">
            Готовы инвестировать в свое спокойствие?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Вы платите не за метры ДСП — вы платите за <strong className="text-white">гарантированный результат, предсказуемый процесс и долгосрочный комфорт</strong>. 
            Приглашаем на консультацию с экспертами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-warmwood hover:bg-wood text-white px-8 py-4">
              <Icon name="MapPin" className="mr-2" size={20} />
              Посетить шоурум
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-montserrat font-bold text-2xl text-charcoal mb-4">
                AUTEN
              </div>
              <p className="text-gray-600">
                Системно улучшаем качество жизни через организацию пространства
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-charcoal mb-4">Навигация</h3>
              <div className="space-y-2">
                <a href="#philosophy" className="block text-gray-600 hover:text-warmwood transition-colors">Философия</a>
                <a href="#qualities" className="block text-gray-600 hover:text-warmwood transition-colors">Качества</a>
                <a href="#team" className="block text-gray-600 hover:text-warmwood transition-colors">Команда</a>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-charcoal mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-600">
                <p>+7 (3452) 123-45-67</p>
                <p>info@auten.ru</p>
                <p>Тюмень, ул. Производственная, 1</p>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-charcoal mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="text-gray-600 hover:text-warmwood cursor-pointer transition-colors" />
                <Icon name="Facebook" className="text-gray-600 hover:text-warmwood cursor-pointer transition-colors" />
                <Icon name="Youtube" className="text-gray-600 hover:text-warmwood cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;