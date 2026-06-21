import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/90ec1de5-476c-40a8-9297-3c66a2115058/files/cf4dfa75-13f0-4dbe-baac-903755b09067.jpg';

const NAV = [
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Home', title: 'Уютные домики', text: 'Деревянные домики с резными наличниками, тёплые и комфортные в любой сезон.' },
  { icon: 'Flame', title: 'Русская баня', text: 'Настоящая баня на дровах с вениками и купелью у реки.' },
  { icon: 'Trees', title: 'Отдых у реки', text: 'Беседки, мангальные зоны и тенистый сад на берегу горной реки.' },
  { icon: 'UtensilsCrossed', title: 'Домашняя кухня', text: 'Блюда славянской кухни из свежих местных продуктов.' },
  { icon: 'Mountain', title: 'Прогулки и экскурсии', text: 'Маршруты по горам Сочи, водопады и живописные виды.' },
  { icon: 'Car', title: 'Бесплатная парковка', text: 'Охраняемая территория и удобная парковка для гостей.' },
];

const REVIEWS = [
  { name: 'Ирина', city: 'Москва', text: 'Отдыхали с семьёй — тишина, чистый воздух и душевная атмосфера. Баня — отдельное удовольствие!', rating: 5 },
  { name: 'Алексей', city: 'Ростов-на-Дону', text: 'Уютные домики, приветливые хозяева. Кухня домашняя, всё свежее. Обязательно вернёмся.', rating: 5 },
  { name: 'Марина', city: 'Краснодар', text: 'Прекрасное место рядом с рекой. Дети были в восторге от природы и беседок у воды.', rating: 5 },
];

const Ornament = () => (
  <div className="flex items-center justify-center gap-3 my-6 text-accent">
    <span className="h-px w-16 bg-current opacity-40" />
    <Icon name="Sun" size={22} />
    <span className="h-px w-16 bg-current opacity-40" />
  </div>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen texture-paper">
      <div className="h-2 slavic-border" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-3">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2">
            <Icon name="TreePine" className="text-secondary" size={28} />
            <span className="font-display text-2xl text-primary leading-none">Славянский дворик</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-foreground/80 hover:text-primary transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button className="hidden md:inline-flex" onClick={() => scrollTo('contacts')}>Забронировать</Button>
          <button className="md:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-foreground/80">
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contacts')}>Забронировать</Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Турбаза Славянский дворик" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-background" />
        </div>
        <div className="relative container py-28 md:py-40 text-center animate-fade-in">
          <p className="text-accent font-sans tracking-[0.3em] uppercase text-sm mb-4">Сочи · микрорайон КСМ</p>
          <h1 className="font-display text-5xl md:text-7xl text-primary-foreground drop-shadow-lg">Славянский дворик</h1>
          <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 mt-6 max-w-2xl mx-auto">
            Турбаза для тёплого отдыха на природе — горы, река и уют деревянных домиков
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button size="lg" onClick={() => scrollTo('contacts')}>Забронировать отдых</Button>
            <Button size="lg" variant="secondary" onClick={() => scrollTo('services')}>Наши услуги</Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-20">
        <Ornament />
        <h2 className="font-display text-4xl md:text-5xl text-primary text-center">О нас</h2>
        <div className="max-w-3xl mx-auto mt-8 text-center text-lg leading-relaxed text-foreground/85 space-y-4">
          <p>
            «Славянский дворик» — это уютная турбаза в живописном уголке Сочи, где горы встречаются с горной рекой.
            Мы создали место, где городская суета отступает, а на смену приходят тишина, чистый воздух и душевное тепло.
          </p>
          <p>
            Деревянные домики с резными узорами, настоящая русская баня и домашняя кухня — здесь всё пропитано
            традициями славянского гостеприимства. Приезжайте отдохнуть всей семьёй или дружной компанией.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center">
          {[
            { n: '15+', l: 'домиков' },
            { n: '24/7', l: 'тёплый приём' },
            { n: '5', l: 'минут до реки' },
            { n: '1000+', l: 'счастливых гостей' },
          ].map((s) => (
            <div key={s.l} className="bg-card rounded-xl border border-border py-6 shadow-sm">
              <div className="font-display text-4xl text-secondary">{s.n}</div>
              <div className="text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted/50 py-20">
        <div className="container">
          <Ornament />
          <h2 className="font-display text-4xl md:text-5xl text-primary text-center">Услуги</h2>
          <p className="text-center text-muted-foreground mt-3 mb-12">Всё для комфортного отдыха на природе</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center text-accent mb-5">
                  <Icon name={s.icon} size={28} />
                </div>
                <h3 className="font-heading text-xl text-primary mb-2">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-20">
        <Ornament />
        <h2 className="font-display text-4xl md:text-5xl text-primary text-center">Отзывы гостей</h2>
        <p className="text-center text-muted-foreground mt-3 mb-12">Что говорят те, кто уже отдыхал у нас</p>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-card rounded-2xl border border-border p-7 shadow-sm flex flex-col">
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={18} className="fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic flex-1">«{r.text}»</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-heading text-secondary">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-heading text-primary">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary text-primary-foreground py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Контакты</h2>
            <p className="text-primary-foreground/80 mt-4 mb-8">Будем рады видеть вас в гостях</p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-accent mt-1" />
                <span>Краснодарский край, Сочи, микрорайон КСМ,<br />Речной переулок, 11в/1</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon name="Phone" size={24} className="text-accent" />
                <span>Телефон уточняется</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon name="Clock" size={24} className="text-accent" />
                <span>Приём гостей — круглосуточно</span>
              </li>
            </ul>
            <Button size="lg" variant="secondary" className="mt-8">Позвонить и забронировать</Button>
          </div>
          <div className="rounded-2xl overflow-hidden border-4 border-accent/40 shadow-lg h-80">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/org/slavyanskiy_dvorik/61187059799/"
              width="100%"
              height="100%"
              frameBorder="0"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="h-2 slavic-border" />
      <footer className="bg-foreground text-background/80 py-8 text-center">
        <div className="font-display text-2xl text-background mb-2">Славянский дворик</div>
        <p className="text-sm">© {new Date().getFullYear()} Турбаза в Сочи · Отдых на природе</p>
      </footer>
    </div>
  );
};

export default Index;
