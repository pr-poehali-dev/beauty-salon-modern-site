import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Парикмахерские услуги",
      description: "Стрижки, укладки, окрашивание",
      icon: "Scissors",
      price: "от 2000 ₽",
    },
    {
      title: "Маникюр и педикюр",
      description: "Классический и аппаратный маникюр",
      icon: "Palette",
      price: "от 1500 ₽",
    },
    {
      title: "Косметология",
      description: "Уход за лицом, чистки, массаж",
      icon: "Sparkles",
      price: "от 3000 ₽",
    },
    {
      title: "Визаж",
      description: "Макияж для любого случая",
      icon: "Brush",
      price: "от 2500 ₽",
    },
    {
      title: "Брови и ресницы",
      description: "Оформление бровей, наращивание ресниц",
      icon: "Eye",
      price: "от 1800 ₽",
    },
    {
      title: "SPA-процедуры",
      description: "Релаксация и уход за телом",
      icon: "Flower",
      price: "от 4000 ₽",
    },
  ];

  const masters = [
    {
      name: "Анна Петрова",
      specialty: "Топ-стилист",
      experience: "8 лет опыта",
      image: "/img/be28c160-7ff6-4b17-a4f6-2708f9056253.jpg",
    },
    {
      name: "Мария Сидорова",
      specialty: "Мастер маникюра",
      experience: "5 лет опыта",
      image: "/img/be28c160-7ff6-4b17-a4f6-2708f9056253.jpg",
    },
    {
      name: "Елена Козлова",
      specialty: "Косметолог",
      experience: "10 лет опыта",
      image: "/img/be28c160-7ff6-4b17-a4f6-2708f9056253.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">Bellissima</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#masters"
                className="text-foreground hover:text-primary transition-colors"
              >
                Мастера
              </a>
              <a
                href="#prices"
                className="text-foreground hover:text-primary transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="hidden md:inline-flex">Записаться</Button>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/img/26949faa-8267-455a-a92e-e4663b26bf2c.jpg)",
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-primary/90 text-primary-foreground">
            Премиум салон красоты
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Красота в каждой детали
          </h1>
          <p className="text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Комплексный уход и индивидуальный подход к каждому клиенту.
            Современные технологии и профессиональные мастера.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-4 h-auto">
              Записаться онлайн
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-4 h-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm">лет опыта</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-sm">довольных клиентов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">услуг красоты</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <Icon name="ChevronDown" size={32} className="animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bellissima — это современный салон красоты, где каждый клиент
              получает персональный подход и профессиональный сервис высочайшего
              уровня.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-muted-foreground">
                Используем только премиальные материалы и современное
                оборудование
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Команда</h3>
              <p className="text-muted-foreground">
                Опытные мастера с многолетним стажем и постоянным обучением
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забота</h3>
              <p className="text-muted-foreground">
                Индивидуальный подход и внимание к каждому желанию клиента
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр услуг красоты в одном месте
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Icon
                        name={service.icon}
                        className="text-primary"
                        size={24}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Наши мастера
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={master.image}
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {master.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{master.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground">
              Прозрачные цены на все услуги
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Прайс-лист
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Парикмахерские услуги
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span>Женская стрижка</span>
                      <span className="font-semibold">2000-4000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Мужская стрижка</span>
                      <span className="font-semibold">1500-2500 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Окрашивание</span>
                      <span className="font-semibold">3000-8000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Укладка</span>
                      <span className="font-semibold">1500-3000 ₽</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Маникюр и педикюр
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span>Классический маникюр</span>
                      <span className="font-semibold">1500 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Аппаратный маникюр</span>
                      <span className="font-semibold">2000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Покрытие гель-лак</span>
                      <span className="font-semibold">1000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Педикюр</span>
                      <span className="font-semibold">2500 ₽</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Косметология
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span>Чистка лица</span>
                      <span className="font-semibold">3000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Массаж лица</span>
                      <span className="font-semibold">2500 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Пилинг</span>
                      <span className="font-semibold">4000 ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Уход за кожей</span>
                      <span className="font-semibold">3500 ₽</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Запишитесь на консультацию прямо сейчас
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span>ул. Красная, 123, Москва</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <span>info@bellissima.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <div>
                      <p>Пн-Пт: 9:00 - 21:00</p>
                      <p>Сб-Вс: 10:00 - 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн запись</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Button size="lg" className="text-lg px-8">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться онлайн
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Или позвоните нам: +7 (495) 123-45-67
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sparkles" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Bellissima</h3>
              </div>
              <p className="text-muted-foreground">
                Современный салон красоты с индивидуальным подходом к каждому
                клиенту.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Парикмахерские услуги</li>
                <li>Маникюр и педикюр</li>
                <li>Косметология</li>
                <li>SPA-процедуры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Bellissima. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
