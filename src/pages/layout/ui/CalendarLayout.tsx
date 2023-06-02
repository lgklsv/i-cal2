import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { CalendarLayoutCont } from './CalendarLayout.styles';

type CalendarLayoutProps = {
  children: React.ReactNode;
};

function CalendarLayout({ children }: CalendarLayoutProps) {
  return (
    <CalendarLayoutCont>
      <Header />
      {children}
      <Footer />
    </CalendarLayoutCont>
  );
}

export default CalendarLayout;
