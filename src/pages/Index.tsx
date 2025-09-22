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
      description: 'Актуальные тренды в дизайне, инновационные материалы и передовые технологии производства.',
      features: ['Минималистичный дизайн', 'Современные материалы', 'Актуальные тренды']
    },
    {
      id: 'ergonomic',
      title: 'Эргономичный',
      description: 'Каждая деталь продумана для максимального комфорта и здоровья позвоночника.',
      features: ['Правильная поддержка', 'Анатомические формы', 'Комфорт в использовании']
    },
    {
      id: 'tech',
      title: 'Технологичный',
      description: 'Современное производство с точностью до миллиметра и контролем качества.',
      features: ['Высокоточное производство', 'Контроль качества', 'Инновационные решения']
    },
    {
      id: 'practical',
      title: 'Практичный',
      description: 'Функциональность на первом месте - каждый элемент имеет практическое назначение.',
      features: ['Функциональность', 'Долговечность', 'Удобство в уходе']
    },
    {
      id: 'safe',
      title: 'Безопасный',
      description: 'Экологически чистые материалы и безопасные покрытия для всей семьи.',
      features: ['Экологичные материалы', 'Безопасные покрытия', 'Сертифицированное качество']
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
    'Цените качество выше количества',
    'Понимаете разницу между ценой и стоимостью',
    'Выбираете вещи, которые служат десятилетиями',
    'Предпочитаете функциональность показной роскоши',
    'Заботитесь о здоровье и комфорте семьи',
    'Цените время и не любите заниматься ремонтом мебели'
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-montserrat font-bold text-2xl text-charcoal">
              COLESTE
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
                Мы не просто производим мебель. Мы создаем систему, которая 
                <strong className="text-charcoal"> улучшает качество жизни</strong> наших клиентов 
                каждый день.
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
                Мы создаем мебель для Вас, если вы...
              </h2>
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
                  Если вы узнали себя хотя бы в 3 пунктах — вы наш человек!
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
              Каждое изделие воплощает нашу идеологию через конкретные решения и инновации
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
              Люди, которые создают мебель с душой и профессиональной экспертизой
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
            Готовы познакомиться с нашей мебелью?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Приглашаем вас в наш шоурум или закажите персональную консультацию с нашими экспертами
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
                COLESTE
              </div>
              <p className="text-gray-600">
                Мебель для осознанных прагматиков
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
                <p>+7 (495) 123-45-67</p>
                <p>info@coleste.ru</p>
                <p>Москва, ул. Примерная, 1</p>
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